import React from "react";
import styled from "styled-components";
import {Route, Switch} from 'react-router-dom';
import Home from "./Pages/Home";

const App = () => {

  return (
    <Container>
        <Switch>
            <Route exact path={'/'} component={Home}/>
        </Switch>
    </Container>
  )
}

const Container = styled.div`

`;

export default App;