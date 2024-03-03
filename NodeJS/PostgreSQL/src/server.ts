import express from "express";
import "express-async-errors";
import morgan from "morgan";
import { getAll, getOneByID, create, updateByID, deleteByID, createImage} from "./controllers/planets.js";


const app = express();
const port = 3000;


app.use(morgan("dev"));
app.use(express.json());
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    console.log('Request Body:', req.body);
    next();
});

// [EXERCISE 3 EXPRESS]

app.get("/api/planets/", getAll);

app.get("/api/planets/:id", getOneByID);

app.post("/api/planets", create);

app.put("/api/planets/:id", updateByID)

app.delete("/api/planets/:id", deleteByID)

app.post("/api/planets/:id/image", createImage)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
