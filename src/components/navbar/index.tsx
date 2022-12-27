import * as S from './style'

type props = { 
    toggle: () => void
}

export const Navbar = ({ toggle }: props) => {
    return (
        <>
            <S.Nav>
                <S.NavLink to='/'>Pizza</S.NavLink>
                <S.NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <S.Bars />
                </S.NavIcon>
            </S.Nav>
        </>
    )
}