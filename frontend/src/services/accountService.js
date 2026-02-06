import api from './api';

export const getAccounts = () => api.get('/accounts');
export const addAccount = (name) => api.post('/accounts', { name });
export const transferMoney = (data) => api.post('/accounts/transfer', data);