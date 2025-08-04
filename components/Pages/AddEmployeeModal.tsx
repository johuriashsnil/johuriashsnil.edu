
"use client";
import React, { useState } from "react";
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


type AddEmployeeModalProps = {
    open: boolean;
    handleOpen: () => void;
};

export default function AddEmployeeModal({ open, handleOpen }: AddEmployeeModalProps) {
    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    // const { startUpload } = useUploadThing("imageUploader");

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
            const response = await axios.post(`${BaseURL}/api/employees`, data);
            if (response.status === 200) {
                handleOpen();
                Swal.fire({
                    title: "AcademicData Published",
                    text: "AcademicData has been published successfully",
                    icon: "success",
                    confirmButtonText: "Ok",
                });
                // Close the modal
                setName("");
                setDesignation("");
                setImageUrl("");
                setContactNo("");
                window.location.reload();
            }

        } catch (error) {
            console.error("Error adding employee:", error);
            Swal.fire({
                title: "Error",
                text: "There was an error publishing the AcademicData",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    };

    return (
        <Dialog open={open} handler={handleOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <DialogHeader placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <Typography variant="h5" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Add a new employee
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
                        <option value="4rth Class Employee">4rth Class Employee</option>
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
