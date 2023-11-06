import styled from 'styled-components';
import { Form } from 'formik';

export const FormStyled = styled(Form)`
  max-width: 460px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 20px;
  margin: 20px 0 20px 0;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  label {
    font-size: unset;
    margin-right: 6px;
  }

  input {
    height: 24px;
  }

  button {
    display: inline-block;
    padding: 5px 10px;
    background: linear-gradient(to bottom, #4caf50, #45a049);
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  button:hover {
    transform: scale(1.05);
    color: black;
  }
`;

export const ListContainer = styled.div`
  max-width: 500px;

  li {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;

    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 18px;
  }

  button {
    display: inline-block;
    background: linear-gradient(to bottom, #4caf50, #45a049);
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  button:hover {
    transform: scale(1.05);
    color: black;
  }
`;

export const FilterContainer = styled.div`
  max-width: 460px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 20px;
  margin: 20px 0 20px 0;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  p {
    font-size: unset;
  }

  input {
    font-size: 14px;
  }
`;
