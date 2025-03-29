import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import useDebounce from './hooks/useDebounce';
import { View } from 'react-native-web';

const SearchBox = ({ setSearchTerm, searchTerm }) => {
    const debounce = useDebounce();

    const [searchQuery, setSearchQuery] = React.useState('');
    // console.log('searchQuery', searchQuery, 'searchTerm', searchTerm, 'result', searchQuery || searchTerm);

    handleSearch = (query) => {
        setSearchQuery(query);
        debounce(() => {
            console.log('Searching for:', query);
            setSearchTerm(query);
        }, 1000); // Debounce for 1000ms (1 second)
    };

    return (
            <Searchbar
                placeholder="Search"
                onChangeText={handleSearch}
                value={searchQuery || searchTerm}
            />
    );
};

export default SearchBox;
