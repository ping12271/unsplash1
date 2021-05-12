import React from "react";
import styled from "styled-components";

const TopicContents = ({data}) => {

    const {
        title,
        description,
        status,
        total_photos,
    } = data;

  return (
    <Container>
        <TopicHead>
            <h1>{title}</h1>
            <p>{description}</p>
        </TopicHead>
        <Summary>
            <Detail>
                <DetailItem>
                    <div className="label">Status</div>
                    <div className="content">{status}</div>
                </DetailItem>
                <DetailItem>
                    <div className="label">Curator</div>
                    <div className="content">
                        <img src="https://images.unsplash.com/profile-1544707963613-16baf868f301?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff" alt=""/>
                    </div>
                </DetailItem>
                <DetailItem>
                    <div className="label">Contributions</div>
                    <div className="content">{total_photos}</div>
                </DetailItem>
            </Detail>
            <Button>submit to {title}</Button>
        </Summary>
    </Container>
  )
}

const Container = styled.div`

`;

const TopicHead = styled.div`

`;

const Summary = styled.div`

`;

const Detail = styled.div`

`;

const DetailItem = styled.div`

`;

const Button = styled.div`

`;

export default TopicContents;