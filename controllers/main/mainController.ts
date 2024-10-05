import { Request, Response } from "express";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const mailSchema = z.object({
  mail: z.string().min(1, "mail is required"),
});

export const subscribeMail = async (req: Request, res: Response) => {
  try {
    const result = mailSchema.safeParse(req.body);
    if (!result.success) {
      return res
        .status(400)
        .json({ message: "Validation error", errors: result.error.errors });
    }
    const { mail } = result.data;
    const mailSubscribe = await prisma.subscriber.create({
      data: {
        mail: mail,
      },
    });

    res.status(201).json(mailSubscribe);
  } catch (error) {
    console.error("Error subscribing to mail", error);
    res.status(500).json({ message: "Error subscribing to mail" });
  }
};
