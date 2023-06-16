import styled from "styled-components";

export const SkeletonStyle = styled.span`
    background: #a7a7a7;
    /* background: linear-gradient(110 deg, #bfbfbf 20%, #e2e2e2 25%); */
    border-radius: 5px;
    background-size: 200% 100%;
    /* animation: 1.5s shine linear infinite; */
    width: 100%;
    display: block;
    /* transform: scale(0.025);
    transform-origin: left; */
    &.rectangle {

    }
    &.circle {
        border-radius: 100%;
    }
    /* @keyframes shine {
        to {
            background-position-x: -200%;
        }
    } */
`