import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { SidebarData } from './SidebarData'

/* The bar that goes dowm the screen*/
const StyledSideNav = styled.div `
    position: fixed;
    height: 100%;
    width: 75px;
    z-index: 1; /* stay on top of everything */
    top: 3.4em; /* stay on top */
    background-color: #3B1D27;
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 10px;
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: SidebarData
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath:path }); /* Sets activepath, causes rerender to change CSS*/
    }

    render() {
        const { items, activePath } = this.state;
        return(
            <StyledSideNav>
                {
                    items.map((item) => {
                    return (
                        <NavItem
                            path={item.path}
                            name={item.name}
                            css={item.css}
                            onItemClick={this.onItemClick}
                            active={item.path === activePath}
                            key={item.key}
                        />
                    );
                    })
                }
            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div `
    height: 70px; 
    width: 75px; /* same as SideNav */
    text-align: center; /* Aligns <a> inside of NavIcon div*/
    margin-bottom: 0; 
    a {
        font-size: 2.7em;
        color: ${(props) => props.active ? "white" : "#9FFFCB"};
        :hover {
            opacity: 0.7;
            text-decoration: none;
        }
    }
`;

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return(
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                    <NavIcon></NavIcon>
                </Link>
            </StyledNavItem>
        );
    }
}

const NavIcon = styled.div `

`;

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}