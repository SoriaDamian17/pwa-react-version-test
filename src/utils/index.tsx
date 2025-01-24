export const REACT_ENV = (window._env_ ?? process.env)
export const SW_INIT = 'SW_INIT';
export const SW_UPDATE = 'SW_UPDATE';

export const isProd = (process.env.REACT_APP_ENV === 'production' || localStorage.getItem('restaurantID'))
