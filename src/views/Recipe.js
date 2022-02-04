import { Container, Div, Text } from 'atomize';
import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import CategoryChip from '../components/CategoryChip';

const Wrap = styled(Div)`
  & > div {
    margin-bottom: 22px;
  }
`;

const Recipe = function Recipe() {
  return (
    <Container style={{ position: 'relative' }}>
      <Div p={{ t: '2rem' }}>
        <Text
          fontFamily="Horizon"
          tag="h3"
          textColor="#08080A"
          textSize="1.5rem"
        >
          Find Best Recipe For Cooking
        </Text>
      </Div>
      <Div d="flex" m={{ y: '18px' }} overflow="auto">
        <CategoryChip selected label="All" />
        <CategoryChip label="Sushi" />
        <CategoryChip label="Burger" />
      </Div>
      <Wrap d="flex" flexWrap="nowrap" flexDir="column">
        <Card title="Salmon Sushi Matcha" ingredients={12} time={40} />
        <Card title="Salmon Sushi Matcha" ingredients={12} time={40} />
        <Card title="Salmon Sushi Matcha" ingredients={12} time={40} />
        <Card title="Salmon Sushi Matcha" ingredients={12} time={40} />
      </Wrap>
    </Container>
  );
};

export default Recipe;
