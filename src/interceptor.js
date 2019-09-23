import router from '@/router';

export default (config) => {
  const configuration = { ...config };

  if (global.location.pathname !== '/login') {
    try {
      const auth = localStorage.getItem('state');
      const token = JSON.parse(auth).auth.access_token;
      if (!configuration.headers.Authorization) {
        configuration.headers.Authorization = `Bearer ${token}`;
      }
    } catch {
      router.push({ name: 'login' });
    }
  }
  return configuration;
};
