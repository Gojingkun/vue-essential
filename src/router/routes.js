export default [
    {
        path: '/auth/register',
        name: 'Register',
        component: () => import('@/views/auth/Register')
    },
    {
        path: '/',
        name: 'Home',
        alias: '/topics',
        component: () => import('@/views/Home')
    },
    {
        path: '*',
        redirect: '/'
    },
    {
        path: '/auth/login',
        name: 'Login',
        component: () => import('@/views/auth/Login')
    },
    // 编辑资料路由
    {
        path: '/users/edit',
        component: () => import('@/views/users/Edit.vue'),
        children: [
            {
                path: '',
                name: 'EditProfile',
                component: () => import('@/views/users/Profile.vue'),
                meta: { auth: true }
            },
            {
                path: '/users/edit_avatar',
                name: 'EditAvatar',
                component: () => import('@/views/users/Avatar'),
                meta: { auth: true }
            },
            {
                path: '/users/edit_password',
                name: 'EditPassword',
                component: () => import('@/views/users/Password'),
                meta: { auth: true }
            }
        ]
    },
    {
        path: '/articles/create',
        name: 'Create',
        component: () => import('@/views/articles/Create'),
        meta: { auth: true }
    },
    {
        path: '/articles/:articleId/edit',
        name: 'Edit',
        component: () => import('@/views/articles/Create'),
        meta: { auth: true }
    },
    // Search
    {
        path: '/search',
        name: 'Search',
        component: () => import('@/views/Search')
    },
    {
        path: '/my/:userId',
        component: () => import('@/views/articles/Column'),
        children: [
            {
                path: '',
                name: 'Column',
                component: () => import('@/views/articles/List.vue')
            },
            {
                path: '/articles/:articleId/content',
                name: 'Content',
                component: () => import('@/views/articles/Content.vue')
            }
        ]
    },
]
