const express = require("express");
const server = express();
//get the constant definition inside index.js on config folder
const { PORT } = require("./config");
const { HomeRoutes, QuotesRoutes } = require("./routes");
const { NotFoundMiddleWare } = require("./middlewares");

server.use(express.static("./public"));
server.use(express.json());

server.use("/", HomeRoutes);
server.use("/", QuotesRoutes);
server.use(NotFoundMiddleWare);

//create server using the port specified on config folder
server.listen(PORT, () => {
  console.log(`Application running on PORT ${PORT}`);
});
