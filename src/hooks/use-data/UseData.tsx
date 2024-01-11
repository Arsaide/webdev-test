import { useState, useEffect } from 'react';
import { fetchData } from '@/app/api/dataService';
import { Product } from '@/app/api/dataService'

const useData = () => {
    // Стейт для хранения продуктов
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    // Стейт для хранения выбраной категории в селект
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    // Стейт для хранения категорий продуктов полученых с АПИ
    const [categories, setCategories] = useState<string[]>([]);
    // Стейт для хранения строки поискового запроса
    const [searchQuery, setSearchQuery] = useState<string>('');

    // Функ.обработчик строки поиска
    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
    };

    // Получение результатов поиска и фильтрация для мапа
    const getSearchResults = (searchQuery: string) => {
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

    // Загрузка данніх и их проверки для рендера
    useEffect(() => {
        const fetchDataApi = async () => {
            try {
                const data = await fetchData()

                // проверка на массив полученній от апи
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

    // Функция фильтрация продуктов по категории
    const getFilteredProducts = (selectedCategory: string) => {
        if(selectedCategory) {
            return allProducts.filter(product => product.category === selectedCategory)
        }
        return allProducts
    }


    return {
        // Все продукты
        allProducts,

        // Категории и фильтрация
        categories,
        selectedCategory,
        setSelectedCategory,
        getFilteredProducts,

        // Посик
        searchQuery,
        handleSearchChange,
        getSearchResults,
    };
}

export default useData