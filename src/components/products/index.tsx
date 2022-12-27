import * as S from './style'
import { productData as data } from './data'

export const Product = () => {
    return (
        <S.ProductsContainer>
            <S.ProductsHeading>heading</S.ProductsHeading>
            <S.ProductWrapper>
                {
                    data.map(product => {
                        return(
                            <S.ProductCard key={product.id}>
                                <S.ProductImg src={product.img} alt={product.alt} />
                                <S.ProductInfo>
                                    <S.ProductTitle>{product.title}</S.ProductTitle>
                                    <S.ProductDesc>{product.desc}</S.ProductDesc>
                                    <S.ProductPrice>{product.price}</S.ProductPrice>
                                    <S.ProductButton>{product.button}</S.ProductButton>
                                </S.ProductInfo>
                            </S.ProductCard>
                        )
                    })
                }
            </S.ProductWrapper>
        </S.ProductsContainer>
    )
}