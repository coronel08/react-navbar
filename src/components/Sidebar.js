import React from 'react';
import styled from "styled-components";

/* The bar that goes dowm the screen*/
const StyledSideNav = styled.div `
    position: fixed;
    height: 100%;
    width: 75px;
    z-index: 1; /* stay on top of everything */
    top: 3.4em; /* stay on top */
    background-color: #222;
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 10px;
`;

class SideNav extends React.Component {
    render() {
        return (
            <StyledSideNav></StyledSideNav>
        );
    }
}

export default class Sidebar extends React.Component {
    render() {
        return (
            <SideNav></SideNav>
        );
    }
}