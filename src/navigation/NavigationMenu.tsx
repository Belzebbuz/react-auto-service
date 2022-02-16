import { styled } from '@mui/material/styles';
import React, { useState } from 'react'
import { ReactElement } from 'react-markdown/lib/react-markdown';
import { Route, Switch } from 'react-router-dom';
import routes from '../route-config';
import SideMenu from './SideMenu'
import TopBar from './TopBar'

export default function NavigationMenu() {

    return (
        <>
            <TopBar/>
            <SideMenu/>
        </>
    )
}