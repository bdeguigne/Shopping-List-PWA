/* eslint-disable react/jsx-props-no-spreading */
import { Text } from 'atomize';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const AppText = (props) => {
  const { children } = props;
  return (
    <Text fontFamily="Poppins" textColor="white" {...props}>
      {children}
    </Text>
  );
};

AppText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

const Title = styled.p`
  line-height: 2rem;
  color: white;
  font-family: 'Horizon';
  font-size: x-large;
`;

export const AppTitle = (props) => {
  const { children } = props;
  return <Title {...props}>{children}</Title>;
};

AppTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};
