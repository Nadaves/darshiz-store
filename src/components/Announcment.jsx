import React from 'react'
import styled from "styled-components";
import { Button } from '@material-ui/core';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14;
    font-weight: 500;
`
const ButtonContainer = styled.span`
`
const handleClose = () => { 
    setAnnState(false)
}
const Announcment = () => {
    return (
        <div></div>
    )
}

export default Announcment
