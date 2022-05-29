// Fetch data from our backend server. Convert into json format

import { ITask } from "../interfaces/interface";
const BASE_URL = "http://localhost:8080/todos";

export const fetchData = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
};

export const addNewTask = async (task: ITask) => {
    fetch(BASE_URL, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    });
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
};

// export const deleteTask = async (id: number) => {
//     fetch(`${BASE_URL}/${id}`, {
//         method: "DELETE",
//     });
//     await fetchData();
// };
