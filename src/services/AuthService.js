import ApiService from './ApiService'

export async function apiSignIn (data) {

    return ApiService.fetchData({
        url: '/Login',
        method: 'post',
        data
       
    })

}

export async function apiGetProfile (data) {

    return ApiService.fetchData({
        url: '/Profile/Me',
        method: 'get',
        data
       
    })

}
export async function apiSignUp (data) {
    return ApiService.fetchData({
        url: '/sign-up',
        method: 'post',
        data
    })
}

export async function apiSignOut (data) {
    return ApiService.fetchData({
        url: '/sign-out',
        method: 'post',
        data
    })
}

export async function apiForgotPassword (data) {
    return ApiService.fetchData({
        url: '/ForgotPassword',
        method: 'post',
        data
    })
}
export async function apiSaveProfile (data) {
    return ApiService.fetchData({
        url: '/Profile/Save',
        method: 'post',
        data
    })
}

export async function apiChangePassword (data) {
    return ApiService.fetchData({
        url: '/ChangePassword',
        method: 'post',
        data
    })
}

export async function apiResetPassword (data) {
    return ApiService.fetchData({
        url: '/reset-password',
        method: 'post',
        data
    })
}
