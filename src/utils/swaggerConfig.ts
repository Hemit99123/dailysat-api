import swaggerJsDoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "DailySat API",
      version: "1.0.0",
      description: "The official version API",
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
      {
        url: "https://api.dailysat.tech",
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // Path to the API docs
};

const specs = swaggerJsDoc(options);

export default specs;
