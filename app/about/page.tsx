'use client';
import TransitionEffects from '@/components/TransitionEffects';
import React from 'react';

const AboutMadrasha: React.FC = () => {
    return (
        <>
            <TransitionEffects />
            <div className='min-h-[50vh]'>
                <h1 className="text-4xl text-center mt-10  font-serif underline mb-2">About {process.env.NEXT_PUBLIC_ENGLISH_TITLE}</h1>
                <div className="flex justify-center items-center h-full">
                    <h1 className="text-2xl font-serif">It&apos;s an educational institute situated at {process.env.NEXT_PUBLIC_ADDRESS_LINE}.</h1>
                </div>
            </div>
        </>
    );
};

export default AboutMadrasha;
