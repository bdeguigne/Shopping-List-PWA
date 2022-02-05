import { TextField, Typography } from '@mui/material';
import { Div, Button, Text, Icon } from 'atomize';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const Step1 = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const [recipeName, setRecipeName] = React.useState('');
  const { onNextClicked } = props;

  return (
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
        onChange={(input) => setRecipeName(input.target.value)}
        value={recipeName}
      />
      <Div d="flex" justify="center" m={{ t: '22px' }}>
        <Button
          disabled={recipeName === ''}
          h="3rem"
          textColor="white"
          bg="#42927C"
          rounded="32px"
          p={{ x: '-1.5rem' }}
          onClick={() => onNextClicked(recipeName)}
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
