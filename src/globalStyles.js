import styled from 'styled-components';
import CONSTANTS from './CONSTANTS';

export const JobcoinButton = styled.button`
    border-radius: .25em;
    color: white;
    background-color: ${CONSTANTS.PURPLE};
    margin: .5em;
    font-size: 1em;
    text-decoration: none;
    border: none;
    padding: .5em 1em;
    position: relative;
    transition: transform 0.05s cubic-bezier(0.37, 0.74, 0.15, 1.65);
    
    &::after{
        content: '';
        position: absolute;
        border-radius: 0.25em;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 1;
        box-shadow: 0px 2px 5px -1px ${CONSTANTS.GREY};
        transition: opacity 0.05s ease;
    }

    &:hover {
        background-color: ${CONSTANTS.ORANGE};
        transform: scale(1.04);
    }

    &:active {
        transform: scale(0.95);
        &::after{
            opacity: 0;
        }
    }

    &:disabled{
        background-color: ${CONSTANTS.GREY};
    }

    &:disabled:hover,
    &:disabled:active{
        transform: none;
        &::after{
            opacity: 1;
        }
    }
`;


