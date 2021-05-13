import React from "react";
import styled from "styled-components";
import TopicsContainer from "../containers/TopicsContainer";
import {ContentContainer} from "../components/Layout/Layout.Styled";

const Topics = (props) => {

  return (
    <Container>
        <ContentContainer>
            <TopicsContainer {...props}/>
        </ContentContainer>
    </Container>
  )
}

const Container = styled.div`

`;

export default Topics;