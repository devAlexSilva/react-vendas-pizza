import * as S from './style'

type props = {
    heading: string,
    dataProduct: {
        id: number,
        title: string,
        img: string,
        alt: string,
        desc: string,
        price: string,
        button: string
    }[]
}
export const Product = ({ heading, dataProduct }: props) => {
    return (
        <S.ProductsContainer>
            <S.ProductsHeading>{heading}</S.ProductsHeading>
            <S.ProductWrapper>
                {
                    dataProduct.map(product => {
                        return (
                            <S.ProductCard key={product.id}>
                                <S.ProductImg src={product.img} alt={product.alt} />
                                <S.ProductInfo>
                                    <S.ProductTitle>{product.title}</S.ProductTitle>
                                    <S.ProductDesc>{product.desc}</S.ProductDesc>
                                    <S.ProductPrice>{product.price}</S.ProductPrice>
                                </S.ProductInfo>
                                <S.ProductButton>{product.button}</S.ProductButton>
                            </S.ProductCard>
                        )
                    })
                }
            </S.ProductWrapper>
        </S.ProductsContainer>
    )
}