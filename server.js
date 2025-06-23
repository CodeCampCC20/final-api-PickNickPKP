import express, { json } from "express";
import cors from "cors";
import errorMiddleware from "./src/middlewares/error.middleware.js";
import notFound from "./src/middlewares/not-found.middleware.js";
import authRouter from "./src/routes/auth.route.js"
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth/register", authRouter );
// app.use("/auth/login", () => {});
// app.use("/auth/users", () => {});
// app.use("/auth/doctors", () => {});
// app.use("/auth/health-records", () => {});
// app.use("/auth/doctor-notes", () => {});

app.use(errorMiddleware);
app.use(notFound);

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log(`Server is running port ${PORT}`));
