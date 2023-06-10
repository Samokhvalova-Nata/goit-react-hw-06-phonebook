import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { updateFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const handleChangeFilter = (e) => {
        dispatch(updateFilter(e.currentTarget.value))
    };

    return (
        <>
            <Label htmlFor='search'>
                Find contacts by name
                <Input
                    type="text"
                    name="search"
                    value={filter}
                    onChange={handleChangeFilter}/>
            </Label>
        </>
    );
};
