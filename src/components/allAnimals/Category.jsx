import { getCategory } from '@/lib/data';

import React from 'react';
import ButtonCategory from './ButtonCategory';

const Category = async () => {
    const data = await getCategory()

    return (
        <div className='flex flex-wrap gap-2'>
            <ButtonCategory  href={`?category${''}`}>All</ButtonCategory>
           
            {data.map(c => <ButtonCategory key={c.id} href={`?category${c.name}`}>{c.name}</ButtonCategory>)}

        </div>
    );
};

export default Category;