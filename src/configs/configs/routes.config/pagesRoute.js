import React from 'react'
import { PAGES_PREFIX_PATH } from 'constants/route.constant'
import { ADMIN, USER ,TEACHER} from 'constants/roles.constant'

const pagesRoute = [
    {
        key: 'pages.welcome',
        path: `${PAGES_PREFIX_PATH}/welcome`,
        component: React.lazy(() => import('views/pages/Welcome')),
        authority: [ADMIN, USER,TEACHER],
    },
    {
        key: 'pages.accessDenied',
        path: '/access-denied',
        component: React.lazy(() => import('views/pages/AccessDenied')),
        authority: [ADMIN, USER,TEACHER],
    },
]

export default pagesRoute