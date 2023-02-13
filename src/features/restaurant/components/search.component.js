import React , {useContext, useState, useEffect} from 'react'
import styled from 'styled-components/native'
import { Searchbar } from 'react-native-paper'
import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`s
  padding: ${(props) => props.theme.space[3]};
`;



const Search = ({isFavoritesToggled, onFavoritesToggle}) => {

    const { search, keyword } = useContext(LocationContext)
    //console.log(keyword)
    const [searchKeyword, setSearchKeyword] = useState(keyword)



  useEffect(() => {
    setSearchKeyword(keyword)
  }, [keyword])

  return (
      <SearchContainer>
          <Searchbar 
        icon={isFavoritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavoritesToggle}
          placeholder="Search"
           value={searchKeyword}
           onSubmitEditing={() => search(searchKeyword)}
            onChangeText={(text) =>
             {setSearchKeyword(text)}} />
      </SearchContainer>
  )
}

export default Search

