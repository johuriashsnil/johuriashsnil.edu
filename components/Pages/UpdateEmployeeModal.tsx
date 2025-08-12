
"use client";
import React, { useState, useEffect } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Typography,
} from "@material-tailwind/react";
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";
import { BaseURL } from "@/utils/constant";
import Swal from "sweetalert2";
import axios from "axios";

type Employee = {
    _id: string;
    name: string;
    designation: string;
    contactNo: string;
    img: string;
};

type UpdateEmployeeModalProps = {
    open: boolean;
    handleOpen: () => void;
    employee: Employee | null;
};

export default function UpdateEmployeeModal({ open, handleOpen, employee }: UpdateEmployeeModalProps) {
    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        if (employee) {
            setName(employee.name);
            setDesignation(employee.designation);
            setContactNo(employee.contactNo);
            setImageUrl(employee.img);
        }
    }, [employee]);

    const handleSubmit = async () => {
        if (!name || !designation || !contactNo || !imageUrl) {
            Swal.fire({
                title: "Missing Fields",
                text: "Please fill all fields before submitting.",
                icon: "warning",
                confirmButtonText: "Ok",
            });
            return;
        }
        const data = {
            name,
            designation,
            contactNo,
            img: imageUrl,
        };
        try {
            const response = await axios.put(`${BaseURL}/api/employees/${employee?._id}`, data);
            if (response.status === 200) {
                await handleOpen();
                Swal.fire({
                    title: "Employee Updated",
                    text: "Employee has been updated successfully",
                    icon: "success",
                    confirmButtonText: "Ok",
                })
                    .then(() => {
                        window.location.reload();
                    });
                // Close the modal

            }

        } catch (error) {
            console.error("Error updating employee:", error);
            Swal.fire({
                title: "Error",
                text: "There was an error updating the employee",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    };

    return (
        <Dialog open={open} handler={handleOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <DialogHeader placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <Typography variant="h5" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Update employee
                </Typography>
            </DialogHeader>
            <DialogBody divider placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <div className="grid gap-6">
                    <Input
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        crossOrigin={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                    />
                    <select
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                    >
                        <option value="">Select Designation</option>
                        <option value="Head Teacher">Head Teacher</option>
                        <option value="Assistant Head Teacher">Assistant Head Teacher</option>
                        <option value="Assistant Teacher">Assistant Teacher</option>
                        <option value="Office Assistant">Office Assistant</option>
                        <option value="4th Class Employee">4th Class Employee</option>
                    </select>
                    <Input
                        label="Contact No"
                        value={contactNo}
                        onChange={(e) => setContactNo(e.target.value)}
                        crossOrigin={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                    />
                    <UploadButton
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => setImageUrl(res[0].url)}
                        onUploadError={(error) => alert(`ERROR! ${error.message}`)}
                    />
                    {imageUrl && (
                        <Image
                            src={imageUrl}
                            alt="Employee Image"
                            width={100}
                            height={100}
                            className="rounded-lg"
                            placeholder="blur"
                            blurDataURL={imageUrl}
                        />
                    )}
                </div>
            </DialogBody>
            <DialogFooter placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                    placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                >
                    <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green" onClick={handleSubmit} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <span>Confirm</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
}
