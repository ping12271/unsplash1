import React from "react";
import styled from "styled-components";
import MainPhotoListContainer from "../containers/MainPhotoListContainer";
import {ContentContainer} from "../components/Layout/Layout.Styled";

const Home = () => {

  return (
    <Container>
        <ContentContainer>
            <MainPhotoListContainer/>
        </ContentContainer>
    </Container>
  )
}

const Container = styled.div`

`;

export default Home;