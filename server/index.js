import express from "express"; //set up a web server for your Node.js application. 
import Connection from "./database/db.js";
import routes from "./routes/route.js";
import cors from 'cors';

const app = express();

// app.use(cors());
app.use("/", routes);
app.use(express.urlencoded({extended : true}));
app.use(express.json({extended : true}));

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`server is started on PORT ${PORT}`));