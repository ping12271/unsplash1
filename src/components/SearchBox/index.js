import React, {useState} from "react";
import styled from "styled-components";
import {IconSearch} from "../../icons";
import cn from 'classnames';
import {useHistory} from 'react-router-dom';

const SearchBox = ({shape}) => {

    const history = useHistory();
    const [query, setQuery] = useState('')

    const onChange = (e) => {
        setQuery(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/photos/${query}`)
    }

  return (
    <Container className={cn('searchBox', shape)}>
        <Form onSubmit={onSubmit}>
            <Button>
                <IconSearch/>
            </Button>
            <Label>
                <Input
                    type="text"
                    value={query}
                    onChange={onChange}
                    placeholder={'...search'}
                />
            </Label>
        </Form>
    </Container>
  )
}

const Container = styled.div`
  flex: 1;
  display: flex;
`;

const Form = styled.form`
  display: flex;
  flex: 1;
  overflow: hidden;
  padding: 0 18px;
  .round & {
    background: #eee;
    border-radius: 20px;
  }
  .square & {
    background: #fff;
    border-radius: 6px;
  }
  * {
    &:focus {
      outline: 0;
    }
  }
`;

const Label = styled.label`
  display: block;
  flex: 1;
  .round & {
    height: 38px;
  }
  .square & {
    height: 54px;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  padding: 8px;
  background: transparent;
  border: none;
`;

const Button = styled.button`
  background: none;
  border: none;
  svg {
    .round & {
      width: 20px;
      height: 20px;
    }
    .square & {
      width: 24px;
      height: 24px;
    }
  }
`;

export default SearchBox;