import express from "express";


// F76MVhrPHXpXxEVE password




import cors from "cors";
import { imageRouter } from "./routes/image.route.js";
import { helloRouter } from "./routes/hello.route.js";
import { testRouter } from "./routes/test.route.js";
import { connectDb } from "./config/conectDb.js";
const app = express();
app.use(cors());
app.use(express.json());

// connect mongo db 
connectDb();

// routers 
app.use("/api/image", imageRouter);
app.use("/api", helloRouter);
app.use("/api", testRouter);


app.listen(3000, () => {
    console.log("server running on port ", 3000);
});