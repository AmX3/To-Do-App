// Fetch data from our backend server. Convert into json format

export const fetchData = async () => {
    const BASE_URL = "http://localhost:8080/todos";
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
};

export const addNewTask = async () => {
    fetchData(),
        {
            method: "POST",
            mode: "cors",
            body: "JSON.stringify(jsonData)",
        };
};
