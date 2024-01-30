import { Octokit } from "octokit";

import { eventType } from "eventType";
import env from "@modules/env";
import IRepository from "@repository/IRepository";
import { Events } from "@entities/events";
import { Exams } from "@entities/exams";
import Logger from "./logger";
import Get from "./di";
import { content } from "./content";

const octokit = new Octokit({
  auth: env.githubConfig.auth,
});

const OWNER = env.githubConfig.owner;
const REPO = env.githubConfig.repo;

const github = async (event: eventType) => {
	const repository: IRepository<Events | Exams> = Get.get("Repository");
	const logger = new Logger("github");
	const body = content(event);

	try {
	  const response = await octokit.request(
		`POST /repos/${OWNER}/${REPO}/issues`,
		{
		  owner: "OWNER",
		  repo: "REPO",
		  title: event.name,
		  body: body,
		  labels: [env.nodeConfig.type === "event" ? "event" : "exam"],
		  headers: {
			"X-GitHub-Api-Version": "2022-11-28",
		  },
		}
	  );
      logger.latency(200, new Date().getTime());
	} catch (error) {
      repository.deleteOne(event.id);
	}
}

export default github;