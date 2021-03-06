import styled from 'styled-components';


export const WrapperModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.25);
    animation-name: appear;
    animation-duration: 300ms;
`

export const ModalMain = styled.div`
    position: relative;
`

export const ModalImg = styled.div`

`

export const BtnClose = styled.button`
    position: absolute;
    background-color: #fff;
    border: none;
    border-radius: 3px;
    width: 23px;
    height: 23px;
    top: -20px;
    right: -25px;
`