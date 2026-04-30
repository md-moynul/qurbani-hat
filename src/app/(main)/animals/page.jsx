import AnimalCard from '@/components/shared/AnimalCard';
import { allData } from '@/lib/data';
import React from 'react';

const AnimalsPage = async() => {
    const data = await allData()

    return (
        <div className="pt-5 space-y-4 container mx-auto" >
            <h2 className="text-4xl font-bold">Featured Animals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {data.map(animal => <AnimalCard key={animal.id} animal={animal} />)}
            </div>
        </div>
    );
};

export default AnimalsPage;