import styled from "styled-components";

const Container = styled.div`
    background-color: #8f53bf;
    display: flex;
    flex-direction: column;
    font-family: 'Raleway', sans-serif;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    color: #fff;

    p {
        font-size: 15px;
    }
`;

const Header = styled.div`
    margin-top: 25px;
    width: 90vw;
    display: flex;
    justify-content: space-between;

    h1{
        font-size: 26px;
        font-weight: bold;
    }

    svg {
        font-size: 25px;
    }
`;

const Form = styled.form`
    width: 90vw;
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
        margin-bottom: 13px;
        height: 58px;
        border: none;
        border-radius: 5px;
        font-size: 20px;
    }

    input::placeholder {
        color: #000;
        padding-left: 15px;
    }
`; 

const Button = styled.button`
    height: 58px;
    border: none;
    border-radius: 5px;
    background-color: #A328D6;
    margin-bottom: 30px;
    color: #fff;

    p {
        font-size: 20px;
    }
`;

export {Container, Header, Form, Button};