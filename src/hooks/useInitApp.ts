import { useEffect } from 'react';
import { initialFetchBooks, useAppDispatch } from '../store';

export const useInitApp = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(
            initialFetchBooks({
                startFrom: 0,
                sortBy: 'newest',
            })
        );
    }, []);
};
