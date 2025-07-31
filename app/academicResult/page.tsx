'use client';
import TransitionEffects from '@/components/TransitionEffects';
import { BaseURL } from '@/utils/constant';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import "@cyntler/react-doc-viewer/dist/index.css";
import axios from 'axios';
import React, { useEffect } from 'react';

const AcademicCalender: React.FC = () => {
    const [data, setData] = React.useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseURL}/api/academic/${'academicResult'}`);
                if (!response) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.data[0].file;
                setData(result);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const docs = [
        {
            uri: data,
            fileName: 'Academic Result',

        },
    ];

    return (
        <>
            <TransitionEffects />
            <div className='min-h-[50vh]'>
                <h1 className="text-4xl text-center mt-10">Academic Result</h1>
                <div className="flex justify-center items-center h-full">
                    <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
                </div>
            </div>
        </>
    );
};

export default AcademicCalender;
