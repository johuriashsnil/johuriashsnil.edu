
import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Employee from '@/models/EmployeeModel';

export async function GET() {
    await connect();
    const employees = await Employee.find();
    return NextResponse.json(employees);
}

export async function POST(request) {
    await connect();
    const body = await request.json();
    const newEmployee = new Employee(body);
    await newEmployee.save();
    return NextResponse.json({ message: 'Employee created successfully' });
}
