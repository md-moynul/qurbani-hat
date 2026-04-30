
import { Button, Card} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { TbCurrencyTaka } from "react-icons/tb";

const AnimalCard = ({ animal }) => {
    return (
        <div>
            <Card className="rounded-xl">
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
                <div className=" font-semibold flex items-center">
                    Breed : {animal.breed} 
                </div>
                <div className="text-xl font-semibold flex items-center">
                    Price : {animal.price} <TbCurrencyTaka />
                </div>
                <div>
                   <Button variant="secondary" className={'text-green-800'}><Link href={`/animals/${animal.id}`}>See Details</Link></Button>
                </div>
            </Card>
        </div>
    );
};

export default AnimalCard;