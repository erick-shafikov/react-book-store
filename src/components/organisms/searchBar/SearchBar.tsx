import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
    DEFAULT_SEACRH_STRING,
    genre,
    sortBy,
} from '../../../constants.ts/searchParams';
import {
    getCategoryState,
    getGenreState,
    initialFetchBooks,
    useAppDispatch,
    useAppSelector,
} from '../../../store';
import { Input } from '../../molecules/Input';
import { Select } from '../../molecules/select';
import { Form, SelectBox } from './styled';

export type TFields = {
    search: string;
    category: typeof sortBy[number];
    genre: typeof genre[number];
};

export const SearchBar = () => {
    const { register, handleSubmit } = useForm<TFields>({
        mode: 'onBlur',
        defaultValues: { category: 'relevance', genre: 'all' },
    });

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const genre = useAppSelector(getGenreState);
    const categories = useAppSelector(getCategoryState);

    const onSubmit: SubmitHandler<TFields> = (data) => {
        dispatch(
            initialFetchBooks({
                searchString: data.search,
                category: data.genre,
                sortBy: data.category,
                startFrom: 0,
            })
        );

        navigate('/');
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                {...register('search', { required: true })}
                placeholder={DEFAULT_SEACRH_STRING}
            />

            <SelectBox>
                <Select header="genre" options={genre} {...register('genre')} />
                <Select
                    header="category"
                    options={categories}
                    {...register('category')}
                />
            </SelectBox>
        </Form>
    );
};
