async function loginAsync(username: string, password: string): Promise<any[]> {
  return await fetch(`http://127.0.0.1:8080/auth/login?username=${username}&password=${password}`, {method: 'POST',})
    .then(res => {
      if (res.ok)
        return res.json()
    })
    .then(data => {
      return data;
    });
}

export {loginAsync};
