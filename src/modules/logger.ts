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

const GithubLogger = winston.createLogger({
  level: "debug",
  format: printf(({ message }) => `${message}`),
  transports: [
    new winstonDaily({
      level: "debug",
      datePattern: "YY-MM-DD",
      dirname: `logs/${env.nodeConfig.type}/github`,
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

    if (this.start !== 0) {
      const message: string = `${datetime(new Date(), true)}:${status}:${this.start}:${end}:${ms}`;

      await new Promise(() => {
        switch (this.type) {
          case "auth":
            AuthLogger.debug(message);
            break;
          case "event":
            EventLogger.debug(message);
            break;
          case "slack":
            SlackLogger.debug(message);
            break;
          case "octokit":
            GithubLogger.debug(message);
            break;
          default:
            break;
        }
      });
    }
  }

  async error(error: AxiosError | TypeORMError | any) {
    const code = error instanceof AxiosError ? error.response.status : error instanceof TypeORMError ? error["code"] : "Unknown";
    const message = `${datetime(new Date(), true)}:${this.type}:${code}:${error.message}`;

    await new Promise(() => {
      ErrorLogger.error(message);
    });
  }
}

export default Logger;
