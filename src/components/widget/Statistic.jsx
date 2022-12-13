import s from './Styles.styled';
import PropTypes from 'prop-types';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <s.StatWrapper>
      <s.StatInfo>Good: {good}</s.StatInfo>
      <s.StatInfo>Neutral: {neutral}</s.StatInfo>
      <s.StatInfo>Bad: {bad}</s.StatInfo>
      <s.StatInfo>Total: {total}</s.StatInfo>
      <s.StatInfo>Positive feedback: {positivePercentage}</s.StatInfo>
    </s.StatWrapper>
  );
};

export default Statistic;

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string,
};
