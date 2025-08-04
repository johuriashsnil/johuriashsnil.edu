
import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
});

const Employee = mongoose.models.Employee || mongoose.model('Employee', EmployeeSchema);

export default Employee;
