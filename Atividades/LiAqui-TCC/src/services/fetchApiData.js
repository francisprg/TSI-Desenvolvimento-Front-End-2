const API_URL = import.meta.env.VITE_API_URL;
import axiosClient from './../utils/axios-client';

export const fetchApi = async (resource, id = null) => {

    const URL = id
        ? `${API_URL}/${resource}/${id}`
        : `${API_URL}/${resource}/`;

    try {

        const response = await axiosClient.get(URL);

        if (response.status !== 200) {
            throw new Error(`Erro ao carregar ${resource}`);
        }

        return response.data.data;

    } catch (error) {

        console.error(`Erro ao carregar ${resource}:`, error);

        return [];
    }
};