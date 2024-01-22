"use client"
import { Button } from "@/components/ui/Button";
import { FC, useEffect, useState } from 'react'
import { Check, ChevronDown } from "lucide-react"
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "./Popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "./Command";

interface DynamicSelectProps {
    data?: string[],
    placeholder?: string,
    onChange?: any;
}

const DynamicSelect: FC<DynamicSelectProps> = ({ data, placeholder ,onChange}) => {
    const [open, setOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState("")
    
    useEffect(() => {
        if (onChange) {
            onChange(selectedValue);
        }
    }, [selectedValue]);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild className="w-full">
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={`w-full justify-between text-xs py-[16px] capitalize font-normal hover:border-theme ${open ? "border-theme":"border-borderV2"}`}
                >
                    <div className="flex items-center justify-between gap-2 w-full">
                       <h5> {selectedValue ? selectedValue : placeholder}</h5>
                       <span className="flex-shrink-0"><ChevronDown className="w-4 h-4"/></span>
                    </div>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="!w-[260px] p-0 pt-1">
                <Command className="w-full">
                    <CommandInput placeholder={"Search .."} className="h-9" />
                    <CommandEmpty className="text-xs text-center px-3 py-4">No framework found.</CommandEmpty>
                    <CommandGroup>
                        {data?.map((value) => (
                            <CommandItem
                                key={value}
                                value={value}
                                onSelect={(currentValue) => {
                                    setSelectedValue(currentValue.toLowerCase() !== value.toLowerCase() ? "" : currentValue)
                                    setOpen(false)
                                }}
                                className={`flex items-center rounded-[4px] capitalize justify-between gap-2 px-3 py-2 hover:bg-theme text-textV1 hover:text-white ${selectedValue.toLowerCase() == value.toLowerCase() ? "bg-theme" : ""}`}
                            >
                                {value}
                                <span className="flex-shrink-0">{selectedValue.toLowerCase() == value.toLowerCase() ? <Check className="w-3 h-3 text-white" strokeWidth={3.5} /> : null}</span>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default DynamicSelect