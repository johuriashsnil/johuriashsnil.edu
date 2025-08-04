'use client';
import TransitionEffects from '@/components/TransitionEffects';
import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <>
            <TransitionEffects />
            <div className='min-h-[50vh]'>
                <h1 className="text-4xl text-center mt-10">Contact Us</h1>
                <div className="flex justify-center items-center h-full flex-col mt-8 font-serif">
                    <h1 className="text-2xl">Mobile: {process.env.NEXT_PUBLIC_NOTICE_CONTACT}</h1>
                    <h1 className="text-2xl">Email: </h1>
                    <h1 className="text-2xl">{process.env.NEXT_PUBLIC_ADDRESS_LINE}</h1>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
