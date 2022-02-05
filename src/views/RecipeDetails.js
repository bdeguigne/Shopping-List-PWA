import { Div, Image, Button, Icon } from 'atomize';
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppText } from '../components/AppText';
import RecipeHeader from '../components/RecipeHeader';
import RecipeCardDetail from '../components/RecipeCardDetail';
import { fetchAllRecipes } from '../redux/thunks/recipeThunk';

const ImageShadow = styled(Image)`
  box-shadow: 0px 10px 20px -20px rgba(0, 0, 0, 0.75);
`;

const RecipeDetails = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { recipeId } = useParams();
  const recipes = useSelector((state) => state.recipe.recipes);
  const [recipe, setRecipe] = useState(null);

  React.useEffect(() => {
    dispatch(fetchAllRecipes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (recipeId && recipes.length > 0) {
      setRecipe(recipes.find((element) => element._id === recipeId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipeId, recipes]);

  const back = () => {
    navigate('/recipes');
  };

  return (
    <Div>
      {recipe && (
        <Div>
          <RecipeHeader title={recipe.recipeName} onBackClick={back} />
          <Div p={{ y: '60px', x: '12px', b: '84px' }}>
            <ImageShadow
              src={recipe.image}
              rounded="22px"
              style={{
                objectFit: 'cover',
                boxShadow: '0px 10px 15px -20px rgba(0, 0, 0, 0.75)',
              }}
              h="200px"
            />
            <Div m={{ t: '28px', b: '28px' }}>
              <AppText textColor="black" textSize="1.25rem" textWeight="bold">
                Ingridients ({recipe.basket.length})
              </AppText>
            </Div>
            {recipe.basket.map((ingridient) => (
              <RecipeCardDetail
                key={ingridient.label}
                ingridient={ingridient}
              />
            ))}
            <Div
              d="flex"
              justify="center"
              w="100%"
              p={{ y: '16px' }}
              style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                background: 'linear-gradient(#ffffff00 -0%, #ffffff)',
              }}
            >
              <Button
                h="4rem"
                textColor="white"
                bg="#42927C"
                rounded="22px"
                onClick={back}
                style={{
                  boxShadow: '0px 10px 25px -15px rgb(0 0 0 / 75%)',
                }}
              >
                <AppText
                  p="4px"
                  textSize="1rem"
                  fontFamily="Poppins"
                  textWeight="bold"
                >
                  Start Cook!
                </AppText>
                <Icon name="RightArrowSolid" size="2rem" color="white" />
              </Button>
            </Div>
          </Div>
        </Div>
      )}
    </Div>
  );
};

RecipeDetails.propTypes = {};

export default RecipeDetails;
