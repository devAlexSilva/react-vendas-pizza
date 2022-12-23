import * as S from './style'

export const Navbar = () => {
    return (
        <>
         <S.Nav>
            <S.NavLink to='/'>Pizza</S.NavLink>
            <S.NavIcon>
                <p>Menu</p>
                <S.Bars />
            </S.NavIcon>
         </S.Nav>
        </>
    )
}