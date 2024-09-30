import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { BookData } from '../interface/BookData';

const API_URL = 'http://localhost:8080';

const postData = async (data: BookData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/livros/criar', data);
    return response;
}

export function useBookDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['book-data']})
        }
    })

    return mutate;
}