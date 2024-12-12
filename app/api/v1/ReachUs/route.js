import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";
import prisma from "@/lib/prismadb";

export async function POST(req, res) {
    const { name, mobileNo, email, eventType, eventFromDate, eventToDate, eventLocation, hearAboutUs, bodyMessage } = await req.json();

    if (!name || !mobileNo || !email || !eventType || !eventFromDate || !eventToDate || !eventLocation || !hearAboutUs) {
        return NextResponse.json({ Response: "Please Fill All The Requierd Fields!" }, { status: 400 })
    }

    try {
        const transport = createTransport({
            service: "gmail",
            priority: "high",
            secure: true,
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: process.env.ADMIN_EMAIL_ID,
                pass: process.env.ADMIN_PASSWORD,
            },
        })

        const dbRes = await prisma.reachUs.create({
            data: {
                name,
                mobileNo,
                email,
                eventType,
                eventFromDate,
                eventToDate,
                eventLocation,
                hearAboutUs,
                bodyMessage
            }
        });

        const mailRes = await transport.sendMail({
            from: `Parth Studio <${process.env.USER_EMAIL_ID}>`,
            to: email,
            subject: `Hi ${name}, We Received Your Inquiry!`
        })

        const mailRes2 = await transport.sendMail({
            from: `Parth Studio <${process.env.USER_EMAIL_ID}>`,
            to: process.env.USER_EMAIL_ID,
            subject: ` Hi Parth Studio, We Received An Your Inquiry From ${name}!`
        })

        if (dbRes && mailRes && mailRes2) {
            return NextResponse.json({ Response: "Reach Us Form Has Been Submitted Successfully!" }, { status: 201 })
        }
        else {
            return NextResponse.json({ Response: "Failed To Process Your Reach Us Form! Please Try Again Later" }, { status: 500 })
        }
    } catch {
        return NextResponse.json({ Response: "An Enexpected Error Occured While Submitting Reach Us Form!" }, { status: 500 })
    }
}