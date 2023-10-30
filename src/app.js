import express from "express";
import "express-async-errors"
import cors from "cors";
import dotenv from "dotenv";

import router from "./routes/index.js";
import handleErrors from "./middlewares/handleErrors.middleware.js";

dotenv.config()

// Server configuration
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(handleErrors)

const port = process.env.PORT || 5000
app.listen(port, () => console.log('listening on port ' + port));