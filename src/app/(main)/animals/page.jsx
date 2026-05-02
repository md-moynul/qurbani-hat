import Category from '@/components/allAnimals/Category';
import ShortByPrice from '@/components/allAnimals/ShortByPrice';
import AnimalCard from '@/components/shared/AnimalCard';
import { allData } from '@/lib/data';
import React from 'react';

const AnimalsPage = async ({ searchParams }) => {
    const search = await searchParams;
    const { category, sort } = search
    console.log(category, sort);

    const data = await allData()
    console.log(category);

    let filteredData =
        category
            ? data.filter(
                d => d.category.toLowerCase() === category.toLowerCase())
            : data;
    if (sort === 'asc') {
        filteredData.sort((a, b) => a.price - b.price);
    } else if (sort === 'desc') {
        filteredData.sort((a, b) => b.price - a.price);
    }

    if (filteredData.length === 0) {
        return
    }

    return (
        <div className="pt-5 space-y-4 container mx-auto" >
            <h2 className="text-4xl font-bold">All Animals</h2>
            <div className='flex justify-between'>
                <Category />
                <ShortByPrice />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredData.map(animal => <AnimalCard key={animal.id} animal={animal} />)}
            </div>
        </div>
    );
};

export default AnimalsPage;