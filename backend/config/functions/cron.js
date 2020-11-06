"use strict";

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#cron-tasks
 */

module.exports = {
  "*/1 * * * *": async () => {
    // Fetch projects to publish
    const draftProjectsToPublish = await strapi.api.project.services.project.find(
      {
        status: "draft",
        publishedAt_lt: new Date(),
      }
    );

    // Update status of projects
    draftProjectsToPublish.forEach(async (projects) => {
      await strapi.api.project.services.project.update(
        { id: project.id },
        { status: "published" }
      );
    });
  },
};
