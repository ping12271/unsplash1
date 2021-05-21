import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import ReactDOM from 'react-dom';
import PhotoPopup from "../components/PhotoPopup";
import {Action} from "../redux/reducer";

const PopupContainer = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(Action.Creators.updateState({
            photoPopup: false
        }))
    }

    if(!state.photoPopup) return null;

    return (
        ReactDOM.createPortal(
            <Container>
                <Screen onClick={onClose}/>
                <PhotoPopup photoById={state.photoById} photoRelated={state.photoRelated}/>
            </Container>,
            document.getElementById('popup')
        )
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2000;
`;

const Screen = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.6);
`;

export default PopupContainer;