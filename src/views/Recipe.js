import React from 'react';
import { Container, Div, Text, Icon } from 'atomize';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Card from '../components/Card';
import { fetchAllRecipes } from '../redux/thunks/recipeThunk';
import { AppText } from '../components/AppText';
import FloatActionButton from '../components/floatActionButton';
import BottomSheetModal from '../components/BottomSheetModal';
import { createNotificationSubscription } from '../redux/notificationService';

const Wrap = styled(Div)`
  & > div {
    margin-bottom: 22px;
  }
`;

const Recipe = function Recipe() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recipes = useSelector((state) => state.recipe.recipes);
  const userId = useSelector((state) => state.user.id);
  const firstName = useSelector((state) => state.user.firstName);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [notificationToggled, setNotificationToggled] = React.useState(false);

  React.useEffect(() => {
    dispatch(fetchAllRecipes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateToRecipePage = (id) => {
    navigate(`/recipes/${id}`);
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  React.useEffect(() => {
    if (notificationToggled && userId) {
      createNotificationSubscription(userId);
    }
  }, [notificationToggled, userId]);

  return (
    <Container style={{ position: 'relative' }}>
      <Div p={{ t: '2rem', b: '1rem' }} d="flex" justify="space-between">
        <Div>
          <Text
            fontFamily="Horizon"
            tag="h3"
            textColor="#08080A"
            textSize="1.5rem"
          >
            {firstName !== '' && firstName !== undefined
              ? `Hello, ${firstName} 👋`
              : 'Hello 👋'}
          </Text>
          <AppText textColor="#909090" m={{ t: '8px' }}>
            What you want to cook today ?
          </AppText>
        </Div>
        {notificationToggled ? (
          <NotificationsActiveIcon
            style={{ fontSize: '2rem' }}
            onClick={() => setNotificationToggled(!notificationToggled)}
          />
        ) : (
          <NotificationsOffIcon
            style={{ fontSize: '2rem' }}
            onClick={() => setNotificationToggled(!notificationToggled)}
          />
        )}
      </Div>
      <Wrap
        d="flex"
        flexWrap="nowrap"
        flexDir="column"
        m={{ t: '12px', b: '12px' }}
      >
        {recipes.map((recipe) => (
          <Card
            // eslint-disable-next-line no-underscore-dangle
            key={recipe._id}
            title={recipe.recipeName}
            ingredients={recipe.basket.length}
            image={recipe.image}
            onClick={navigateToRecipePage}
            // eslint-disable-next-line no-underscore-dangle
            id={recipe._id}
          />
        ))}
      </Wrap>{' '}
      <FloatActionButton onFabClicked={() => handleOpen()} />
      <BottomSheetModal isOpen={isModalOpen} onClose={() => handleClose()} />
    </Container>
  );
};

export default Recipe;
