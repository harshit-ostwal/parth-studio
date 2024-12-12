import { z } from "zod";

export const ReachUsSchema = z.object({
  name: z.string().min(3, "Name Must Be At Least 3 Characters"),
  mobileNo: z
    .string()
    .regex(/(\+)?(91)?( )?[789]\d{9}/g, "Mobile No Must Be Exactly 10 Digits."),
  email: z.string().email("Invalid Email Address"),
  eventType: z.string({
    required_error: "Select At Least 1 Event Type",
    invalid_type_error: "Select At Least 1 Event Type",
  }).min(1, "Select At Least 1 Event Type"),
  eventFromDate: z.date({
    required_error: "Select An Event Start Date",
    invalid_type_error: "Invalid Date Format",
  }),
  eventToDate: z.date({
    required_error: "Select An Event End Date",
    invalid_type_error: "Invalid Date Format",
  }),
  eventLocation: z.string().min(3, "Location Must Be At Least 3 Characters"),
  hearAboutUs: z.string({
    required_error: "Select At Least 1 Platform",
    invalid_type_error: "Select At Least 1 Platform",
  }).min(1, "Select At Least 1 Platform"),
  bodyMessage: z.string().optional(),
});
