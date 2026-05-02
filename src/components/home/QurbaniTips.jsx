"use client";

import React from 'react';
import { Card, CardHeader } from '@heroui/react';
import { GiCheckMark } from 'react-icons/gi';

const QurbaniTips = () => {
    const breeds = [
        { name: "Sahiwal", trait: "High meat yield & docile." },
        { name: "Brahman", trait: "Large frame & heat tolerant." },
        { name: "Deshi", trait: "Organic & traditional taste." }
    ];
    
    const tips = [
        "Check for 2 teeth (2 years old).",
        "Stop feed 12 hrs before Qurbani.",
        "Divide meat into 3 equal parts."
    ];

    return (
        <Card className='max-w-4xl mx-auto my-10 p-6 md:p-10 shadow-lg  border-default-100'>
            <CardHeader className=" text-center space-y-5">
                <p className='text-2xl md:text-4xl font-bold text-center text-green-800'>
                    Quick guide for a better experience
                </p>
                <p className='text-default-500 text-lg'>Essential information for Eid-ul-Adha</p>
            </CardHeader>
            <hr className="my-6 border-t border-default-200 w-full" />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='space-y-4'>
                    <h3 className='text-xl md:text-2xl font-semibold text-default-800 border-l-4 border-success-500 pl-3'>
                        Top Breeds
                    </h3>
                    <ul className="space-y-3">
                        {breeds.map((b, i) => (
                            <li key={i} className="flex justify-between items-center text-sm border-b border-default-50 pb-2">
                                <span className="font-bold text-default-700">{b.name}</span>
                                <span className="text-default-500 italic">{b.trait}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='space-y-4'>
                    <h3 className='text-xl md:text-2xl font-semibold text-default-800 border-l-4 border-success-500 pl-3'>
                        Qurbani Tips
                    </h3>
                    <ul className="space-y-1">
                        {tips.map((t, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-default-600 bg-success-50/30 p-2 rounded-lg">
                                <span className="text-success-500 font-bold"><GiCheckMark color='green' /></span>
                                {t}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Card>
    );
};

export default QurbaniTips;