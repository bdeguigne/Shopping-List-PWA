import React, { useState } from 'react';
import styled from 'styled-components';
import { Div } from 'atomize';
import Fab from '@mui/material/Fab';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import BottomSheetModal from './BottomSheetModal';

const FabContainer = styled(Div)`
  position: fixed;
  bottom: 0;
  right: 0;
`;

const FloatActionButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Div>
      <FabContainer>
        <Fab
          aria-label="add"
          style={{ background: '#42927C', color: 'white', margin: '12px' }}
          onClick={handleOpen}
        >
          <AddIcon color="white" />
        </Fab>
      </FabContainer>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BottomSheetModal isModalOpen={isModalOpen} />
      </Modal>
    </Div>
  );
};

FloatActionButton.propTypes = {};

export default FloatActionButton;
