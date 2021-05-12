import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

const Lnb = ({data}) => {

    return (
        <Container>
            <div>menu</div>
            <Track>
            {
                data.map((item, index) => {
                    return (
                        <TopicMenu key={index}>
                            <Link to={`/topics/${item.slug}`}>
                                {item.title}
                            </Link>
                        </TopicMenu>
                    )
                })
            }
            </Track>
            <div>menu</div>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
`;

const Track = styled.div`
  flex: 1;
  display: flex;
  overflow-x: auto;
`;

const TopicMenu = styled.div`
  a {
    display: flex;
    align-items: center;
    padding: 0 10px;
    height: 56px;
    color: #797979;
    font-size: 14px;
    white-space: nowrap;
    &:hover {
      color: #111;
    }
  }
`;

export default Lnb;