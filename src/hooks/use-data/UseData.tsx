import { useState, useEffect } from 'react';
import { fetchData } from '@/app/api/dataService';

const useData = () => {
    const [allProducts, setAllProducts] = useState<any[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [categories, setCategories] = useState<string[]>([]);


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

    const getFilteredProducts = () => {
        if(selectedCategory) {
            return allProducts.filter(product => product.category === selectedCategory)
        }
        return allProducts
    }

    return { allProducts, categories, selectedCategory, setSelectedCategory, getFilteredProducts };
}

export default useData