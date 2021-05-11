import React from "react";
import styled from "styled-components";
import {IconLogo} from "../../icons";
import Nav from "./Nav";
import SearchBox from "../SearchBox";

const Gnb = () => {

  return (
    <Container>
        <Logo>
            <IconLogo/>
        </Logo>
        <SearchBox shape={'round'}/>
        <Nav/>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 62px;
`;

const Logo = styled.div`
  margin-right: 20px;
`;


export default Gnb;