
import {queryBuilder} from './queryBuilder.js';

export async function callApi () {
  console.log("pingging");
  
  const api = "https://im-jira-api.herokuapp.com";
  const endpoint = queryBuilder();
  const response = await fetch(`${api}/${endpoint}`);
  const body = await response.json();
  
  console.log(body);

  if (response.status !== 200) throw Error(body.message);
  return body;
}
