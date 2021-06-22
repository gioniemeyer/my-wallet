import styled from 'styled-components';

const Container = styled.div`
    background-color: #8f53bf;
    display: flex;
    flex-direction: column;
    font-family: 'Raleway', sans-serif;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    color: #fff;

    p {
        font-size: 15px;
    }
`

const Header = styled.div`
    margin-top: 15px;
    width: 90vw;
    display: flex;
    justify-content: space-between;

    h1{
        font-size: 26px;
    }
`
const Register = styled.div`
    width: 90vw;
    background-color: #fff;
    height: 67vh;
    border-radius: 5px;
`

const Menu = styled.div`
    width: 90vw;
`

const Buttons = styled.div`
    width: 90vw;
    height: 114px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
`

const Button = styled.button`
    height: 100%;
    width: 42vw;
    border: none;
    border-radius: 5px;
    background-color: #A328D6;
    color: #fff;
    font-size: 20px;
`

export {Container, Header, Register, Buttons, Button};