import PropTypes from 'prop-types';

import s from './Styles.styled';

const Section = ({ title, children }) => {
  return (
    <s.Container>
      <s.Headerline>{title}</s.Headerline>
      {children}
    </s.Container>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
};
