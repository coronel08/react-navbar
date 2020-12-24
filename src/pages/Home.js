import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div `
    display:grid
    grid-gap: 5px;
    margin-top:1em;
    margin-left:6em;
    margin-right: 6em;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minimax(25px, auto);
`;

export const Home = (props) => (
    <GridWrapper>
        <p>This is a paragraph for home page</p>
        <p>Another paragraph </p>
    </GridWrapper>
)