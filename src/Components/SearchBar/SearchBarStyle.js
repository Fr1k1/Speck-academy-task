import styled from 'styled-components';

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border: 2px solid #cccccc;
  border-radius: 25px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 10px;
  margin-bottom: 30px;

  input {
    border: none;
    outline: none;
    font-size: 1rem;
    color: #333333;
    width: 100%;
    padding: 5px;
    margin-right: 10px;

    &::placeholder {
      color: #999999;
    }
  }

  @media only screen and (max-width: 600px) {
    input {
      font-size: 0.8rem;
    }
  }
`;


export default StyledSearchBar;
