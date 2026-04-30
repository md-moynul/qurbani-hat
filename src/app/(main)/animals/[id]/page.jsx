import { BuyNow } from '@/components/details-page/BuyNow';
import { allData } from '@/lib/data';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(typeof id);

    const data = await allData()
    const animals = data.filter(animal => animal.id == parseInt(id))
    const animal = animals[0];
    if (!animal) {
        return <h1>loading</h1>
    }
    console.log(animal.image);

    return (
        <div className='py-10'>
            <div className='max-w-xl mx-auto '>
                <Card className="rounded-xl p-8 space-y-2">
                    <div className="relative w-[60%] mx-auto aspect-square">
                        <Image
                            src={animal.image}
                            alt={`${animal.name} `}
                            fill
                            className="object-center rounded-xl w-full"
                        />
                    </div>
                    <Card.Header>
                        <Card.Title className="text-2xl font-bold text-green-700">{animal.name}</Card.Title>
                    </Card.Header>
                    <p className="">{animal.description}</p>
                    <p className="text-xl font-semibold flex items-center">
                        Price :<TbCurrencyTaka />{animal.price}
                    </p>
                    <div className='flex justify-between'>
                        <p>Weight : <span className='font-bold'>{animal.weight} KG</span></p>
                        <p className="">Age : {animal.age} Years</p>
                        <p className=" ">Breed : {animal.breed}</p>
                    </div>
                     <p className=" ">Location :<span className='font-bold'> {animal.location}</span></p>
                    <div>
                        <BuyNow/>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default DetailsPage;