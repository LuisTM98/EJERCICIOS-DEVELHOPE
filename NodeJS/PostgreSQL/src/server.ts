import express from "express";
import "express-async-errors";
import morgan from "morgan";
import Joi, { ObjectSchema } from "joi";
import { getAll, getOneByID, create, updateByID, deleteByID } from "./controllers/planets.js";

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    console.log('Request Body:', req.body);
    next();
});

const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required()
});

// [EXERCISE 3 EXPRESS]

app.get("/api/planets/", getAll);

app.get("/api/planets/:id", getOneByID);

app.post("/api/planets", create);

app.put("/api/planets/:id", updateByID)

app.delete("/api/planets/:id", deleteByID)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
