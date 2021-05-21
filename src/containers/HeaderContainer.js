import React, {useEffect} from "react";
import styled from "styled-components";
import Gnb from "../components/Header/Gnb";
import Lnb from "../components/Header/Lnb";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../redux/reducer";

const HeaderContainer = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state)

    useEffect(() => {
        getTopics()
    }, [])

    const getTopics = async () => {
        dispatch(Action.Creators.getTopics({
            per_page: 20
        }))
    }

  return (
    <Container>
        <Gnb/>
        <Lnb data={state.topics}/>
    </Container>
  )
}

const Container = styled.div`

`;

export default HeaderContainer;