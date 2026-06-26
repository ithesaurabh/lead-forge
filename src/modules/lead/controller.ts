import { Request, Response } from "express";
import service from "./service.js";
import { CreateLeadDto, OnlyIdDto, PatchLeadDto } from "./types.js";
import { sendMail } from "../../services/mail/mail.service.js";

const getLead = async (req: Request, res: Response) => {
  const lead = await service.getLead();

  return res.status(200).json({
    success: true,
    message: "Leads fetched successfully",
    data: lead,
  });
};

const getOneLead = async (req: Request<OnlyIdDto, {}, {}>, res: Response) => {
  const lead = await service.getOneLead(req.params);

  return res.status(200).json({
    success: true,
    message: "Lead data fetched successfully",
    data: lead
  })
}
const deleteLead = async (req: Request<OnlyIdDto, {}, {}>, res: Response) => {
  await service.deleteLead(req.params);

  return res.status(200).json({
    success: true,
    message: "Lead deleted successfully",
  })
}

const createLead = async (req: Request<{}, {}, CreateLeadDto>, res: Response) => {
  const lead = await service.createLead(req.body);
  if (lead) {
    await sendMail({
      to: lead.email,
      subject: "Thanks for contacting us",
      template: "userLeadMail.html",
      variables: {
        fullName: lead.fullName,
        message: lead.message ?? "",
      },
      toAdmin: false
    });
  }
  return res.status(201).json({
    success: true,
    message: "Lead created successfully",
    data: lead,
  });
};

const patchLead = async (req: Request<{}, {}, PatchLeadDto>, res: Response) => {
  await service.patchLead(req.body);

  return res.status(200).json({
    success: true,
    message: "Lead status updated successfully",
  });
};
export default { createLead, getLead, patchLead, getOneLead, deleteLead };