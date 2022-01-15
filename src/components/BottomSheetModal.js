import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Slide } from '@mui/material';
import styled from 'styled-components';
import { Button, Div, Icon, Text } from 'atomize';

import Step1 from './createRecipe/Step1';
import { AppText, AppTitle } from './AppText';
import Step2 from './createRecipe/Step2';
import ChooseIngredient from './ChooseIngredient';

const BottomSheetModalContainer = styled(Div)`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BottomSheetModal = (props) => {
  const { isModalOpen } = props;
  const [next, setNext] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const [showBackArrow, setShowBackArrow] = useState(false);

  return (
    <Slide in={isModalOpen} direction="up">
      <BottomSheetModalContainer>
        <Slide in={showIngredients} direction="up">
          <Div rounded={{ t: '12px' }} p={{ y: '22px' }} bg="#42927C">
            <ChooseIngredient />
          </Div>
        </Slide>
        <Div
          h="300px"
          bg="#F1F8F6"
          w="100%"
          rounded={{ t: '12px' }}
          p="22px"
          style={{ zIndex: '10' }}
        >
          {showBackArrow && (
            <Div d="flex" m={{ b: '22px', l: '-4px', t: '-8px' }}>
              <Icon
                name="LongLeft"
                m={{ r: '8px' }}
                onClick={() => {
                  setNext(false);
                  setShowIngredients(false);
                  setShowBackArrow(false);
                }}
              />
            </Div>
          )}
          <Text
            fontFamily="Horizon"
            tag="h3"
            textColor="#08080A"
            textSize="1.5rem"
          >
            Create a recipe
          </Text>
          <Div d="flex" style={{ position: 'relative' }}>
            <div key="step1">
              <Slide in={!next} direction="right">
                <Step1
                  onNextClicked={() => {
                    setNext(true);
                    setShowIngredients(true);
                    setShowBackArrow(true);
                  }}
                  style={{ position: 'absolute', width: '100%' }}
                />
              </Slide>
            </div>
            <div key="step2">
              <Slide in={next} direction="left">
                <Step2 style={{ position: 'absolute', width: '100%' }} />
              </Slide>
            </div>
          </Div>
          {/* <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              fontFamily="Poppins"
            >
              You can now choose your ingredients
            </Typography> */}
        </Div>
      </BottomSheetModalContainer>
    </Slide>
  );
};

BottomSheetModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
};

export default BottomSheetModal;
