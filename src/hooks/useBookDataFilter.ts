import axios, { AxiosPromise } from "axios"
import { BookData } from "../interface/BookData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const fetchData = async (): AxiosPromise<BookData[]> => {
    const response = axios.get(API_URL + '/livros/listar');
    return response;
}

export function useBookData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['book-data'],
        retry: 2
    })

    return{
        ...query,
        data: query.data?.data
    }
}