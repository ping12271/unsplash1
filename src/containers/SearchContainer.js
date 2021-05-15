import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Api from "../api";
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
        const result = await Api.searchPhotos({
            client_id: 'T-i2T-wrTHuwVSqRwSLLYOYILuVkomGurTC6bH9Xpmc',
            query
        })

        dispatch(Action.Creators.setSearchResult(result.data));

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