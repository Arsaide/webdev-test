import React from 'react';
import {TextField} from "@mui/material";

type Props = {
    value: string;
    handleSearchChange: (query: string) => void;
};

const SearchInput = ({ value, handleSearchChange }: Props) => (
    <div>
        <TextField
            sx={{
                mb: '1.5rem'
            }}
            label={'Search'}
            type={'search'}
            value={value}
            variant="filled"
            onChange={(e) => handleSearchChange(e.target.value)}
        />
    </div>
);

export default SearchInput;