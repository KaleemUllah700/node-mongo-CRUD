import express from "express";
import bookRoutes from "./routes/bookRoutes.js";
import bodyParser from "body-parser";
import db from "./config/db/index.js";

const app = express();
app.use(bodyParser.json());
app.use("/",bookRoutes);

const PORT=3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});