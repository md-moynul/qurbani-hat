import Category from '@/components/allAnimals/Category';
import AnimalCard from '@/components/shared/AnimalCard';
import { allData } from '@/lib/data';
import React from 'react';

const AnimalsPage = async({searchParams}) => {
    const {category} = await searchParams;
    const data = await allData()
    console.log(category);
    
    const filteredData =  category ? data.filter(d => d.category.toLowerCase() === category.toLowerCase()) : data 
    console.log(filteredData);
    
    
    

    return (
        <div className="pt-5 space-y-4 container mx-auto" >
            <h2 className="text-4xl font-bold">All Animals</h2>
            <Category />
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredData.map(animal => <AnimalCard key={animal.id} animal={animal} />)}
            </div>
        </div>
    );
};

export default AnimalsPage;