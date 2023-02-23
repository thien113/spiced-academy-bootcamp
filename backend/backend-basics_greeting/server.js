import { createServer } from "node:http";

export const server = createServer((request, response) => {
  const name = "Thien";
  if (request.url === "/") {
    response.statusCode = 200;
    response.end(`Hello ${name}`);
  }
});
