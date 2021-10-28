import { Link } from 'react-router-dom';
// Logo
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
// Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './header.styles';

const Header = () => (
    <Wrapper>
        <Content>
        <Link to='/'>
            <LogoImg src={RMDBLogo} alt='rmdb-logo' />
        </Link>
            <TMDBLogoImg src={TMDBLogo} alt='tmbd-logo' />
        </Content>
    </Wrapper>
);

export default Header;