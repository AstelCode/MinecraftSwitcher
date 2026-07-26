import Fastify from "fastify";
import dotenv from "dotenv";
import jwt from "@fastify/jwt";
dotenv.config();

// const app = Fastify({
//   logger: true,
// });

// app.register(jwt, {
//   secret: process.env.JWT_SECRET!,
// });

// // app.get("/", async () => {
// //   return {
// //     mesage: "Hola Fastify",
// //   };
// // });

// // app.listen({
// //   port: 3000,
// // });
// const repository = new PrimsaModRespository();

// try {
//   repository.listAll().then((mods) => {
//     console.log("Mods encontrados:", mods);
//   });
// } catch (error) {
//   console.error("Error al consultar la base de datos:", error);
// }
