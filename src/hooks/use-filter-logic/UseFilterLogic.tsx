import useData from "@/hooks/use-data/UseData";
import {useEffect} from "react";

const UseFilterLogic = (searchQuery: string, setSelectedCategory: (category: string) => void) => {
    const { getFilteredProducts, getSearchResults } = useData()

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category)
    }

    const filteredProducts =
        searchQuery !== '' ? getSearchResults() : getFilteredProducts();

    useEffect(() => {
        if (searchQuery !== '') {
            setSelectedCategory('');
        }
    }, [searchQuery, setSelectedCategory]);

    return {
        handleCategoryChange,
        filteredProducts,
    }
}

export default UseFilterLogic