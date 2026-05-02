"use client";


import { ComboBox, Input, Label, ListBox } from "@heroui/react";

const animals = [
    {
        id: "",
        name: "All"
    },
    {
        id: "asc",
        name: "Low to high",
    },
    {
        id: "desc",
        name: "High to low",
    }
];

export default function ShortByPrice() {


    return (
        <div className="space-y-2">
            <ComboBox
                className=""
            >
                <ComboBox.InputGroup>
                    <Input placeholder="Select short" />
                    <ComboBox.Trigger />
                </ComboBox.InputGroup>
                <ComboBox.Popover>
                    <ListBox>
                        {animals.map((animal) => (
                            <ListBox.Item key={animal.id} id={animal.id} textValue={animal.name} href={`?sort=${animal.id}`}>
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