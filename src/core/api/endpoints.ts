export const ENDPOINTS = {
    AUTH: {
        REGISTER: '/auth/register',
        LOGIN: '/auth/login',
        FORGOT_PASSWORD: '/auth/forgot-password',
        VERIFY_TOKEN: '/auth/verify-reset-token',
        RESET_PASSWORD: '/auth/reset-password',
    },
    USER: {
        GET_USER: '/user/profile',
        UPDATE_USER: '/user/profile',
        CHANGE_PASSWORD: '/user/profile/change-password',
        DEACTIVATE_ACCOUNT: '/user/profile',
    },
    PREFERENCES: {
        GET: '/user/preferences',
        UPDATE: '/user/preferences',
        RESET: '/user/preferences/reset',
    },
    READINGS: {
        GET_ALL: '/readings',
        CREATE: '/readings',
    },
};