import { TextField, Typography } from '@mui/material';
import { Div, Button, Text, Icon } from 'atomize';
import React from 'react';
import PropTypes from 'prop-types';

const Step2 = React.forwardRef((props, ref) => {
  const { onNextClicked } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Div ref={ref} {...props}>
      <Typography
        id="modal-modal-description"
        sx={{ mt: 2 }}
        fontFamily="Poppins"
      >
        You can now choose your ingredients
      </Typography>
      <Div
        d="flex"
        h="50px"
        w="100%"
        border="1px dashed"
        rounded="12px"
        borderColor="#b1afb0"
        justify="center"
        align="center"
      >
        Add
      </Div>
    </Div>
  );
});

Step2.propTypes = {
  onNextClicked: PropTypes.func.isRequired,
};

export default Step2;
