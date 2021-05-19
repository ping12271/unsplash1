import React, {useEffect} from "react";
import styled from "styled-components";
import MainPhotoList from "../components/List/MainPhotoList";
import Api from "../api";
import {Action} from "../redux/reducer";
import {useDispatch, useSelector} from "react-redux";

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