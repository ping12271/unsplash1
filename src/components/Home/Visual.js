import React from "react";
import styled from "styled-components";
import SearchBox from "../SearchBox";

const Visual = () => {

  return (
    <Container>
        <Bg>
            <img src="https://images.unsplash.com/photo-1620653511542-e488ea099dd4?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
        </Bg>
        <Contents>
            <h1>Unsplash</h1>
            <p>dddddddd</p>
            <SearchBox shape={'square'}/>
        </Contents>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Contents = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  color: #fff;
  h1 {
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  p {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export default Visual;