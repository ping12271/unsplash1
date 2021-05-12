import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Api from "../api";
import MainPhotoList from "../components/List/MainPhotoList";
import TopicContents from "../components/Topic/TopicConents";

const TopicsContainer = ({match}) => {

    const slug = match.params.slug;
    const [topic, setTopic] = useState({})

    useEffect(() => {
        getTopicBySlug()
    }, [slug])

    const getTopicBySlug = async () => {
        const result = await Api.getTopicBySlug(slug, {
            client_id: 'T-i2T-wrTHuwVSqRwSLLYOYILuVkomGurTC6bH9Xpmc',
        })
        setTopic(result.data)
    }

  return (
    <Container>
        <TopicContents data={topic}/>
        <MainPhotoList data={topic.preview_photos}/>
    </Container>
  )
}

const Container = styled.div`

`;

export default TopicsContainer;