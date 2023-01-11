import {User} from "../../../dto/User";

async function getUsers(): Promise<User[]> {
  return (await fetch('http://127.0.0.1:8080/user', {method: 'GET'})).json();
}

export {getUsers};
