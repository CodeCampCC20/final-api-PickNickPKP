import express, { json } from "express";
import cors from "cors";
import errorMiddleware from "./src/middlewares/error.middleware.js";
import notFound from "./src/middlewares/not-found.middleware.js";
import authRouter from "./src/routes/auth.route.js"
import userRouter from "./src/routes/user.route.js";
import userGetMeRouter from "./src/routes/user-me.route.js";
import doctorGetMeRouter from "./src/routes/doctor-me.route.js";
import healthRecordRouter from "./src/routes/health-record.route.js";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter );
app.use("/auth", userRouter );
app.use("/", userGetMeRouter);
app.use("/", doctorGetMeRouter);
app.use("/", healthRecordRouter);

app.use(errorMiddleware);
app.use(notFound);

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log(`Server is running port ${PORT}`));
