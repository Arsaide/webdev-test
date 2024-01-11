import React from 'react';
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

type Props = {
    categories: string[];
    selectedCategory: string;
    handleCategoryChange: (category: string) => void;
};

const FilterSelect = ({ categories, selectedCategory, handleCategoryChange }: Props) => {
    const handleChange = (event: SelectChangeEvent) => {
        handleCategoryChange(event.target.value as string);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Filtered by category</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Filtered by category"
                value={selectedCategory}
                onChange={handleChange}>
                <MenuItem value={''}>All Categories</MenuItem>
                {categories.map((category, id) => (
                    <MenuItem key={id} value={category}>
                        {category}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default FilterSelect;