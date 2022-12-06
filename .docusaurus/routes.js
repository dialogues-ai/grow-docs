import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/grow-docs/markdown-page',
    component: ComponentCreator('/grow-docs/markdown-page', 'e0d'),
    exact: true
  },
  {
    path: '/grow-docs/docs',
    component: ComponentCreator('/grow-docs/docs', '677'),
    routes: [
      {
        path: '/grow-docs/docs/frequent-errors',
        component: ComponentCreator('/grow-docs/docs/frequent-errors', '730'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/introduction/access_grow',
        component: ComponentCreator('/grow-docs/docs/introduction/access_grow', '572'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/introduction/welcome',
        component: ComponentCreator('/grow-docs/docs/introduction/welcome', '3bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/privacy_policy',
        component: ComponentCreator('/grow-docs/docs/privacy_policy', '702'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/setup/advanced/create-graph',
        component: ComponentCreator('/grow-docs/docs/setup/advanced/create-graph', '631'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/setup/advanced/create-snapshot',
        component: ComponentCreator('/grow-docs/docs/setup/advanced/create-snapshot', '387'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/setup/create-account',
        component: ComponentCreator('/grow-docs/docs/setup/create-account', '9e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/setup/create-post',
        component: ComponentCreator('/grow-docs/docs/setup/create-post', '21a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/grow-docs/docs/tips',
        component: ComponentCreator('/grow-docs/docs/tips', 'db4'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/grow-docs/',
    component: ComponentCreator('/grow-docs/', '5d3'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
