import React, {useEffect} from "react";
import styled from "styled-components";
import MainPhotoList from "../components/List/MainPhotoList";
import Api from "../api";
import {Action} from "../redux/reducer";
import {useDispatch, useSelector} from "react-redux";

const MainPhotoListContainer = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);

    useEffect(() => {
        getPhotos()
    }, [])

    const getPhotos = async () => {
        const result = await Api.getPhotos({
            client_id: 'T-i2T-wrTHuwVSqRwSLLYOYILuVkomGurTC6bH9Xpmc',
            per_page: 20,
        });

        dispatch(Action.Creators.setPhotos(result.data))
    }

    return (
        <Container>
            <MainPhotoList data={state.list}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default MainPhotoListContainer;