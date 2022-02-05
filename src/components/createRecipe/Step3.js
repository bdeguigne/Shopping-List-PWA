import { Div, Button, Icon } from 'atomize';
import React from 'react';
import PropTypes from 'prop-types';

import { AppText } from '../AppText';
import ImagePicker from './ImagePicker';

const Step3 = React.forwardRef((props, ref) => {
  const { onNextClicked, onImageImported } = props;
  const [image, setImage] = React.useState(null);

  return (
    <Div {...props} ref={ref} h="100%">
      <ImagePicker
        onImageImported={(imageImported) => {
          setImage(imageImported);
          onImageImported(imageImported);
        }}
      />
      <Button
        disabled={image == null}
        h="3rem"
        textColor="white"
        bg="#42927C"
        rounded="32px"
        p={{ x: '-1.5rem' }}
        m={{ t: '12px' }}
        w="100%"
        onClick={onNextClicked}
      >
        <AppText p="4px" textSize="1rem">
          Create recipe !
        </AppText>
        <Icon name="Success" size="2rem" color="white" />
      </Button>
    </Div>
  );
});

Step3.propTypes = {
  onNextClicked: PropTypes.func.isRequired,
  onImageImported: PropTypes.func.isRequired,
};

export default Step3;
