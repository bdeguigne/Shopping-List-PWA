import React from 'react';
import styled from 'styled-components';
import { Div, Image } from 'atomize';
import PropTypes from 'prop-types';

import recipebg from '../assets/recipe1.jpg';
import { AppText, AppTitle } from './AppText';

const CardContainer = styled(Div)`
  box-shadow: 0px 10px 30px -20px rgba(0, 0, 0, 0.75);
`;

const Gradient = styled(Div)`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 140%
  );
  /* background: linear-gradient(#e66465, #9198e5); */
  position: absolute;
  top: 0;
  display: flex;
`;

export const ImageFitCover = styled(Image)`
  object-fit: cover;
  position: absolute;
  /* filter: brightness(50%); */
`;

const AbsoluteDiv = styled(Div)`
  position: absolute;
`;

const Card = (props) => {
  const { title, ingredients, time } = props;

  return (
    <CardContainer
      w="100%"
      h="350px"
      rounded="22px"
      position="relative"
      d="flex"
      justify="center"
      style={{ position: 'relative' }}
    >
      <ImageFitCover h="100%" src={recipebg} alt="" rounded="22px" />
      <Gradient rounded="22px" w="100%" h="100%" />
      <AbsoluteDiv
        d="flex"
        left="0"
        p="1.5rem"
        w="100%"
        h="100%"
        flexDir="column"
        justify="flex-end"
      >
        <Div d="flex" flexDir="column" w="100%">
          <AppTitle textColor="#FCFCFA">{title}</AppTitle>
          <AppText textColor="#FCFCFA">
            {ingredients} ingredients | {time}
          </AppText>
        </Div>
      </AbsoluteDiv>
    </CardContainer>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
};

export default Card;
