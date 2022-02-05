import React from 'react';
import { Div, Button, Icon, Image } from 'atomize';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import addIcon from '../../assets/Circle-add.svg';
import { AppText } from '../AppText';

const DottedDiv = styled(Div)`
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23C5C5C5FF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
  border-radius: 20px;
`;

const ImagePicker = (props) => {
  const { onImageImported } = props;
  const fileRef = React.createRef();
  const [images, setImages] = React.useState([]);
  const [imageUrl, setImageUrl] = React.useState(null);

  const fileSelectHandler = (e) => {
    setImages([...e.target.files]);
  };

  function blobToBase64(blob) {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  React.useEffect(() => {
    if (images.length < 1) return;
    setImageUrl(URL.createObjectURL(images[0]));
    blobToBase64(images[0]).then((base64) => {
      if (base64) {
        onImageImported(base64);
      }
    });
  }, [images, onImageImported]);

  return imageUrl === null ? (
    <DottedDiv
      h="60%"
      w="100%"
      d="flex"
      justify="center"
      align="center"
      m={{ t: '24px', b: '24px' }}
      onClick={() => fileRef.current.click()}
    >
      <Div d="flex" justify="center" flexDir="column" align="center">
        <input
          id="selectImage"
          type="file"
          multiple
          accept="image/*"
          onChange={fileSelectHandler}
          ref={fileRef}
          style={{ display: 'none' }}
        />
        <Div m={{ b: '12px' }}>
          <Image src={addIcon} />
        </Div>
        <AppText p="4px" textColor="#C5C5C5">
          Click here to choose a photo
        </AppText>
      </Div>
    </DottedDiv>
  ) : (
    <Image
      h="60%"
      w="100%"
      rounded="20px"
      m={{ t: '24px', b: '24px' }}
      style={{ objectFit: 'cover' }}
      src={imageUrl}
    />
  );
};

ImagePicker.propTypes = {
  onImageImported: PropTypes.func.isRequired,
};

export default ImagePicker;
