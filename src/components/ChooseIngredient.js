import React from 'react';
import PropTypes from 'prop-types';
import { Div, Image } from 'atomize';
import styled from 'styled-components';

import { AppText } from './AppText';
import ingrediant1 from '../assets/ingredients/Frame 2.png';

const Wrap = styled(Div)`
  & > div {
    margin-right: 12px;
  }
`;

const ChooseIngredient = () => {
  return (
    <Div>
      <AppText p={{ x: '22px', b: '8px' }}>Please select an icon below</AppText>
      <Wrap overflow="auto" d="flex" p={{ l: '22px' }}>
        <Div p="4px">
          <Image src={ingrediant1} w="40px" />
        </Div>
        <Div p="4px">
          <Image src={ingrediant1} w="40px" />
        </Div>
        <Div p="4px">
          <Image src={ingrediant1} w="40px" />
        </Div>
        <Div p="4px">
          <Image src={ingrediant1} w="40px" />
        </Div>
        <Div p="4px">
          <Image src={ingrediant1} w="40px" />
        </Div>
        <Div p="4px">
          <Image src={ingrediant1} w="40px" />
        </Div>
        <Div p="4px">
          <Image src={ingrediant1} w="40px" />
        </Div>
        <Div p="4px">
          <Image src={ingrediant1} w="40px" />
        </Div>
        <Div p="4px">
          <Image src={ingrediant1} w="40px" />
        </Div>
      </Wrap>
    </Div>
  );
};

ChooseIngredient.propTypes = {};

export default ChooseIngredient;
