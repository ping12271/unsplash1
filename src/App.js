import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import {Route, Switch} from 'react-router-dom';
import Home from "./Pages/Home";
import HeaderContainer from "./containers/HeaderContainer";
import Search from "./Pages/Search";
import Topics from "./Pages/Topics";
import PopupContainer from "./containers/PopupContainer";

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
    max-width: 100%;
  }
`;

const App = () => {

    return (
        <Container>
            <GlobalStyle/>
            <HeaderContainer/>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/search/:category/:query'} component={Search}/>
                <Route path={'/topics/:slug'} component={Topics}/>
            </Switch>
            <PopupContainer/>
        </Container>
    )
}

const Container = styled.div`

`;

export default App;