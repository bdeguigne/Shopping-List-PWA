import React, { useState } from 'react';
import { TextField, Typography, Button, Box } from '@mui/material';
import { Div } from 'atomize';
import PropTypes from 'prop-types';
import Add from '@mui/icons-material/Add';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransitionGroup } from 'react-transition-group';
import Collapse from '@mui/material/Collapse';
import { AppText } from '../AppText';

const Step2 = (props) => {
  const [ingredients, setIngredients] = useState([]);
  const { onNextClicked } = props;

  function renderItem({ item, handleRemoveFruit }) {
    return (
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            title="Delete"
            onClick={() => handleRemoveFruit(item)}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <AppText textColor="black">Hello</AppText>
      </ListItem>
    );
  }

  const handleRemoveIngredient = (item) => {
    setIngredients((prev) => [...prev.filter((i) => i !== item)]);
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Div>
      {/* <Typography
        id="modal-modal-description"
        sx={{ mt: 2 }}
        fontFamily="Poppins"
      >
        You can now choose your ingredients
      </Typography>
      <TextField
        label="Ingredient name"
        variant="filled"
        style={{ width: '100%', marginTop: '8px' }}
      /> */}
      <Button
        variant="outlined"
        startIcon={<Add />}
        style={{ width: '100%', height: '50px', marginTop: '12px' }}
        onClick={() =>
          setIngredients((oldIngredients) => [...oldIngredients, 'Hello'])
        }
      >
        Add
      </Button>
      <Box sx={{ mt: 1 }}>
        <List>
          <TransitionGroup>
            {ingredients.map((ingredient) => (
              <Collapse key={ingredient + ingredients.length}>
                {renderItem({ ingredient, handleRemoveIngredient })}
              </Collapse>
            ))}
          </TransitionGroup>
        </List>
      </Box>
    </Div>
  );
};

Step2.propTypes = {
  onNextClicked: PropTypes.func.isRequired,
};

export default Step2;
