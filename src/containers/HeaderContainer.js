import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Gnb from "../components/Header/Gnb";
import Lnb from "../components/Header/Lnb";
import Api from "../api";

const HeaderContainer = () => {

    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics()
    }, [])

    const getTopics = async () => {
        const result = await Api.getTopics({
            client_id: 'T-i2T-wrTHuwVSqRwSLLYOYILuVkomGurTC6bH9Xpmc',
            per_page: 20
        })

        console.log('@@',result )
        setTopics(result.data)
    }

  return (
    <Container>
        <Gnb/>
        <Lnb data={topics}/>
    </Container>
  )
}

const Container = styled.div`

`;

export default HeaderContainer;