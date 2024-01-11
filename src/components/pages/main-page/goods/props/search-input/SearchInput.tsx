import React from 'react';

type Props = {
    value: string;
    handleSearchChange: (query: string) => void;
};

const SearchInput = ({ value, handleSearchChange }: Props) => (
    <div>
        <label>Search</label>
        <input
            type="text"
            value={value}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder={'Searching panel'}
        />
    </div>
);

export default SearchInput;