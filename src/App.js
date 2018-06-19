
export class App {
  callApi = async () => {
    console.log("pingging");
    const api = "https://im-jira-api.herokuapp.com/";
    const response = await fetch(`${api}/project/WED`);
    console.log(response);
    const body = await response.json();

    console.log(body);
    if (response.status !== 200) throw Error(body.message);

    return body.issues.length;
  }
}

