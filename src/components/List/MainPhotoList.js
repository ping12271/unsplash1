import React from "react";
import styled from "styled-components";
import PhotoItem from "../Items/PhotoItem";

const MainPhotoList = ({data = []}) => {

  return (
      <Container>
          <Row>
              {
                  data.map((item, index) => (
                      <Col key={index}>
                          <PhotoItem {...item}/>
                      </Col>
                  ))
              }
          </Row>
      </Container>
  )
}

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 12px;
`;

const Col = styled.div`
  width: 33.3333%;
  padding: 12px;
`;

export default MainPhotoList;