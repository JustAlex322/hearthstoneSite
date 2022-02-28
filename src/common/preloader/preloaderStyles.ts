import styled from "styled-components";

export const PreloaderBlock = styled.div`

    display: block;
    position: relative;
    width: 150px;
    height: 150px;
    margin: 30px auto;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #337AB7;
    animation: preloader-spin 2s linear infinite;

    .preloader:before {
        content: "";
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: #BFE2FF;
        animation: preloader-spin 3s linear infinite;
    }

    .preloader:after {
        content: "";
        position: absolute;
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: #337AB7;
        animation: preloader-spin 1.5s linear infinite;
    }

    @keyframes preloader-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
}
`