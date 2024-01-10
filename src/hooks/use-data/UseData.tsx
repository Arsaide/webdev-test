import { useState, useEffect } from 'react';
import { fetchData } from '@/components/pages/api/dataService';

const useData = () => {
    const [products, setProducts] = useState<any[]>([])
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const fetchDataApi = async () => {
            try {
                const data = await fetchData()

                if(Array.isArray(data.products)) {
                    setProducts(data.products);
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

    return { products, categories }
}

export default useData