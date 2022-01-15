import React from 'react';
import { Div } from 'atomize';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { AppText } from './AppText';

const ShadowDiv = styled(Div)`
  box-shadow: 0px 10px 30px -20px rgba(0, 0, 0, 0.75);
`;

const CategoryChip = (props) => {
  const { selected, label } = props;
  return (
    <ShadowDiv
      d="flex"
      p={{ y: '12px', x: '32px' }}
      bg={selected ? '#42927C' : '#FEFDFE'}
      rounded="12px"
      m={{ r: '12px' }}
    >
      <AppText textColor={selected ? 'white' : '#B1AFB0'}>{label}</AppText>
    </ShadowDiv>
  );
};

CategoryChip.propTypes = {
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default CategoryChip;
