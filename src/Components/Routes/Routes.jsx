import React, { Component } from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Body from '../Body/Body';
import HomeBody from '../HomeBody/HomeBody';
import AllApps from '../AllApps/AllApps';

import Instalation from '../Installation/Installation';
import Installation from '../Installation/Installation';
import AppDetails from '../AppDetails/AppDetails';
import NotFound from '../NotFound/NotFound';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Body,

        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('/trendingAppData.json'),
                Component: HomeBody
            },
            {
                path: '/apps',
                loader: () => fetch('/allAppData.json'),
                Component: AllApps
            },
            {
                path: '/installation',
                loader: () => fetch('/allAppData.json'),
                Component: Installation
            },
            {
                path: '/details/:id',
                loader: () => fetch('/allAppData.json'),
                Component: AppDetails
            },
            {
                path: '*',
                Component: NotFound
            }

        ]
    },
    {

    }
]);
