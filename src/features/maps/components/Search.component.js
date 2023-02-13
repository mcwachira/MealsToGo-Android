import React, { useContext, useState , useEffect} from 'react'
import styled from 'styled-components/native'
import { Searchbar } from 'react-native-paper'
import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`s
  padding: ${(props) => props.theme.space[3]};
  position:absolute;
  top:40px;
  z-index:999;
  width:100%
`;



const Search = () => {

    const { search, keyword } = useContext(LocationContext)
    //console.log(keyword)
    const [searchKeyword, setSearchKeyword] = useState(keyword)


//this search box syncs with the search in the restaurant
    useEffect(() => {
setSearchKeyword(keyword)
    }, [keyword])

    return (
        <SearchContainer>
            <Searchbar placeholder="Search"
            icon="map-marker"
                value={searchKeyword}
                onSubmitEditing={() => search(searchKeyword)}
                onChangeText={(text) => { setSearchKeyword(text) }} />
        </SearchContainer>
    )
}

export default Search

