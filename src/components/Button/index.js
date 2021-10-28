import PropTypes from 'prop-types';
// Styles
import { Wrapper } from './button.styles';

const Button = ({ text, callback }) => (
    <Wrapper type='button' onClick={callback}>
        {text}
    </Wrapper>
);

Button.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func
}

export default Button;