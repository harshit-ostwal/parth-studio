import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
    try {
        const galleryImages = await prisma.gallery.findMany();
        return NextResponse.json({ galleryImages });
    } catch (error) {
        return NextResponse.json({ message: "Gallery Image Fetching Data Error?", error }, { status: 500 });
    }
}