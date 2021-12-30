const token = "adminToken";
const user = "username";

// 存储token
export const setToken = value => localStorage.setItem(token, value)

export const getToken = () => localStorage.getItem(token)||true;

// 存储用户名
export const setUsername = value => localStorage.setItem(user, value)

export const getUsername = () => localStorage.getItem(user);

export const isLogin = () => !!getToken()

// 清除
export const removeToken = ()=> localStorage.removeItem(token);
export const removeUsername = () => localStorage.removeItem(user);
