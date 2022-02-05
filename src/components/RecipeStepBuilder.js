import React from 'react';
import PropTypes from 'prop-types';
import { Div, Text, Icon } from 'atomize';
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
          <div key={step.key}>
            {Math.abs(activeStep - index) <= 2 ? step.component : null}
          </div>
        ))}
      </SwipeableViews>
    </Div>
  );
};

RecipeStepBuilder.propTypes = {
  title: PropTypes.string,
  steps: PropTypes.arrayOf(PropTypes.object).isRequired,
};

RecipeStepBuilder.defaultProps = {
  title: 'Create a recipe',
};

export default RecipeStepBuilder;
