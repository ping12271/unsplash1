import React, {useEffect} from "react";
import styled from "styled-components";
import MainPhotoList from "../components/List/MainPhotoList";
import TopicContents from "../components/Topic/TopicConents";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../redux/reducer";

const TopicsContainer = ({match}) => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const slug = match.params.slug;

    useEffect(() => {
        getTopicBySlug()

    }, [slug])

    const getTopicBySlug = async () => {
        dispatch(Action.Creators.getTopicBySlug(slug))
    }

  return (
    <Container>
        <TopicContents data={state.topicBySlug}/>
        <MainPhotoList data={state.topicBySlug.preview_photos}/>
    </Container>
  )
}

const Container = styled.div`

`;

export default TopicsContainer;