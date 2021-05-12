import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Api from "../api";
import {withRouter} from "react-router-dom";
import MainPhotoList from "../components/List/MainPhotoList";

const SearchContainer = ({location, match, history}) => {

    const [searchResults, setSearchResults] = useState({})
    const query = match.params.query;

    useEffect(() => {
        searchPhotos();
    }, [query])

    const searchPhotos = async () => {
        const result = await Api.searchPhotos({
            client_id: 'T-i2T-wrTHuwVSqRwSLLYOYILuVkomGurTC6bH9Xpmc',
            query
        })

        setSearchResults(result.data)
    };

    return (
        <Container>
            <MainPhotoList data={searchResults?.photos?.results}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default withRouter(SearchContainer);