import express from "express";
import routes from "./routes/index.js";
import errorMiddleware from "./middlewares/error.js";
import notFoundMiddleware from "./middlewares/not-found.js";
import httpLogger from "./middlewares/request-logger.js";

const app = express();
app.use(express.json());
app.use(httpLogger);
app.use("/api/v1",routes);
app.get("/health", (req, res) => {
  res.send("The application version - 1.0.0 is running healthy");
});
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;