import ApiService from "./ApiService"

export async function apiGetProjectDashboardData (params) {
    return ApiService.fetchData({
        url: '/project/dashboard',
        method: 'get',
        params
    })
}

export async function apiGetCrmDashboardData (data) {
    return ApiService.fetchData({
        url: '/crm/dashboard',
        method: 'get',
        data
    })
}


export async function apiGetCrmCalendar () {
    return ApiService.fetchData({
        url: '/crm/calendar',
        method: 'get'
    })
}

export async function apiGetCrmCustomers (data) {
    return ApiService.fetchData({
        url: '/crm/customers',
        method: 'post',
        data
    })
}
export async function apiGetCrmCustomerBooks (data) {
    return ApiService.fetchData({
        url: '/crm/customerBooks',
        method: 'post',
        data
    })
}
export async function getInstitutionsList (data) {
    return ApiService.fetchData({
        url: '/crm/institutions',
        method: 'post',
        data
    })
}
export async function getBooksList (data) {
    return ApiService.fetchData({
        url: '/crm/books',
        method: 'post',
        data
    })
}
export async function getTeachersList (data) {
    return ApiService.fetchData({
        url: '/crm/teachers',
        method: 'post',
        data
    })
}

export async function getReportList (data) {
    return ApiService.fetchData({
        url: '/crm/report',
        method: 'post',
        data
    })
}
export async function getClassesslist (data) {
    return ApiService.fetchData({
        url: '/crm/classess',
        method: 'post',
        data
    })
}
export async function apiGetCrmCustomersStatistic (params) {
    return ApiService.fetchData({
        url: '/crm/customers-statistic',
        method: 'get',
        params
    })
}

export async function apPutCrmCustomer (data) {
    return ApiService.fetchData({
        url: '/crm/customers',
        method: 'put',
        data
    })
}

export async function apiGetCrmCustomerDetails (params) {
    return ApiService.fetchData({
        url: '/crm/customer-details',
        method: 'get',
        params
    })
}

export async function apiDeleteCrmCustomer (data) {
    return ApiService.fetchData({
        url: '/crm/customer/delete',
        method: 'delete',
        data
    })
}

export async function apiGetCrmMails (params) {
    return ApiService.fetchData({
        url: '/crm/mails',
        method: 'get',
        params
    })
}

export async function apiGetCrmMail (params) {
    return ApiService.fetchData({
        url: '/crm/mail',
        method: 'get',
        params
    })
}