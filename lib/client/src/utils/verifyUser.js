import decode from 'jwt-decode';

export const isAuthenticated = () => {
  try {
    const user = decode(localStorage.getItem('token', { header: true }));
    if (user.username) {
      return {
        ok: true,
        account: user.username
      }
    }
  } catch(err) {
    return {
      ok: false
    }
  }
}


