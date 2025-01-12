"use client"

import React from 'react';
import styled from 'styled-components';

const Loader = () => {
    return (
        <StyledWrapper>
            <div className="loader">
                <div className="cell d-0" />
                <div className="cell d-1" />
                <div className="cell d-2" />
                <div className="cell d-1" />
                <div className="cell d-2" />
                <div className="cell d-2" />
                <div className="cell d-3" />
                <div className="cell d-3" />
                <div className="cell d-4" />
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    .loader {
        --cell-size: 16px;
        --cell-spacing: 1px;
        --cells: 3;
        --total-size: calc(var(--cells) * (var(--cell-size) + 2 * var(--cell-spacing)));
        display: flex;
        flex-wrap: wrap;
        width: var(--total-size);
        height: var(--total-size);
    }

    .cell {
        flex: 0 0 var(--cell-size);
        margin: var(--cell-spacing);
        background-color: transparent;
        box-sizing: border-box;
        border-radius: 4px;
        animation: 1.5s ripple ease infinite;
    }

    .cell.d-1 {
        animation-delay: 100ms;
    }

    .cell.d-2 {
        animation-delay: 200ms;
    }

    .cell.d-3 {
        animation-delay: 300ms;
    }

    .cell.d-4 {
        animation-delay: 400ms;
    }

    .cell:nth-child(1) {
        --cell-color: #ff383e;
    }

    .cell:nth-child(2) {
        --cell-color: #ff383e;
    }

    .cell:nth-child(3) {
        --cell-color: #ff383e;
    }

    .cell:nth-child(4) {
        --cell-color: #ff383e;
    }

    .cell:nth-child(5) {
        --cell-color: #ff383e;
    }

    .cell:nth-child(6) {
        --cell-color: #ff383e;
    }

    .cell:nth-child(7) {
        --cell-color: #ff383e;
    }

    .cell:nth-child(8) {
        --cell-color: #ff383e;
    }

    .cell:nth-child(9) {
        --cell-color: #ff383e;
    }

    /*Animation*/
    @keyframes ripple {
        0% {
            background-color: transparent;
        }

        30% {
            background-color: var(--cell-color);
        }

        60% {
            background-color: transparent;
        }

        100% {
            background-color: transparent;
        }
    }`;

export default Loader;
