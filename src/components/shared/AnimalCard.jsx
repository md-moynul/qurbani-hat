
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { TbCurrencyTaka } from "react-icons/tb";

const AnimalCard = ({ animal }) => {
    return (
        <div>
            <Card className="rounded-xl hover:shadow-2xl shadow shadow-green-200
             hover:shadow-emerald-400  hover:scale-101 transition-all duration-500 ">
                <div className="relative w-full aspect-square">
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
                <p>Weight : <span className='font-bold'>{animal.weight} KG</span></p>
                <p className="text-xl font-semibold flex items-center">
                     Price :<TbCurrencyTaka />{animal.price}
                </p>
                <div>
                    <Link href={`/animals/${animal.id}`}><Button variant="secondary" className={'text-green-800 w-full'}>See Details</Button></Link>
                </div>
            </Card>
        </div>
    );
};

export default AnimalCard;