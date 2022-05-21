const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
  info: {
    version: "1.0.0", // by default: '1.0.0'
    title: "Delivery API",
    description: "",
  },
  host: "", // by default: 'localhost:3000' -- NO! by default empty (but used current host)!
  basePath: "", // by default: '/'
  schemes: [], // by default: ['http']
  consumes: [], // by default: ['application/json']
  produces: [], // by default: ['application/json']
  tags: [
    // by default: empty Array
    {
      name: "Users", // Tag name
      description: "Users API", // Tag description
    },
    {
      name: "Suppliers",
      description: "Suppliers API",
    },
    {
      name: "Products", // Tag name
      description: "Products API", // Tag description
    },
    {
      name: "Reviews",
      description: "Reviews API",
    },
    {
      name: "Orders",
      description: "Orders API",
    },
  ],
  securityDefinitions: {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT",
    },
  }, // by default: empty object (Swagger 2.0)
  definitions: {}, // by default: empty object
  components: {}, // by default: empty object (OpenAPI 3.x)
};

const outputFile = "src/swagger/swagger.json";
const endpointsFiles = [
  "src/routes/index.js",
  "src/routes/users.js",
  "src/routes/products.js",
];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
