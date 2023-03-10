import datetime from "@modules/datetime";
import { eventType } from "eventType";
import env from "@modules/env";

const parseContent = (description: string): string => {
  if (!description || !description.length) return undefined;

  return description
    .split("\n")
    .map((line: string) => line.trim())
    .join("\n")
    .replace(/- /g, "  ๐ ");
};

/* 
    ์ต์  ์ด๋ฒคํธ๋ฅผ ์ฌ๋ ๋งํฌ๋ค์ด์ผ๋ก ํฌ๋งท ํ ๋ฐํ
    -------------
    ์ ๋ชฉ
    ๋ด์ฉ
    ์ฅ์
    ์ด์
    ์ผ์
    
    ํ๊ทธ
    -------------
*/

export const content = (event: eventType) => {
  const emoji = env.nodeConfig.type === "event" ? "๐ฆ" : "๐";
  const title = event.name;
  const content = parseContent(event.description);
  const location = event.location.length > 0 ? event.location : "โ";
  const max = event.max_people !== null ? event.max_people + "๋ช" : "์ ํ ์์";
  const begin = "`" + datetime(event.begin_at) + "`";
  const end = "`" + datetime(event.end_at) + "`";
  const hashTag =
    env.nodeConfig.type === "event" && event.themes.length > 0
      ? event.themes.map((value) => {
          return "# " + value.name;
        })
      : null;

  return (
    `${emoji}  *${title}*  ${emoji}` +
    (content ? `\n   \n \`\`\`${content}\`\`\`` : "") +
    "\n   \n   " +
    "\nโบ ์ฅ์  :  " +
    location +
    "\nโบ ์ด์  :  " +
    max +
    "\nโบ ์ผ์  :  " +
    begin +
    "\nโบ ์ข๋ฃ  :  " +
    end +
    (hashTag ? "\n   \n" + hashTag.join(",  ") : "")
  );
};

export const errorContent = (error: string, trace: string): string => {
  return `\`${error}\`\n\n${trace}`;
};
