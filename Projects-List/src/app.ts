import Fastify from "fastify";
import cors from "@fastify/cors";
import userRoutes from "./routes/app.routes";
import prismaPlugin from "./plugins/prisma";

export const buildApp = () => {
  const app = Fastify({ logger: true });

  app.register(cors);
  app.register(prismaPlugin);
  app.register(userRoutes, { prefix: "/app" });

  return app;
};
