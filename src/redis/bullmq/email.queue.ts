import { Queue } from "bullmq";
import connection from "./bullmq.js";

export const emailQueue = new Queue("email-queue", {
  connection,
});