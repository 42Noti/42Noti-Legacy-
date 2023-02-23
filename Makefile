SHELL := /bin/bash

EVENT_PROCESS       :=  notifier_event
EXAM_PROCESS        :=  notifier_exam

_ERROR              :=  "\\033[31m"
_SUCCESS            :=  "\\033[32m"
_WARNING            :=  "\\033[33m"
_DEFAULT            :=  "\\033[0m"

_ERROR_LOG          :=  "$(_ERROR)Error:$(_DEFAULT) %s\n"
_SUCCESS_LOG        :=  "\n$(_SUCCESS)[%s]$(_DEFAULT)\n\n"
_WARNING_LOG        :=  "\n$(_WARNING)[%s]$(_DEFAULT)\n"

.PHONY: all start deploy

all: start

start:
	@REPLY=""; \
	if ! type "yarn" &> /dev/null; then \
		printf $(_ERROR_LOG) "yarn is not installed."; \
		exit 1; \
	fi; \
	if ! type "pm2" &> /dev/null; then \
		printf $(_ERROR_LOG) "pm2 is not installed."; \
		exit 1; \
	fi; \
	printf $(_WARNING_LOG) "Please select a process to run"; \
	printf " 1 event\n"; \
	printf " 2 exam\n"; \
	read -p " > " -r; \
	REPLY=`echo $$REPLY | sed 's/^ *//'`; \
	if [[ ! $$REPLY =~ ^(1|2|event|exam)$$ ]]; then \
		printf $(_ERROR_LOG) "Allowed input: 1, 2, event, exam"; \
		exit 1; \
	fi; \
	[[ $$REPLY -eq 1 || "$$REPLY" == "event" ]] && TYPE=event || TYPE=exam; \
	printf $(_SUCCESS_LOG) "\"$$TYPE\" process will be running"; \
	NODE_TYPE=$$TYPE yarn start;

deploy:
	@if ! type "yarn" &> /dev/null; then \
		printf $(_ERROR_LOG) "yarn is not installed."; \
		exit 1; \
	fi; \
	if ! type "pm2" &> /dev/null; then \
		printf $(_ERROR_LOG) "pm2 is not installed."; \
		exit 1; \
	fi; \
	yarn build || (printf $(_ERROR_LOG) "Failed to build the application." && exit 1); \
	pm2 delete $(EVENT_PROCESS) &> /dev/null || true; \
	pm2 delete $(EXAM_PROCESS) &> /dev/null || true; \
	NODE_TYPE=event yarn deploy --name $(EVENT_PROCESS) || (printf $(_ERROR_LOG) "Failed to deploy the event process." && exit 1); \
	sleep 2; \
	NODE_TYPE=exam yarn deploy --name $(EXAM_PROCESS) || (printf $(_ERROR_LOG) "Failed to deploy the event process." && exit 1);
