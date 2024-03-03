import express from "express";
import "express-async-errors";
import morgan from "morgan";
import { getAll, getOneByID, create, updateByID, deleteByID, createImage} from "./controllers/planets.js";
import multer from "multer";

const app = express();
const port = 3000;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads")
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})
const upload = multer({storage})


app.use(morgan("dev"));
app.use(express.json());
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    console.log('Request Body:', req.body);
    next();
});
app.use("./uploads", express.static("uploads"))
app.use("./static", express.static("static"))

// [EXERCISE 3 EXPRESS]

app.get("/api/planets/", getAll);

app.get("/api/planets/:id", getOneByID);

app.post("/api/planets", create);

app.put("/api/planets/:id", updateByID)

app.delete("/api/planets/:id", deleteByID)

app.post("/api/planets/:id/image", upload.single("image"), createImage)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
