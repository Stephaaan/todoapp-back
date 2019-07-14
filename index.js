const config = require("./config");
const app = require("express")();
const router = require("./Router");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());
app.use("/", router);
app.listen(config.app.port);

