import { useEffect, useState } from 'react';
import { fetchData } from '@/components/pages/api/dataService';

const useGoods = () => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await fetchData()
                setProducts(data.products)
            } catch (error) {
                console.error('Error fetching goods:', error)
            }
        }

        fetchProducts()
    }, []);

    return products
}

export default useGoods()