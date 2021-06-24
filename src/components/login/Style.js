import styled from 'styled-components';

const Container = styled.div`
    background-color: #8f53bf;
    display: flex;
    flex-direction: column;
    font-family: 'Raleway', sans-serif;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #fff;

    h1 {
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        margin-bottom: 30px;
    }

    p {
        font-size: 15px;
    }
`

const Form = styled.form`
    width: 90vw;
    display: flex;
    flex-direction: column;

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
` 

const Button = styled.button`
    height: 58px;
    border: none;
    border-radius: 5px;
    background-color: #A328D6;
    margin-bottom: 30px;
    color: #fff;
    p {
        font-size: 20px;
        font-weight: bold;
    }
`

export {Container, Form, Button};