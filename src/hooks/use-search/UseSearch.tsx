import { useState, useEffect } from 'react';
import { fetchData } from '@/components/pages/api/dataService';

const useSearch = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await fetchData()

                if(Array.isArray(data.products)) {
                    setProducts(data.products)
                    const uniqueCategories = Array.from(new Set(data.products.map(product => product.category)))
                    setCategories(uniqueCategories)
                }
            } catch (error) {
                console.error('Error fetching data', error)
            }
        }

        fetchProducts()
    }, []);

    return { products, categories }
}

export default useSearch