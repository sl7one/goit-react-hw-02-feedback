import PropTypes from 'prop-types';
import Button from './Button';

const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(name => {
        return <Button key={name} title={name} onClick={onLeaveFeedback} />;
      })}
    </>
  );
};

export default FeedBackOptions;

FeedBackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
