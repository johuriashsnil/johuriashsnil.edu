import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Employee from '@/models/EmployeeModel';
import { ObjectId } from 'mongodb';


export const DELETE = async (request, { params }) => {
    const { id } = params
    const query = { _id: new ObjectId(id) };
    await connect()
    try {
        await Employee.findByIdAndDelete(query)
        return NextResponse.json("Item Deleted", { status: 200 })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

export const PUT = async (request, { params }) => {
    const { id } = params;
    const query = { _id: new ObjectId(id) };
    await connect();

    try {
        // Parse the JSON body from the request
        const updatedData = await request.json();

        // Find the document by id and update it with the new data
        const updatedEmployee = await Employee.findByIdAndUpdate(query, updatedData, { new: true });

        if (!updatedEmployee) {
            return new NextResponse("Item Not Found", { status: 404 });
        }

        return NextResponse.json("Item Updated", { status: 200 });
    } catch (error) {
        console.error(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
