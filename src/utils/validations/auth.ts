import { z } from "zod";
import { TransFunc } from ".";

export const createLoginFormSchema = (t: TransFunc) =>
  z.object({
    email: z.string().email(t("email_invalid")).min(1, t("email_required")),
    password: z
      .string()
      .min(8, t("password_invalid"))
      .min(1, t("password_required")),
    isRemember: z.boolean().optional(),
  });
