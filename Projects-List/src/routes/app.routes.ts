import { FastifyPluginAsync } from "fastify";
import { appService } from "../services/api.service";

const appRoutes: FastifyPluginAsync = async (app) => {
  const service = appService(app);

  app.post("/", async (req, reply) => {
    const body = req.body as { name: string; email: string };
    const user = await service.create(body);
    return reply.code(201).send(user);
  });

  app.get("/", async () => {
    return service.findAll();
  });

  app.get("/:id", async (req) => {
    const { id } = req.params as { id: string };
    return service.findById(id);
  });

  app.put("/:id", async (req) => {
    const { id } = req.params as { id: string };
    const body = req.body as { name?: string; email?: string };
    return service.update(id, body);
  });

  app.delete("/:id", async (req) => {
    const { id } = req.params as { id: string };
    return service.delete(id);
  });
};

export default appRoutes;
