import React from 'react'
import { APP_PREFIX_PATH } from 'constants/route.constant'
import { ADMIN, USER,TEACHER } from 'constants/roles.constant'

const appsRoute = [
    {
        key: 'appsProject.dashboard',
        path: `${APP_PREFIX_PATH}/project/dashboard`,
        component: React.lazy(() => import('views/project/ProjectDashboard')),
        authority: [ADMIN, USER,TEACHER],

    },
    {
        key: 'appsProject.projectList',
        path: `${APP_PREFIX_PATH}/project/project-list`,
        component: React.lazy(() => import('views/project/ProjectList')),
        authority: [ADMIN, USER,TEACHER],
    },
    {
        key: 'appsProject.scrumBoard',
        path: `${APP_PREFIX_PATH}/project/scrum-board`,
        component: React.lazy(() => import('views/project/ScrumBoard')),
        authority: [ADMIN, USER,TEACHER],
        meta: {
            pageContainerType: 'gutterless'
        }
    },
    {
        key: 'appsProject.issue',
        path: `${APP_PREFIX_PATH}/project/issue`,
        component: React.lazy(() => import('views/project/Issue')),
        authority: [ADMIN, USER,TEACHER],
    },
    {
        key: 'appsCrm.dashboard',
        path: `${APP_PREFIX_PATH}/crm/dashboard`,
        component: React.lazy(() => import('views/crm/CrmDashboard')),
        authority: [ADMIN, USER,TEACHER],
    },
    {
        key: 'appsCrm.calendar',
        path: `${APP_PREFIX_PATH}/crm/calendar`,
        component: React.lazy(() => import('views/crm/Calendar')),
        authority: [ADMIN, USER,TEACHER],
    },
    {
        key: 'appsCrm.customers',
        path: `${APP_PREFIX_PATH}/crm/customers`,
        component: React.lazy(() => import('views/crm/Customers')),
        authority: [ADMIN, USER,TEACHER],
        meta: {
            header: 'Customers',
            
        }
    },
    {
        key: 'appsCrm.customerDetails',
        path: `${APP_PREFIX_PATH}/crm/customer-details`,
        component: React.lazy(() => import('views/crm/CustomerDetail')),
        authority:[ADMIN, USER,TEACHER],
        meta: {
            header: 'Customer Details',
            headerContainer: true
        }
    },
    // {
    //     key: 'appsCrm.mail',
    //     path: `${APP_PREFIX_PATH}/crm/mail`,
    //     component: React.lazy(() => import('views/crm/Mail')),
    //     authority: [ADMIN, USER,TEACHER],
    //     meta: {
    //         pageContainerType: 'gutterless',
    //         footer: false
    //     }
    // },
    // {
    //     key: 'appsCrm.mail',
    //     path: `${APP_PREFIX_PATH}/crm/mail/:category`,
    //     component: React.lazy(() => import('views/crm/Mail')),
    //     authority: [ADMIN, USER,TEACHER],
    //     meta: {
    //         pageContainerType: 'gutterless',
    //         footer: false
    //     }
    // },
    {
        key: 'appsSales.dashboard',
        path: `${APP_PREFIX_PATH}/sales/dashboard`,
        component: React.lazy(() => import('views/sales/SalesDashboard')),
        authority: [ADMIN, USER,TEACHER],
    },
    {
        key: 'appsSales.productList',
        path: `${APP_PREFIX_PATH}/sales/product-list`,
        component: React.lazy(() => import('views/sales/ProductList')),
        authority: [ADMIN, USER,TEACHER],
    },
    {
        key: 'appsSales.productEdit',
        path: `${APP_PREFIX_PATH}/sales/product-edit/:productId`,
        component: React.lazy(() => import('views/sales/ProductEdit')),
        authority: [ADMIN, USER,TEACHER],
        meta: {
            header: 'Edit Product',
        }
    },
    {
        key: 'appsSales.productNew',
        path: `${APP_PREFIX_PATH}/sales/product-new`,
        component: React.lazy(() => import('views/sales/AddInstitute')),
        authority: [ADMIN, USER,TEACHER],
        meta: {
            header: 'Add New Product',
        }
    },
    {
        key: 'appsSales.orderList',
        path: `${APP_PREFIX_PATH}/sales/order-list`,
        component: React.lazy(() => import('views/sales/OrderList')),
        authority: [ADMIN, USER,TEACHER],
    },
    {
        key: 'appsSales.orderDetails',
        path: `${APP_PREFIX_PATH}/sales/order-details/:orderId`,
        component: React.lazy(() => import('views/sales/OrderDetails')),
        authority: [ADMIN, USER,TEACHER],
    },
    {
        key: 'appsCrypto.dashboard',
        path: `${APP_PREFIX_PATH}/crypto/dashboard`,
        component: React.lazy(() => import('views/crypto/CryptoDashboard')),
        authority: [ADMIN, USER,TEACHER],
    },
    {
        key: 'appsCrypto.portfolio',
        path: `${APP_PREFIX_PATH}/crypto/portfolio`,
        component: React.lazy(() => import('views/crypto/Portfolio')),
        authority:[ADMIN, USER,TEACHER],
        meta: {
            header: 'Portfolio',
        }
    },
    {
        key: 'appsCrypto.market',
        path: `${APP_PREFIX_PATH}/crypto/market`,
        component: React.lazy(() => import('views/crypto/Market')),
        authority: [ADMIN, USER,TEACHER],
        meta: {
            header: 'Market',
        }
    },
    {
        key: 'appsCrypto.wallets',
        path: `${APP_PREFIX_PATH}/crypto/wallets`,
        component: React.lazy(() => import('views/crypto/Wallets')),
        authority: [ADMIN, USER,TEACHER],
        meta: {
            header: 'Wallets',
        }
    },
    {
        key: 'appsknowledgeBase.helpCenter',
        path: `${APP_PREFIX_PATH}/knowledge-base/help-center`,
        component: React.lazy(() => import('views/knowledge-base/HelpCenter')),
        authority: [ADMIN, USER,TEACHER],
        meta: {
            pageContainerType: 'gutterless',
        }
    },
    {
        key: 'appsknowledgeBase.article',
        path: `${APP_PREFIX_PATH}/knowledge-base/article`,
        component: React.lazy(() => import('views/knowledge-base/Article')),
        authority: [ADMIN, USER,TEACHER],
    },
    {
        key: 'appsknowledgeBase.manageArticles',
        path: `${APP_PREFIX_PATH}/knowledge-base/manage-articles`,
        component: React.lazy(() => import('views/knowledge-base/ManageArticles')),
        authority: [ADMIN, USER,TEACHER],
        meta: {
            header: 'Manage Articles',
            extraHeader: React.lazy(() => import('views/knowledge-base/ManageArticles/components/PanelHeader')),
            headerContainer: true
        }
    },
    {
        key: 'appsknowledgeBase.editArticle',
        path: `${APP_PREFIX_PATH}/knowledge-base/edit-article`,
        component: React.lazy(() => import('views/knowledge-base/EditArticle')),
        authority:[ADMIN, USER,TEACHER],
    },
    {
        key: 'appsAccount.settings',
        path: `${APP_PREFIX_PATH}/account/settings/:tab`,
        component: React.lazy(() => import('views/account/Settings')),
        authority: [ADMIN, USER,TEACHER],
        meta: {
            header: 'Settings',
            headerContainer: true
        }
    },
    {
        key: 'appsAccount.invoice',
        path: `${APP_PREFIX_PATH}/account/invoice/:id`,
        component: React.lazy(() => import('views/account/Invoice')),
        authority: [ADMIN, USER,TEACHER],
    },
    {
        key: 'appsAccount.activityLog',
        path: `${APP_PREFIX_PATH}/account/activity-log`,
        component: React.lazy(() => import('views/account/ActivityLog')),
        authority: [ADMIN, USER,TEACHER],
    },
    {
        key: 'appsAccount.kycForm',
        path: `${APP_PREFIX_PATH}/account/kyc-form`,
        component: React.lazy(() => import('views/account/KycForm')),
        authority: [ADMIN, USER,TEACHER],
    },
]

export default appsRoute