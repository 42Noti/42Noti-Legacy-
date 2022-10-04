import winston from "winston";
import winstonDaily from "winston-daily-rotate-file";
import datetime from "@modules/datetime";
import env from "@modules/env";
import { TypeORMError } from "typeorm";
import { AxiosError } from "axios";
import { slackError } from "@modules/slack";

const { printf } = winston.format;

const AuthLogger = winston.createLogger({
  level: "debug",
  format: printf(({ message }) => `${message}`),
  transports: [
    new winstonDaily({
      level: "debug",
      datePattern: "YY-MM-DD",
      dirname: `logs/${env.nodeConfig.type}/auth`,
      filename: "%DATE%.log",
      maxFiles: "7d",
      zippedArchive: true,
    }),
  ],
});

const EventLogger = winston.createLogger({
  level: "debug",
  format: printf(({ message }) => `${message}`),
  transports: [
    new winstonDaily({
      level: "debug",
      datePattern: "YY-MM-DD",
      dirname: `logs/${env.nodeConfig.type}/event`,
      filename: "%DATE%.log",
      maxFiles: "7d",
      zippedArchive: true,
    }),
  ],
});

const SlackLogger = winston.createLogger({
  level: "debug",
  format: printf(({ message }) => `${message}`),
  transports: [
    new winstonDaily({
      level: "debug",
      datePattern: "YY-MM-DD",
      dirname: `logs/${env.nodeConfig.type}/slack`,
      filename: "%DATE%.log",
      maxFiles: "7d",
      zippedArchive: true,
    }),
  ],
});

const ErrorLogger = winston.createLogger({
  level: "error",
  format: printf(({ message }) => `${message}`),
  transports: [
    new winstonDaily({
      level: "error",
      datePattern: "YY-MM-DD",
      dirname: `logs/${env.nodeConfig.type}/error`,
      filename: "%DATE%.log",
      maxFiles: "7d",
      zippedArchive: true,
    }),
  ],
});

class Logger {
  start: number;
  type: string;

  constructor(type: string) {
    this.type = type;
    this.start = new Date().getTime();
  }

  async latency(status: number, end: number) {
    const ms = end - this.start;

    if (ms > 2000) await slackError({ statusCode: status, stack: new Error().stack, message: `2초 이상 걸린 이벤트 - ${ms}ms` });
    if (this.start !== 0) {
      const message: string = `${datetime(new Date())}:${status}:${this.start}:${end}:${ms}`;

      await new Promise(() => {
        if (this.type === "auth") AuthLogger.debug(message);
        else if (this.type === "event") EventLogger.debug(message);
        else if (this.type === "slack") SlackLogger.debug(message);
      });
    }
  }

  async error(error: AxiosError | TypeORMError | any) {
    const code =
      error instanceof AxiosError
        ? error.message !== "timeout of 10000ms exceeded"
          ? error.response.status
          : 408
        : error instanceof TypeORMError
        ? error["code"]
        : "Unknown";
    const message = `${datetime(new Date())}:${this.type}:${code}:${error.message}`;

    await new Promise(() => {
      ErrorLogger.error(message);
    });
  }
}

export default Logger;
