import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({ setRegion }) => {

  const [ searchedRegion, setSearchedRegion] = useState("")

   const onFormSubmit = (e) => {
    e.preventDefault()
    setRegion({query: searchedRegion})
    

   }

   const onHandleChange = (e) => {
    setSearchedRegion(e.currentTarget.value)
   }
  return (
    <SearchFormStyled onSubmit={onFormSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select aria-label="select" name="region" required onChange={onHandleChange}>
        <option  disabled defaultValue="">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
