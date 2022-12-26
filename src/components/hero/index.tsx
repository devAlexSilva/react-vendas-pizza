import { Navbar } from '../navbar'
import * as S from './style'

export const Hero = () => {
    return (
        <>
            <S.HeroContainer>
                <Navbar />
                <S.HeroContent>
                    <S.HeroItems>
                        <S.HeroH1>Pizzas Incriveis</S.HeroH1>
                        <S.HeroP>Entrega em 30 Minutos</S.HeroP>
                        <S.HeroBtn>Fazer Pedido</S.HeroBtn>
                    </S.HeroItems>
                </S.HeroContent>
            </S.HeroContainer>
        </>
    )
}