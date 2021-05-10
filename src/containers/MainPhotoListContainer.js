import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from 'axios';
import MainPhotoList from "../components/List/MainPhotoList";
import Api from "../api";

const MainPhotoListContainer = () => {

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        getPhotos()
    }, [])

    const getPhotos = async () => {

        const result = await Api.getPhotos({
            client_id: 'T-i2T-wrTHuwVSqRwSLLYOYILuVkomGurTC6bH9Xpmc',
            per_page: 20
        });

        setPhotos(result.data)
    }


    return (
        <Container>
            <MainPhotoList data={photos}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default MainPhotoListContainer;