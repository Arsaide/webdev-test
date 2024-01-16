import React from 'react';
import {FormControl, MenuItem, Select, InputLabel, OutlinedInput} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import {FormControlStyles, InputLabelStyles} from "./FilterSelect.styles";

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
        <FormControl
            variant="filled"
            sx={FormControlStyles}>
            <InputLabel
                id="demo-simple-select-label"
                sx={InputLabelStyles}>Filtered by category
            </InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Filtered by category"
                value={selectedCategory}
                onChange={handleChange}>
                <MenuItem value={''}><em>All Categories</em></MenuItem>
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