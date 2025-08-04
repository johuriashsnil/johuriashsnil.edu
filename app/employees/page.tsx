'use client';
import React, { useEffect, useState } from "react";
import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import { useSession } from "next-auth/react";
import AddEmployeeModal from "@/components/Pages/AddEmployeeModal";
import { useModal } from "@/components/Hooks/useModal";
import axios from "axios";
import { BaseURL } from "@/utils/constant";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
import UseLoader from "@/components/Loader/useLoader";
import UpdateEmployeeModal from "@/components/Pages/UpdateEmployeeModal";

const TABLE_HEAD = ["Image", "Name", "Designation", "Contact No", ""];

type Employee = {
    _id: string;
    img: string;
    name: string;
    designation: string;
    contactNo: string;
};

export default function EmployeesTable() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [search, setSearch] = useState("");
    const session = useSession();
    const { isOpen, handleOpen } = useModal();
    const { isOpen: isUpdateOpen, handleOpen: handleUpdateOpen } = useModal();
    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
    const [loadingIndicator, startLoading] = UseLoader();


    useEffect(() => {
        startLoading(); // Show loading indicator
        axios.get(`${BaseURL}/api/employees`)
            .then(response => {
                setEmployees(response?.data);
                console.log("Employees fetched successfully:", response?.data);
            })
            .catch(error => {
                console.error("Error fetching employees:", error);
            });

    }, [startLoading]);

    const filteredEmployees = employees.filter(emp =>
        emp.name.toLowerCase().includes(search.toLowerCase()) ||
        emp.contactNo.includes(search)
    );

    const handleDeleteEmployee = async (id: string) => {
        try {
            const response = await axios.delete(`${BaseURL}/api/employees/${id}`);
            if (response.status === 200) {
                setEmployees(employees.filter(emp => emp._id !== id));
                Swal.fire({
                    title: "Employee Deleted",
                    text: "Employee has been deleted successfully",
                    icon: "success",
                    confirmButtonText: "Ok",
                });

                setEmployees(prev => prev.filter(emp => emp._id !== id));
            }
        } catch (error) {
            console.error("Error deleting employee:", error);
            Swal.fire({
                title: "Error",
                text: "There was an error deleting the employee",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    };

    const handleEditEmployee = (employee: Employee) => {
        setSelectedEmployee(employee);
        handleUpdateOpen();
    };



    return (
        <section className="min-h-[80vh]">
            {

                <Card className="h-full w-full mt-4 " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <AddEmployeeModal open={isOpen} handleOpen={handleOpen} />
                    <UpdateEmployeeModal open={isUpdateOpen} handleOpen={handleUpdateOpen} employee={selectedEmployee} />
                    <CardHeader floated={false} shadow={false} className="rounded-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <div className="mb-8 flex items-center justify-between gap-8">
                            <div>
                                <Typography variant="h5" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    Employees List
                                </Typography>
                                <Typography color="gray" className="mt-1 font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    See information about all employees
                                </Typography>
                            </div>
                            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                                <Button variant="outlined" size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    view all
                                </Button>
                                {
                                    session.status === "authenticated" && (
                                        <Button
                                            variant="gradient"
                                            size="sm"
                                            className="flex items-center gap-2"
                                            onClick={handleOpen}
                                            placeholder={undefined}
                                            onPointerEnterCapture={undefined}
                                            onPointerLeaveCapture={undefined}
                                        >
                                            <UserPlusIcon className="h-4 w-4" />
                                            Add Employee
                                        </Button>
                                    )
                                }
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                            <div className="w-full md:w-72">
                                <Input
                                    label="Search by name or contact no"
                                    icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                                    value={search}
                                    onChange={e => setSearch(e.target.value)} crossOrigin={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                            </div>
                        </div>
                    </CardHeader>
                    {
                        employees.length > 0 ? (
                            <CardBody className="overflow-scroll px-0 " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                <table className="mt-4 w-full min-w-max table-auto text-left">
                                    <thead>
                                        <tr>
                                            {TABLE_HEAD.map((head, index) => (
                                                <th
                                                    key={head}
                                                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                                >
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                                    >
                                                        {head}
                                                        {index !== TABLE_HEAD.length - 1 && (
                                                            <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                                        )}
                                                    </Typography>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredEmployees.map(
                                            (employee, index) => {
                                                const { _id, img, name, designation, contactNo } = employee;
                                                const isLast = index === filteredEmployees.length - 1;
                                                const classes = isLast
                                                    ? "p-4"
                                                    : "p-4 border-b border-blue-gray-50";

                                                return (
                                                    <tr key={_id}>
                                                        <td className={classes}>
                                                            <Avatar src={img} alt={name} size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                                                        </td>
                                                        <td className={classes}>
                                                            <Typography variant="small" color="blue-gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                                                {name}
                                                            </Typography>
                                                        </td>
                                                        <td className={classes}>
                                                            <Typography variant="small" color="blue-gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                                                {designation}
                                                            </Typography>
                                                        </td>
                                                        <td className={classes}>
                                                            <Typography variant="small" color="blue-gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                                                {contactNo}
                                                            </Typography>
                                                        </td>
                                                        <td className={classes}>
                                                            {
                                                                session.data &&
                                                                <div>
                                                                    <Tooltip content="Edit Employee" placement="top">
                                                                        <IconButton
                                                                            variant="text"
                                                                            color="blue-gray"
                                                                            onClick={() => handleEditEmployee(employee)}
                                                                            placeholder={undefined}
                                                                            onPointerEnterCapture={undefined}
                                                                            onPointerLeaveCapture={undefined}
                                                                        >
                                                                            <PencilIcon className="h-5 w-5" />
                                                                        </IconButton>
                                                                    </Tooltip>
                                                                    <Tooltip content="Delete Employee" placement="top">
                                                                        <IconButton
                                                                            variant="text"
                                                                            color="blue-gray"
                                                                            onClick={() => handleDeleteEmployee(_id)}
                                                                            placeholder={undefined}
                                                                            onPointerEnterCapture={undefined}
                                                                            onPointerLeaveCapture={undefined}
                                                                        >
                                                                            <FaDeleteLeft className="h-5 w-5" />
                                                                        </IconButton>
                                                                    </Tooltip>
                                                                </div>
                                                            }
                                                        </td>
                                                    </tr>
                                                );
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </CardBody>) : (loadingIndicator)
                    }
                    <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <Typography variant="small" color="blue-gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Page 1
                        </Typography>
                        <div className="flex gap-2">
                            <Button variant="outlined" size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Previous
                            </Button>
                            <Button variant="outlined" size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Next
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            }</section>
    );
}
