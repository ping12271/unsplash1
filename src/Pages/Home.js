import React from "react";
import styled from "styled-components";
import MainPhotoListContainer from "../containers/MainPhotoListContainer";
import {ContentContainer} from "../components/Layout/Layout.Styled";
import Visual from "../components/Home/Visual";

const Home = ({history}) => {

  return (
    <Container>
        <Visual/>
        <ContentContainer>
            <MainPhotoListContainer/>
        </ContentContainer>
    </Container>
  )
}

const Container = styled.div`

`;

export default Home;