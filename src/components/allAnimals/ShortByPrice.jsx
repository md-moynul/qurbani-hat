"use client";


import { ComboBox, Input, Label, ListBox } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";

const animals = [
    {
        id: "",
        name: "Low to high",
    },
    {
        id: "High to low",
        name: "High to low",
    }
];




export default function ShortByPrice({ searchParams }) {
    const search = useSearchParams()
    
    const [selectedKey, setSelectedKey] = useState('');
    const selectedShorting = animals.find((a) => a.id === selectedKey);

    return (
        <div className="space-y-2">
            <ComboBox
                className="w-[256px]"
                onChange={(key) => setSelectedKey(key)}
            >
                <ComboBox.InputGroup>
                    <Input placeholder="Select short" />
                    <ComboBox.Trigger />
                </ComboBox.InputGroup>
                <ComboBox.Popover>
                    <ListBox>
                        {animals.map((animal) => (
                            <ListBox.Item key={animal.id} id={animal.id} textValue={animal.name}>
                                {animal.name}
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        ))}
                    </ListBox>
                </ComboBox.Popover>
            </ComboBox>
        </div>
    );
}