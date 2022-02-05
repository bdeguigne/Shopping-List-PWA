import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Slide } from '@mui/material';
import styled from 'styled-components';
import { Div, Icon } from 'atomize';
import { useDispatch, useSelector } from 'react-redux';
import Sheet from 'react-modal-sheet';

import Step1 from './createRecipe/Step1';
import Step2 from './createRecipe/Step2';
import ChooseIngredient from './ChooseIngredient';
import { setIngredient } from '../redux/ingredientsSlice';
import Step3 from './createRecipe/Step3';
import RecipeStepBuilder from './RecipeStepBuilder';
import { handleNext, resetStep, handleBack } from '../redux/sliderSlice';
import { setRecipeName, setBasket, setImage } from '../redux/recipeSlice';
import { storeRecipeThunk } from '../redux/thunks/recipeThunk';

const BottomSheetModalContainer = styled(Div)`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`;

const BottomSheetModal = (props) => {
  const { isOpen, onClose } = props;
  const ref = React.useRef();
  const snapTo = (i) => ref.current?.snapTo(i);

  const [showIngredients, setShowIngredients] = useState(false);
  const [showBackArrow, setShowBackArrow] = useState(false);
  const activeStep = useSelector((state) => state.slider.activeStep);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // when open, disable scroll on content behind modal sheet
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  useEffect(() => {
    if (activeStep === 0) {
      if (showBackArrow === true) {
        snapTo(1);
      }
      setShowIngredients(false);
      setShowBackArrow(false);
    } else if (activeStep === 1) {
      setShowIngredients(true);
    } else {
      setShowBackArrow(true);
      setShowBackArrow(true);
      snapTo(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep, ref]);

  const close = () => {
    dispatch(resetStep());
    setShowIngredients(false);
    setShowBackArrow(false);
    onClose();
  };

  return (
    <Sheet
      ref={ref}
      isOpen={isOpen}
      onClose={() => {
        close();
      }}
      snapPoints={[0.75, 0.5]}
      initialSnap={1}
      springConfig={{ stiffness: 150, damping: 20, mass: 1 }}
    >
      <Sheet.Container>
        {showBackArrow && (
          <Div
            d="flex"
            style={{ position: 'absolute', left: '18px', top: '8px' }}
          >
            <Icon
              color="black"
              name="LongLeft"
              m={{ r: '8px' }}
              style={{ zIndex: 10 }}
              onClick={() => {
                dispatch(handleBack());
              }}
            />
          </Div>
        )}
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
                {
                  key: 'step1',
                  component: (
                    <Step1
                      key="step1"
                      onNextClicked={(recipeName) => {
                        dispatch(handleNext());
                        dispatch(setRecipeName(recipeName));
                        if (snapTo != null) {
                          snapTo(0);
                        }
                        setShowBackArrow(true);
                        setTimeout(() => {
                          setShowIngredients(true);
                        }, 300);
                      }}
                      style={{ position: 'absolute', width: '100%' }}
                    />
                  ),
                },
                {
                  key: 'step2',
                  component: (
                    <Step2
                      key="step2"
                      onNextClicked={(basket) => {
                        dispatch(setBasket(basket));
                        dispatch(handleNext());
                        setTimeout(() => {
                          setShowIngredients(false);
                        }, 300);
                      }}
                    />
                  ),
                },
                {
                  key: 'step3',
                  component: (
                    <Step3
                      key="step3"
                      style={{ position: 'absolute', width: '100%' }}
                      onImageImported={(image) => {
                        dispatch(setImage(image));
                      }}
                      onNextClicked={() => {
                        dispatch(storeRecipeThunk());
                        close();
                      }}
                    />
                  ),
                },
              ]}
            />
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
