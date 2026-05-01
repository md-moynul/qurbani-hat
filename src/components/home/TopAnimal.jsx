import { allData } from "@/lib/data";
import AnimalCard from "../shared/AnimalCard";
import Link from "next/link";
import { Button } from "@heroui/react";

const TopAnimal = async() => {
    const data =await allData()
    const topAnimal = data.slice(0,4)
    // console.log(topAnimal);
    
    
    return (
        <div className="pt-5 space-y-4" id="Featured">
            <h2 className="text-4xl font-bold">Featured Animals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {topAnimal.map(animal => <AnimalCard key={animal.id} animal={animal}/>)}
            </div>
            <div className="flex justify-center  pt-4">
            <Link href={'/animals'} ><Button className={'bg-green-800 text-white '}>See More</Button></Link>
            </div>
        </div>
    );
};

export default TopAnimal;