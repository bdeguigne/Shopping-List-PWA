import { Div, Button, Icon } from 'atomize';
import React from 'react';
import { AppText } from '../AppText';
import ImagePicker from './ImagePicker';

const Step3 = React.forwardRef((props, ref) => {
  return (
    <Div {...props} ref={ref} h="100%">
      <ImagePicker />
      <Button
        // disabled={ingredientsInBasket.length === 0}
        h="3rem"
        textColor="white"
        bg="#42927C"
        rounded="32px"
        p={{ x: '-1.5rem' }}
        m={{ t: '12px' }}
        w="100%"
      >
        <AppText p="4px" textSize="1rem">
          Create recipe !
        </AppText>
        <Icon name="Success" size="2rem" color="white" />
      </Button>
    </Div>
  );
});

export default Step3;
