import { StyledHeaderNav, StyledHeaderNavLink } from './Navigation.styled';

export default function Navigation() {
    return (<StyledHeaderNav>
        <StyledHeaderNavLink to="/" end>HomePage</StyledHeaderNavLink>
        <StyledHeaderNavLink to="movies">Movies</StyledHeaderNavLink>
    </StyledHeaderNav>)
}