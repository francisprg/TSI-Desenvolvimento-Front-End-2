

const API_URL = import.meta.env.VITE_API_URL;
import axiosClient from './../utils/axios-client';


export const fetchLivrossApi = async (idLivro = null) => {

    const URL = idLivro
        ? `${API_URL}/livros/${idLivro}`
        : `${API_URL}/livros/`;

    try {

        const response = await axiosClient.get(URL)

        if (response.status !== 200) {
            throw new Error("Erro ao carregar livros");
        }

        return response.data.data

    } catch (error) {

        console.log(error);
        return [];
    }

}




