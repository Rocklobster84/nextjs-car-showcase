"use client";

import { useState, Fragment } from "react";
import Image from "next/image"
import { Combobox, Transition } from "@headlessui/react"

import { SearchManufacturerProps } from "@/types"

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState('')
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image 
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car logo"
            />
          </ComboboxButton>

          <ComboboxInput 
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            >

          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer