import React from 'react';
import PropTypes from 'prop-types';
import { Div, Text } from 'atomize';
import SwipeableViews from 'react-swipeable-views';
import { useSelector } from 'react-redux';

const RecipeStepBuilder = (props) => {
  const { title, steps } = props;
  const activeStep = useSelector((state) => state.slider.activeStep);

  return (
    <Div>
      <Text fontFamily="Horizon" tag="h3" textColor="#08080A" textSize="1.5rem">
        {title}
      </Text>
      <SwipeableViews disabled axis="x" index={activeStep}>
        {steps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? step : null}
          </div>
        ))}
      </SwipeableViews>
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      /> */}

      {/* <Div d="flex" style={{ position: 'relative' }}>
        {steps.map((step, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Div key={`step ${index}`} w="100%">
            <Slide
              in={index === showIndex}
              direction={index === showIndex ? 'left' : 'right'}
            >
              {step}
            </Slide>
          </Div>
        ))}
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
      </Div> */}
    </Div>
  );
};

RecipeStepBuilder.propTypes = {
  title: PropTypes.string,
  steps: PropTypes.arrayOf(PropTypes.node).isRequired,
};

RecipeStepBuilder.defaultProps = {
  title: 'Create a recipe',
};

export default RecipeStepBuilder;
