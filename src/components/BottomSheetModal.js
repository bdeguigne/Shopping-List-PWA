import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Slide } from '@mui/material';
import styled from 'styled-components';
import { Div, Icon, Text } from 'atomize';
import { useDispatch } from 'react-redux';
import Sheet from 'react-modal-sheet';

import Step1 from './createRecipe/Step1';
import Step2 from './createRecipe/Step2';
import ChooseIngredient from './ChooseIngredient';
import { setIngredient } from '../redux/ingredientsSlice';
import Step3 from './createRecipe/Step3';
import RecipeStepBuilder from './RecipeStepBuilder';
import { handleNext, resetStep } from '../redux/sliderSlice';

const BottomSheetModalContainer = styled(Div)`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`;

const BottomSheetModal = (props) => {
  const { isOpen, onClose } = props;
  const [showIngredients, setShowIngredients] = useState(false);
  const [showBackArrow, setShowBackArrow] = useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // when open, disable scroll on content behind modal sheet
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <Sheet
      isOpen={isOpen}
      onClose={() => {
        dispatch(resetStep());
        setShowIngredients(false);
        setShowBackArrow(false);
        onClose();
      }}
      snapPoints={[0.75, 0.5]}
      initialSnap={1}
      springConfig={{ stiffness: 150, damping: 20, mass: 1 }}
    >
      <Sheet.Container>
        <Sheet.Header style={{ background: '#F1F8F6' }} />
        <Slide
          in={showIngredients}
          direction="up"
          style={{
            position: 'absolute',
            top: '-145px',
            zIndex: -40,
            width: '100%',
          }}
        >
          <Div
            rounded={{ t: '12px' }}
            p={{ t: '32px', b: '22px' }}
            bg="#42927C"
          >
            {showBackArrow && (
              <Div
                d="flex"
                style={{ position: 'absolute', left: '18px', top: '8px' }}
              >
                <Icon
                  color="white"
                  name="LongLeft"
                  m={{ r: '8px' }}
                  onClick={() => {
                    dispatch(handleNext());
                    setShowIngredients(false);
                    setShowBackArrow(false);
                  }}
                />
              </Div>
            )}
            <ChooseIngredient
              onIngredientSelected={(ingredient) =>
                dispatch(setIngredient(ingredient))
              }
            />
          </Div>
        </Slide>
        <Sheet.Content>
          <BottomSheetModalContainer
            bg="#F1F8F6"
            rounded={{ t: '12px' }}
            p="22px"
          >
            <RecipeStepBuilder
              showIndex={1}
              steps={[
                <Step1
                  key="step1"
                  onNextClicked={() => {
                    dispatch(handleNext());
                    setTimeout(() => {
                      setShowIngredients(true);
                    }, 300);
                  }}
                  style={{ position: 'absolute', width: '100%' }}
                />,
                <Step2
                  key="step2"
                  onNextClicked={() => {
                    dispatch(handleNext());
                    setTimeout(() => {
                      setShowIngredients(false);
                    }, 300);
                  }}
                />,
                <Step3
                  key="step3"
                  style={{ position: 'absolute', width: '100%' }}
                />,
              ]}
            />
            {/* <Text
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
              <div key="step2" style={{ width: '100%' }}>
                <Slide in={false} direction="left">
                  <Step2 style={{ position: 'absolute', width: '100%' }} />
                </Slide>
              </div>
              <div key="step3" style={{ width: '100%' }}>
                <Slide in={next} direction="left">
                  <Step3 style={{ position: 'absolute', width: '100%' }} />
                </Slide>
              </div>
            </Div> */}
          </BottomSheetModalContainer>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};

BottomSheetModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BottomSheetModal;
