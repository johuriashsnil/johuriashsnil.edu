import mongoose from "mongoose";

const academicData = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        file: {
            type: String,
            required: true,
        },
        time: {
            type: String,
        },
    }
);

export const academicPDF = mongoose.models.academicPDF || mongoose.model("academicPDF", academicData);
