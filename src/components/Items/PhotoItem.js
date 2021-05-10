import React from "react";
import styled from "styled-components";

const PhotoItem = ({urls}) => {

  return (
    <Container>
        <img src={urls.regular} alt=""/>
    </Container>
  )
}

const Container = styled.div`
  img {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
`;

export default PhotoItem;