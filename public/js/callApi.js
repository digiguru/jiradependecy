
import {queryBuilder} from './queryBuilder.js';

export async function callApi (login) {
  
  const api = "https://im-jira-api.herokuapp.com";
  const endpoint = queryBuilder();
  const response = await fetch(`${api}/${endpoint}`, {
    headers: login
  });
  /*
  {
      'username': 'adam@hitched.co.uk',
      'password': 'HcRyQVSbNOQE74HADSe0A8A6'
    }
    */

  const body = await response.json();
  
  
  if (response.status !== 200) throw Error(body.message);
  
  return body;
}
