import PropTypes from 'prop-types';
import s from './Styles.styled';

const Button = ({ title, onClick }) => (
  <s.Btn type="button" data-id={title.toLowerCase()} onClick={onClick}>
    {title}
  </s.Btn>
);
export default Button;

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
