import { useState } from 'react';
import PropTypes from 'prop-types';
import StyledSearchBar from './SearchBarStyle';

const SearchBar = ({ placeholder, disabled, onValueChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onValueChange(e);

    console.log(e.target.value);
  };

  return (
   <StyledSearchBar>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />

</StyledSearchBar>
  
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onValueChange: PropTypes.func.isRequired,
};

export default SearchBar;
