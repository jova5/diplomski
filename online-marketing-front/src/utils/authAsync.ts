import {setLogIn} from "../stores/authStore";
import {User} from "../dto/User";

async function loginAsync(username: string, password: string): Promise<User> {
  return await fetch(`http://127.0.0.1:8080/auth/login?username=${username}&password=${password}`, {method: 'POST',})
    .then(res => {
      if (res.ok) {
        setLogIn(true)
        return res.json()
      }
    })
    .then(data => {
      return data;
    });
}

export {loginAsync};
