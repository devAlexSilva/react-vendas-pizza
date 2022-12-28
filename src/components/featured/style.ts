import styled from "styled-components";
import featuredImg from '../../images/egg.png'


export const Container = styled.div`
    background: linear-gradient(to right, 
      rgba(0,0,0,.7), rgba(0,0,0,.1)), url(${featuredImg});
    height: 100vh;
    max-height: 500px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    padding: 0 1 rem;

    h1 {
        font-size: clamp(3rem, 5vw, 5rem);
    }

    p {
        margin-bottom: 1rem;
        font-size: clamp(1rem, 3vw, 2rem);
    }

    button {
        font-size: 1.4rem;
        padding: .6rem 3rem;
        border: none;
        outline: none;
        background-color: #ffc500;
        color: 000;
        transition: .2s ease-out;

        &:hover {
            background-color: #e31837;
            color: #fff;
            transition: .2s ease-out;
            cursor: pointer;
        }
    }
`