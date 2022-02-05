import React from 'react';
import PropTypes from 'prop-types';
import { Div, Image } from 'atomize';
import styled from 'styled-components';
import { AppText } from './AppText';

const RecipeCard = styled(Div)`
  box-shadow: 0px 10px 15px -20px rgba(0, 0, 0, 0.75);
`;

const RecipeCardDetail = (props) => {
  const { ingridient } = props;
  return (
    <RecipeCard
      key={ingridient.label}
      bg="white"
      p="8px"
      rounded="18px"
      m={{ b: '12px' }}
      d="flex"
      align="center"
      justify="space-between"
    >
      <Div d="flex" align="center">
        <Div bg="#F6F8FC" p="8px" rounded="18px" m={{ r: '22px' }}>
          <Image
            src={`${process.env.REACT_APP_API_URL}/${ingridient.icon}`}
            w="40px"
            h="40px"
            style={{ objectFit: 'contain' }}
          />
        </Div>
        <AppText textColor="black" textSize="1rem" textWeight="bold">
          {ingridient.label}
        </AppText>
      </Div>
      <AppText textColor="#BBBBBD" textWeight="bold">
        {ingridient.quentity}
      </AppText>
    </RecipeCard>
  );
};

RecipeCardDetail.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  ingridient: PropTypes.object.isRequired,
};

export default RecipeCardDetail;
