import React, {useEffect} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";

import MainPhotoList from "../components/List/MainPhotoList";
import {Action} from "../redux/reducer";

const MainPhotoListContainer = () => {

    const dispatch = useDispatch();
    const {list} = useSelector(state => state);

    useEffect(() => {
        getPhotos()
    }, [])

    const getPhotos = async () => {
        dispatch(Action.Creators.getPhotos({
            per_page: 20
        }))
    }

    return (
        <Container>
            <MainPhotoList data={list}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default MainPhotoListContainer;