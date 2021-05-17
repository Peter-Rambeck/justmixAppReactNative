class Api {
  getData = async () => {
    const response = await fetch(
      'https://ditlevsoftware.com/tomcat/insession-sem-project/api/restaurants',
    );
    const json = await response.json();
    return json;
  };
}

export const api = new Api();
