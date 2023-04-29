import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ placeholder, disabled, onValueChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onValueChange(inputValue);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onValueChange: PropTypes.func.isRequired,
};

export default SearchBar;
