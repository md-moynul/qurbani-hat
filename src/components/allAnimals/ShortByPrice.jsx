"use client";

import { ComboBox, Input, ListBox } from "@heroui/react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

const sortingOptions = [
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
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);
            return params.toString();
        },
        [searchParams]
    );

    const handleSelectionChange = (key) => {
        if (key) {
            const queryString = createQueryString('sort', key);
            router.push(`${pathname}?${queryString}`);
        }
    };

    return (
        <div className="space-y-2">
            <ComboBox
                className="w-[256px]"
               
                onChange={(key) => handleSelectionChange(key)}
            >
                <ComboBox.InputGroup>
                    <Input placeholder="Sort by Price" />
                    <ComboBox.Trigger />
                </ComboBox.InputGroup>
                <ComboBox.Popover>
                    <ListBox>
                        {sortingOptions.map((option) => (
                            <ListBox.Item key={option.id} id={option.id} textValue={option.name}>
                                {option.name}
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        ))}
                    </ListBox>
                </ComboBox.Popover>
            </ComboBox>
        </div>
    );
}
