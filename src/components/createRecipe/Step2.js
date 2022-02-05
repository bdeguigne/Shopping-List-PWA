import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Button as MaterialButton } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransitionGroup } from 'react-transition-group';
import Add from '@mui/icons-material/Add';
import { Div, Image, Icon, Text, Button } from 'atomize';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setIngredient } from '../../redux/ingredientsSlice';
import { AppText } from '../AppText';

const IngredientCard = styled(Div)`
  box-shadow: 0px 10px 30px -20px rgba(0, 0, 0, 0.1);
`;

function renderItem({ label, icon, quentity, handleRemoveFruit }) {
  return (
    <IngredientCard bg="white" p="12px" rounded="12px" m={{ b: '12px' }}>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            title="Delete"
            onClick={() => handleRemoveFruit(label)}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <Image
          src={`${process.env.REACT_APP_API_URL}/${icon}`}
          w="40px"
          h="40px"
          style={{ objectFit: 'contain' }}
          m={{ r: '18px' }}
        />
        <ListItemText
          fontFamily="Poppins"
          primary={label}
          secondary={quentity}
        />
      </ListItem>
    </IngredientCard>
  );
}

const Step2 = React.forwardRef((props, ref) => {
  const { onNextClicked } = props;
  const [ingredientsInBasket, setIngredientsInBasket] = React.useState([]);
  const [ingredientName, setIngredientName] = React.useState('');
  const [quentity, setQuentity] = React.useState('');
  const [showError, setShowError] = React.useState(false);

  const dispatch = useDispatch();
  const ingredientSelected = useSelector(
    (state) => state.ingredients.ingredientSelected,
  );

  const resetIngredientData = () => {
    setIngredientName('');
    setQuentity('');
    dispatch(setIngredient(''));
    setShowError(false);
  };

  const handleAddFruit = () => {
    if (
      ingredientSelected !== '' &&
      quentity !== null &&
      ingredientName != null
    ) {
      setIngredientsInBasket((prev) => [
        {
          label: ingredientName,
          icon: ingredientSelected,
          quentity,
          key: ingredientsInBasket.length,
        },
        ...prev,
      ]);
      resetIngredientData();
    } else {
      setShowError(true);
    }
  };

  const handleRemoveFruit = (item) => {
    setIngredientsInBasket((prev) => [...prev.filter((i) => i.label !== item)]);
  };

  const addIngredientButton = (
    <Div>
      <MaterialButton
        variant="outlined"
        startIcon={<Add />}
        style={{ width: '100%', height: '50px', marginTop: '12px' }}
        onClick={() => handleAddFruit()}
      >
        Add
      </MaterialButton>
    </Div>
  );

  const ingredientNameField = (
    <TextField
      error={showError && ingredientName === ''}
      label="Ingredient name"
      variant="filled"
      style={{ width: '100%', marginTop: '8px' }}
      onChange={(input) => setIngredientName(input.target.value)}
      value={ingredientName}
      helperText={showError && ingredientName === '' && 'Please enter a value'}
    />
  );

  const quentityField = (
    <TextField
      error={showError && quentity === ''}
      label="Quentity"
      variant="filled"
      style={{ width: '100%', marginTop: '8px' }}
      onChange={(input) => setQuentity(input.target.value)}
      value={quentity}
      helperText={showError && quentity === '' && 'Please enter a value'}
    />
  );

  return (
    <Div ref={ref} w="100%">
      <Typography
        id="modal-modal-description"
        sx={{ mt: 2 }}
        fontFamily="Poppins"
      >
        Please add a few ingredients
      </Typography>
      {ingredientNameField}
      {quentityField}
      {addIngredientButton}
      {showError && ingredientSelected === '' && (
        <AppText textColor="#d32f2f">Please select an icon on top</AppText>
      )}
      <Box sx={{ mt: 1 }}>
        <List>
          <TransitionGroup>
            {ingredientsInBasket.map((item) => (
              <Collapse key={item.key}>
                {renderItem({
                  label: item.label,
                  icon: item.icon,
                  quentity: item.quentity,
                  handleRemoveFruit,
                })}
              </Collapse>
            ))}
          </TransitionGroup>
        </List>
      </Box>
      <Button
        disabled={ingredientsInBasket.length === 0}
        h="3rem"
        textColor="white"
        bg="#42927C"
        rounded="32px"
        p={{ x: '-1.5rem' }}
        w="100%"
        onClick={() => {
          onNextClicked(ingredientsInBasket);
        }}
      >
        <Text p="4px" textSize="1rem" fontFamily="Poppins">
          Import a photo
        </Text>
        <Icon name="RightArrowSolid" size="2rem" color="white" />
      </Button>
    </Div>
  );
});

Step2.propTypes = {
  onNextClicked: PropTypes.func.isRequired,
};

export default Step2;
