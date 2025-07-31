import { academicPDF } from "@/models/AcademicModel";
import connect from "@/utils/db";
import { NextResponse } from "next/server";


export const GET = async (request, { params }) => {
    const { id } = params;
    const title = id;
    console.log(title)
    const query = { title: title };
    await connect();
    const data = await academicPDF.find(query);
    console.log(data)
    return new NextResponse(JSON.stringify(data), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const PATCH = async (request, { params }) => {
    const { id } = params;
    const title = id;
    const query = { title: title };
    await connect();

    try {
        // Parse the JSON body from the request
        const updatedData = await request.json();

        // Find the document by id and update it with the new data
        const updatedEvent = await academicPDF.findOneAndUpdate(query, updatedData, { new: true });

        if (!updatedEvent) {
            return new NextResponse("Item Not Found", { status: 404 });
        }

        return new NextResponse("Item Updated", { status: 200 });
    } catch (error) {
        console.error(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
export const DELETE = async (request, { params }) => {
    const { id } = params;
    const query = { _id: id };
    await connect();

    try {
        // Find the document by id and delete it
        const deletedEvent = await academicPDF.findOneAndDelete(query);

        if (!deletedEvent) {
            return new NextResponse("Item Not Found", { status: 404 });
        }

        return new NextResponse("Item Deleted", { status: 200 });
    } catch (error) {
        console.error(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
