import React from 'react';
import styled from 'styled-components';
import { Div } from 'atomize';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';

const FabContainer = styled(Div)`
  position: fixed;
  bottom: 0;
  right: 0;
`;

const FloatActionButton = (props) => {
  const { onFabClicked } = props;

  return (
    <Div>
      <FabContainer>
        <Fab
          aria-label="add"
          style={{ background: '#42927C', color: 'white', margin: '12px' }}
          onClick={onFabClicked}
        >
          <AddIcon color="white" />
        </Fab>
      </FabContainer>
    </Div>
  );
};

FloatActionButton.propTypes = {
  onFabClicked: PropTypes.func.isRequired,
};

export default FloatActionButton;
