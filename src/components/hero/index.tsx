import { useState } from 'react'
import { Navbar } from '../navbar'
import { SideBar } from '../sideBar'
import * as S from './style'

export const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <S.HeroContainer>
                <Navbar toggle={toggle} />
                <SideBar isOpen={isOpen} toggle={toggle}/>
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