import React from "react";
import styled from "styled-components";
import TopicsContainer from "../containers/TopicsContainer";

const Topics = (props) => {

  return (
    <Container>
        <TopicsContainer {...props}/>
    </Container>
  )
}

const Container = styled.div`

`;

export default Topics;