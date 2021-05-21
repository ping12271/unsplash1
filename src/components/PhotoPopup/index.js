import React from "react";
import styled from "styled-components";
import MainPhotoList from "../List/MainPhotoList";

const PhotoPopup = ({photoById, photoRelated}) => {

  return (
    <Container>
        <Track>
            <PhotoDetail>
                <h3>{photoById.user.username}</h3>
                <PreviewImage>
                    <img src={photoById?.urls?.full} alt=""/>
                </PreviewImage>
            </PhotoDetail>
            <RelatedPhotos>
                <MainPhotoList data={photoRelated.results}/>
            </RelatedPhotos>
        </Track>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  z-index: 100;
  max-width: 80%;
  margin: 0 auto;
  height: 100vh;
  overflow: auto;
  padding-top: 60px; 
`;

const Track = styled.div`
  background: #fff;
  border-radius: 9px;
  overflow: hidden;
  padding: 0 15px;
`;

const PhotoDetail = styled.div`
  padding: 10px;
`;

const PreviewImage = styled.div`
  height: 60vh;
  text-align: center;
  
  img {
    height: 100%;
  }
`;

const RelatedPhotos = styled.div`

`;



export default PhotoPopup;