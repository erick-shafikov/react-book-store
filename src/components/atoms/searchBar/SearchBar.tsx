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
import {
    Form,
    Input,
    SelectBox,
    SelectContainer,
    StyledSelect,
    SubmitButton,
    TextBox,
    InputBox,
} from './styled';

export type TFields = {
    search: string;
    category: typeof sortBy[number];
    genre: typeof genre[number];
};

export const SearchBar = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<TFields>({ mode: 'onBlur' });

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
            <InputBox>
                <Input
                    {...register('search', { required: true })}
                    placeholder={DEFAULT_SEACRH_STRING}
                />
                <SubmitButton type="submit" />
            </InputBox>

            <SelectBox>
                <SelectContainer>
                    <TextBox>{'genre'}</TextBox>
                    <StyledSelect {...register('genre')}>
                        {genre.map((item: string) => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                        ))}
                    </StyledSelect>

                    <TextBox>{'relevance'}</TextBox>
                    <StyledSelect {...register('category')}>
                        {categories.map((item: string) => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                        ))}
                    </StyledSelect>
                </SelectContainer>
            </SelectBox>
        </Form>
    );
};
