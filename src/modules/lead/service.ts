import type { CreateLeadDto, PatchLeadDto, OnlyIdDto } from "./types.js";
import ApiError from "../../utils/ApiError.js";
import repository from "./repository.js";
import productRepository from "../product/repository.js";
import { emailQueue } from "../../redis/bullmq/email.queue.js";

const createLead = async (payload: CreateLeadDto) => {
  if (payload.type === "RFQ" && !payload.productId) {
    throw new ApiError(400, "Product id is required for product type lead");
  }
  const product = payload.productId ? await productRepository.findActiveById(payload.productId) : null;
  if (payload.productId && !product) {
    throw new ApiError(400, "Product doesn't exist");
  }
  const lead = await repository.createLead({
    fullName: payload.fullName,
    phone: payload.phone,
    email: payload.email,
    address: payload.address,
    type: payload.type,
    productId: payload.productId,
    message: payload.message,
  });
  if (lead) {
    await emailQueue.add(
      "send-mail", {
      to: lead.email,
      subject: "Thanks for contacting us",
      template: "userLeadMail.html",
      variables: {
        fullName: lead.fullName,
        message: lead.message ?? "",
      },
      toAdmin: false
    }, {
      attempts: 5,
      backoff: {
        type: "exponential",
        delay: 2000,
      },
    });
  }
  return await repository.getOneLead(lead.id);
};

const patchLead = async (payload: PatchLeadDto) => {
  const existingLead = await repository.findById(payload.id);

  if (!existingLead) {
    throw new ApiError(400, "Lead doesn't exist");
  }

  return repository.changeStatus({
    id: payload.id,
    status: payload.status,
  });
};


const getLead = async () => {
  const lead = await repository.getLead();

  if (lead.length === 0) {
    throw new ApiError(404, "No data found");
  }

  return lead;
}
const getOneLead = async (payload: OnlyIdDto) => {
  const lead = await repository.getOneLead(payload.id);
  if (!lead) {
    throw new ApiError(404, "Lead doesn't exist");
  }
  return lead;
}
const deleteLead = async (payload: OnlyIdDto) => {
  const lead = await repository.findById(payload.id);
  if (!lead) {
    throw new ApiError(404, "Lead doesn't exist");
  }
  await repository.deleteLead(payload.id);
  return true;
}

export default { createLead, getLead, patchLead, getOneLead, deleteLead };