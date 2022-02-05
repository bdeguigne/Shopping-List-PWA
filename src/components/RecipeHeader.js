import React from 'react';
import PropTypes from 'prop-types';
import { Div, Icon } from 'atomize';
import styled from 'styled-components';

import { AppText } from './AppText';

const HeaderContainer = styled(Div)`
  position: fixed;
  &:after {
    width: 24px;
    content: '';
  }
`;
const RecipeHeader = (props) => {
  const { title, onBackClick } = props;

  return (
    <HeaderContainer
      d="flex"
      justify="space-between"
      align="center"
      w="100%"
      bg="#f1f8f6"
      p="12px"
    >
      <Icon
        color="black"
        name="LongLeft"
        m={{ r: '8px' }}
        style={{ zIndex: 10 }}
        onClick={onBackClick}
      />
      <AppText
        textColor="black"
        textAlign="center"
        textSize="1rem"
        textWeight="bold"
      >
        {title}
      </AppText>
    </HeaderContainer>
  );
};

RecipeHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onBackClick: PropTypes.func.isRequired,
};

export default RecipeHeader;
