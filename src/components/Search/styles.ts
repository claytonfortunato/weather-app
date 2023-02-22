import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0.2rem;

  p {
    margin: 20px 0px;
  }

  ul {
    max-width: 500px;
    background-color: #fff;
    text-align: center;
    position: absolute;
    top: 52%;
    left: 56%;
  }

  li {
    list-style: none;
  }

  .btn {
    border: none;
    cursor: pointer;
    width: 100%;
    background-color: #fff;
    text-align: left;
    line-height: 1px;

    &:hover {
      background-color: #ddd;
    }
  }
`;

export const Header = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  p {
    font-size: 1rem;
  }
`;

export const Search = styled.div`
  input {
    padding: 8px;
    border-radius: 10px;
    border: none;
    outline: none;
  }

  button {
    font-size: 1rem;
    padding: 6px;
    border-radius: 10px;
    border: 1px solid #fff;
    margin-left: 0.2rem;
    cursor: pointer;
    background-color: transparent;
    color: #fff;
    transition: 350ms all ease-in-out;

    &:hover {
      background-color: #fff;
      color: #333;
    }
  }
`;
