import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {withRouter} from "react-router-dom";
import MainPhotoList from "../components/List/MainPhotoList";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../redux/reducer";

const SearchContainer = ({location, match, history}) => {

    const dispatch = useDispatch()
    const state = useSelector(state => state);
    const query = match.params.query;

    useEffect(() => {
        searchPhotos();
    }, [query])

    const searchPhotos = async () => {
        dispatch(Action.Creators.searchPhotos({
            query
        }))
    };

    return (
        <Container>
            <MainPhotoList data={state.searchResult?.photos?.results}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default withRouter(SearchContainer);