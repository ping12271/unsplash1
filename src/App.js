import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import {Route, Switch} from 'react-router-dom';
import Home from "./Pages/Home";
import HeaderContainer from "./containers/HeaderContainer";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
  }
  img {
    vertical-align: top;
  }
`;

const App = () => {

  return (
    <Container>
        <GlobalStyle/>
        <HeaderContainer/>
        <Switch>
            <Route exact path={'/'} component={Home}/>
        </Switch>
    </Container>
  )
}

const Container = styled.div`

`;

export default App;