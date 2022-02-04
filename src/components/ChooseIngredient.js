import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Div, Image } from 'atomize';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { AppText } from './AppText';
import fetchIngredientsThunk from '../redux/thunks/ingredientsThunks';

const ScrollableRow = styled(Div)`
  & > div {
    margin-right: 12px;
  }
`;

const BorderIndicator = styled(Div)`
  border-bottom: 2px solid
    ${(props) => (props.isSelected ? '#bfae9d' : 'transparent')};
  border-radius: 0px;
  padding: 8px;
  border-width: 2px;
`;

const ChooseIngredient = (props) => {
  const { onIngredientSelected } = props;

  const dispatch = useDispatch();
  const images = useSelector((state) => state.ingredients.images);
  const ingredientSelected = useSelector(
    (state) => state.ingredients.ingredientSelected,
  );
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    dispatch(fetchIngredientsThunk);
  }, [dispatch]);

  useEffect(() => {
    if (ingredientSelected === '') {
      setSelectedImage(null);
    }
  }, [ingredientSelected]);

  return (
    <Div>
      <AppText p={{ x: '22px', b: '8px' }}>Please select an icon below</AppText>
      <ScrollableRow overflow="auto" d="flex" p={{ l: '22px' }}>
        {images.map((image) => (
          <BorderIndicator
            key={image}
            onClick={() => {
              setSelectedImage(image);
              onIngredientSelected(image);
            }}
            isSelected={selectedImage === image}
          >
            <Image
              src={`${process.env.REACT_APP_API_URL}/${image}`}
              w="40px"
              h="40px"
              style={{ objectFit: 'contain' }}
            />
          </BorderIndicator>
        ))}
      </ScrollableRow>
    </Div>
  );
};

ChooseIngredient.propTypes = {
  onIngredientSelected: PropTypes.func.isRequired,
};

export default ChooseIngredient;
