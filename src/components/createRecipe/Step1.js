import { TextField, Typography } from '@mui/material';
import { Div, Button, Text, Icon } from 'atomize';
import React from 'react';
import PropTypes from 'prop-types';

const Step1 = React.forwardRef((props, ref) => {
  const { onNextClicked } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Div ref={ref} {...props}>
      <Typography
        id="modal-modal-description"
        sx={{ mt: 2 }}
        fontFamily="Poppins"
      >
        Start by giving your recipe a name
      </Typography>
      <TextField
        label="Recipe name"
        variant="filled"
        style={{ width: '100%', marginTop: '8px' }}
      />
      <Div d="flex" justify="center" m={{ t: '22px' }}>
        <Button
          h="3rem"
          textColor="white"
          bg="#42927C"
          rounded="32px"
          p={{ x: '-1.5rem' }}
          onClick={onNextClicked}
        >
          <Text p="4px" textSize="1rem" fontFamily="Poppins">
            Choose your ingredients
          </Text>
          <Icon name="RightArrowSolid" size="2rem" color="white" />
        </Button>
      </Div>
    </Div>
  );
});

Step1.propTypes = {
  onNextClicked: PropTypes.func.isRequired,
};

export default Step1;
