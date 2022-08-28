import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '40e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '495'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '801'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '1e5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '3b3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'e66'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'd67'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '3de'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '294'),
    exact: true
  },
  {
    path: '/blog/primeiro-post',
    component: ComponentCreator('/blog/primeiro-post', 'b1c'),
    exact: true
  },
  {
    path: '/blog/segundo-post',
    component: ComponentCreator('/blog/segundo-post', 'fc9'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '4fb'),
    exact: true
  },
  {
    path: '/blog/tags/anuncio',
    component: ComponentCreator('/blog/tags/anuncio', '257'),
    exact: true
  },
  {
    path: '/blog/tags/off-topics',
    component: ComponentCreator('/blog/tags/off-topics', '6cd'),
    exact: true
  },
  {
    path: '/blog/tags/progresso',
    component: ComponentCreator('/blog/tags/progresso', '09f'),
    exact: true
  },
  {
    path: '/blog/terceiro-post',
    component: ComponentCreator('/blog/terceiro-post', '4a6'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '26c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '775'),
    routes: [
      {
        path: '/docs/category/visual-novel',
        component: ComponentCreator('/docs/category/visual-novel', '632'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', '5ba'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/Visual Novel/giniro-haruka',
        component: ComponentCreator('/docs/Visual Novel/giniro-haruka', 'eee'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/Visual Novel/summer-pocket',
        component: ComponentCreator('/docs/Visual Novel/summer-pocket', 'b38'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/Visual Novel/toradora',
        component: ComponentCreator('/docs/Visual Novel/toradora', '556'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/Visual Novel/tsukihime-remeke',
        component: ComponentCreator('/docs/Visual Novel/tsukihime-remeke', '8be'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/Visual Novel/yosuga-no-sora',
        component: ComponentCreator('/docs/Visual Novel/yosuga-no-sora', 'd6c'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'cd0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
