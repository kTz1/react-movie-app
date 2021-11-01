import { useContext } from 'react';
import { Link } from 'react-router-dom';
// Logo
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
// Context
import { Context } from '../../context';
// Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './header.styles';

const Header = () => {
    const [user] = useContext(Context);
    console.log(user);

    return (
        <Wrapper>
            <Content>
            <Link to='/'>
                <LogoImg src={RMDBLogo} alt='rmdb-logo' />
            </Link>
            {user ? (
                <span>Logged in as: {user.username}</span>
            ) : (
                <Link to='/login'>
                    <span>Login</span>
                </Link>
            )}           
            <TMDBLogoImg src={TMDBLogo} alt='tmbd-logo' />
            </Content>
        </Wrapper>
    );
};

export default Header;