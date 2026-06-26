import type { LeadStatus, Prisma } from "../../generated/prisma/client.js";
import prisma from "../../prisma/client.js";


type ChangeLeadStatusInput = {
  id: string;
  status: LeadStatus;
};
const findByStatus = async (status: LeadStatus) => {
  return prisma.lead.findMany({
    where: { status },
  });
};

const getLead = async () => {
  return prisma.lead.findMany({
    select: {
      id: true,
      fullName: true,
      email: true,
      type: true,
      status: true,
    },
  });
};

const getOneLead = async (id: string) => {
  return prisma.lead.findUnique({
    where:{
      id
    },
    select: {
      id: true,
      fullName: true,
      phone: true,
      email: true,
      address:true,
      message:true,
      type:true,
      status:true
    },
  });
};


const findById = async (id: string) => {
  return prisma.lead.findUnique({
    where: { id },
  });
};

const createLead = async (data: Prisma.LeadCreateInput) => {
  return prisma.lead.create({
    data
  });
};

const changeStatus = async (data: ChangeLeadStatusInput) => {
  return prisma.lead.update({
    where: { id: data.id },
    data: { status: data.status },
  });
};

const deleteLead = async (id: string) => {
  return prisma.lead.delete({
    where: {
      id,
    },
  });
};

export default {findByStatus, findById, getLead,  getOneLead, createLead, changeStatus, deleteLead };