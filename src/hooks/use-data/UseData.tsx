import { useState, useEffect } from 'react';
import { fetchData } from '@/app/api/dataService';
import { Product } from '@/app/api/dataService'

const useData = () => {
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [categories, setCategories] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');

    //Поиск продуктов
    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
    };
    const getSearchResults = () => {
        const query = searchQuery.toLowerCase().trim()
        if(query === '') {
            return allProducts
        }

        return allProducts.filter(product =>
            product.title.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.brand.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        )
    }

    // получение данніх
    useEffect(() => {
        const fetchDataApi = async () => {
            try {
                const data = await fetchData()

                if(Array.isArray(data.products)) {
                    setAllProducts(data.products);
                    const uniqueCategories = Array.from(new Set(data.products.map(product => product.category)))
                    setCategories(uniqueCategories)
                } else {
                    console.error('Err UseData. Data isnt array')
                }
            } catch (error) {
                console.log('Error fetch data', error)
            }
        }

        fetchDataApi()
    }, []);

    //Фильтрация продуктов
    const getFilteredProducts = () => {
        if(selectedCategory) {
            return allProducts.filter(product => product.category === selectedCategory)
        }
        return allProducts
    }


    return {
        // Фильтрацция + рендер
        allProducts,

        // Фильтрация
        categories,
        selectedCategory,
        setSelectedCategory,
        getFilteredProducts,

        //Посик
        searchQuery,
        handleSearchChange,
        getSearchResults,
    };
}

export default useData