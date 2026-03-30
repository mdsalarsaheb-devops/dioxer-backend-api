import { FastifyInstance } from "fastify";

export const appService = (app: FastifyInstance) => ({
  create: async (data: { name: string; email: string }) => {
    return app.prisma.user.create({ data });
  },

  findAll: async () => {
    return app.prisma.user.findMany();
  },

  findById: async (id: string) => {
    return app.prisma.user.findUnique({ where: { id } });
  },

  update: async (id: string, data: { name?: string; email?: string }) => {
    return app.prisma.user.update({
      where: { id },
      data,
    });
  },

  delete: async (id: string) => {
    return app.prisma.user.delete({ where: { id } });
  },
});
