import React from 'react';
import styled from 'styled-components';
import { Text, Div, Button, Icon } from 'atomize';
import { useAuth0 } from '@auth0/auth0-react';
import sushi from '../assets/sushi1.jpg';

export const Title = styled.p`
  font-family: 'Horizon';
  font-weight: 900;
  font-size: 3rem;
  color: white;
  text-align: center;
  line-height: 3.5rem;
`;

const ContainerImage = styled.image`
  background-image: url(${sushi});
  height: 100%;
  background-size: cover;
  background-position: center;
  width: 100%;
  filter: brightness(60%);
  position: absolute;
  top: 0;
`;

const Home = function Home() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Div h="100%" d="flex" flexDir="column" position="relative">
      <ContainerImage className="d-flex h-100" />
      <Div w="100%" h="100%" style={{ position: 'absolute' }} d="flex">
        <Div
          d="flex"
          h="100%"
          w="100%"
          justify="center"
          align="center"
          flexDir="column"
          textAlign="center"
        >
          <Title>Cooking Experience Like a Chef</Title>
          <Text
            textSize="1.5rem"
            textColor="white"
            p="3rem"
            fontFamily="Poppins"
          >
            Let's make a delicious dish with the best recipe for the family
          </Text>
          <Button
            h="4rem"
            p={{ x: '-1.5rem', r: '8px' }}
            textColor="white"
            bg="#25BC65"
            m={{ x: '1.5rem', y: '1.5rem' }}
            rounded="32px"
            onClick={() => loginWithRedirect()}
          >
            <Icon name="RightArrowSolid" size="3.5rem" color="white" />
            <Text
              p="8px"
              fontSize="4rem"
              textSize="1.25rem"
              fontFamily="Poppins"
            >
              Get Started
            </Text>
          </Button>
          {isAuthenticated && (
            <Text
              textColor="white"
              fontFamily="Poppins"
              textSize="large"
              p={{ y: '0.5rem' }}
            >
              Logged as : {user.email}
            </Text>
          )}
        </Div>
      </Div>
    </Div>
  );
};

export default Home;
