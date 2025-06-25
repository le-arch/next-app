'use client';

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { Sliders } from 'lucide-react';

interface FilterBlockProps {
  title: string;
  options: { value: string; label: string }[];
  selectedOptions: string[];
  onOptionChange: (value: string) => void;
}

const FilterBlock: React.FC<FilterBlockProps> = ({
  title,
  options,
  selectedOptions,
  onOptionChange,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="ml-2 flex items-center gap-1 focus:ring-2 focus:ring-blue-500"
          aria-label={`Filter by ${title}`}
        >
          <Sliders className="w-4 h-4" />
          {title}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start" sideOffset={6}>
        <DropdownMenuLabel className="font-semibold">{title}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {options.map((option) => (
          <DropdownMenuCheckboxItem
            key={option.value}
            checked={selectedOptions.includes(option.value)}
            onCheckedChange={() => onOptionChange(option.value)}
            className="capitalize"
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterBlock;

