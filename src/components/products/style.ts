import styled from "styled-components";

export const ProductsContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem 0;
    background: #150f0f;
    color: #fff;
`

export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    justify-content: center;
`

export const ProductCard = styled.div`
    line-height: 2;
    width: 300px;
`

export const ProductImg = styled.img`
    height: 250px;
    max-width: 100%;
    box-shadow: 8px 8px #fdc500;
`

export const ProductsHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
`

export const ProductTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 300px;
    padding: 1rem 0;

    @media screen and (max-width: 400px) {
        height: 200px;
    }

`

export const ProductDesc = styled.p`
    margin-bottom: 1rem;

`

export const ProductPrice = styled.p`
    font-size: 2rem;
`

export const ProductButton = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background-color: #e31837;
    color: #fff;
    transition: .2s ease-out;

    &:hover {
        background-color: #ffc500;
        transition: .2s ease-out;
        color: #000;
        cursor: pointer;
    }

    @media screen and (max-width: 400px) {
        margin-top: 2.5rem;
    }
`