import axios, {AxiosResponse} from 'axios';

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    brand: string;
    category: string;
    images: string[];
}

interface ApiResponse {
    products: Product[];
}

const API_URL = 'https://dummyjson.com/products';

async function fetchData(): Promise<ApiResponse> {
    try {
        const response: AxiosResponse<ApiResponse> = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log('Error');
        throw error;
    }
}

export {fetchData};