import React, {Component} from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


export default (props) => {
    return(
        <Nav bsStyle="tabs" >

            <LinkContainer to="/dictionary">
                <NavItem >Dictionary</NavItem>
            </LinkContainer>

            <LinkContainer to="/translator">
                <NavItem>Translator</NavItem>
            </LinkContainer>

            <LinkContainer to="/training">
                <NavItem>Training</NavItem>
            </LinkContainer>

            <LinkContainer to="/statistics">
                <NavItem>Statistics</NavItem>
            </LinkContainer>

        </Nav>
    );
}
