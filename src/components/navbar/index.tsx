import * as S from './style'

export const Navbar = ({ toggle }) => {
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