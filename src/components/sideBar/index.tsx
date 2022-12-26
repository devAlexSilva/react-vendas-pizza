import * as S from './style'

export const SideBar = ({ isOpen, toggle }) => {
    return (
        <S.SidebarContainer isOpen={isOpen}>
            <S.Icon>
                <S.CloseIcon onClick={toggle}/>
            </S.Icon>
            <S.SidebarMenu onClick={toggle}>
                <S.SidebarLink to='/'>Pizza</S.SidebarLink>
                <S.SidebarLink to='/'>Sobremesas</S.SidebarLink>
                <S.SidebarLink to='/'>Menu Completo</S.SidebarLink>
            </S.SidebarMenu>
                <S.SideBtnWrap onClick={toggle}>
                    <S.SidebarRoute to='/'>Pedido</S.SidebarRoute>
                </S.SideBtnWrap>
        </S.SidebarContainer>
    )
}