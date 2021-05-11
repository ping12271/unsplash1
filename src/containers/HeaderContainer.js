import React from "react";
import styled from "styled-components";
import Gnb from "../components/Header/Gnb";
import Lnb from "../components/Header/Lnb";

const HeaderContainer = () => {

  return (
    <Container>
        <Gnb/>
        <Lnb/>
    </Container>
  )
}

const Container = styled.div`

`;

export default HeaderContainer;