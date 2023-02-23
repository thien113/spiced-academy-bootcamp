import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();
export const server = createServer((request, response) => {
  if (request.url === "/") {
    const name = chance.name();
    const age = chance.age({ type: "child" });
    const profession = chance.profession();
    response.statusCode = 200;
    response.end(
      `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`
    );
  } else {
    response.statusCode = 404;
    response.end("Not Found");
  }
});
