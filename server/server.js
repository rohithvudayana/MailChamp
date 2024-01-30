import express from "express"; //set up a web server for your Node.js application. 
import Connection from "./database/db.js";
import routes from "./routes/route.js";
import cors from 'cors';
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json({extended : true}));
app.use("/", routes);

Connection();

app.listen(PORT, () => console.log(`server is started on PORT ${PORT}`))