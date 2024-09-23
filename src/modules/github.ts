import { Octokit } from "@octokit/rest";
import { createAppAuth } from "@octokit/auth-app";

import { eventType } from "eventType";
import env from "@modules/env";
import IRepository from "@repository/IRepository";
import { Events } from "@entities/events";
import { Exams } from "@entities/exams";
import Logger from "./logger";
import Get from "./di";
import { content } from "./content";

const octokit = new Octokit({
	authStrategy: createAppAuth,
	auth: {
		appId: env.githubConfig.appId,
		privateKey: env.githubConfig.privateKey,
		installationId: env.githubConfig.installationId,
	  },
});

const github = async (event: eventType) => {
	const repository: IRepository<Events | Exams> = Get.get("Repository");
	const logger = new Logger("github");
	const body = content(event);
	const { owner, repo } = env.githubConfig;

	try {
	  const response = await octokit.issues.create(
		{
		  owner,
		  repo,
		  title: event.name,
		  body: body,
		  labels: [env.nodeConfig.type === "event" ? "event" : "exam"],
		}
	  );
      logger.latency(200, new Date().getTime());
	} catch (error) {
	  logger.error(error);
      repository.deleteOne(event.id);
	}
}

export default github;