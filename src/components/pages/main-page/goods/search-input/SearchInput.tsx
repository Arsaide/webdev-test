import React from 'react';
import {TextField} from "@mui/material";
import {SearchStyles} from "./SearchInput.styles";

type Props = {
    value: string;
    handleSearchChange: (query: string) => void;
};

const SearchInput = ({ value, handleSearchChange }: Props) => (
    <div>
        <TextField
            sx={SearchStyles}
            label={'Search'}
            type={'search'}
            value={value}
            variant="filled"
            onChange={(e) => handleSearchChange(e.target.value)}
        />
    </div>
);

export default SearchInput;