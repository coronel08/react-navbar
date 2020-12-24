import React from 'react'

export const SidebarData = [
    {
        path: '/', /* path used as id to check which NavItem is active*/
        name: 'Home',
        css: 'fa fa-fw fa-home',
        key: 1 /* Key required or else error*/
    },
    {
        path: '/about',
        name: 'About',
        css: 'fa fa-fw fa-clock fa-spin',
        key: 2
    },
    {
        path: '/NoMatch',
        name: 'NoMatch',
        css: 'fas fa-hashtag',
        key: 3
    },
]