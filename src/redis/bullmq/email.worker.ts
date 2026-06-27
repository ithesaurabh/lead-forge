import { Worker } from "bullmq";
import connection from "./bullmq.js";
import { sendMail } from "../../services/mail/mail.service.js";

new Worker("email-queue", async (job) => {
    await sendMail(job.data);},{connection,}
);