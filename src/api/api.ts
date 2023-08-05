import axios from "axios";

export async function signController(
  endpoint: string,
  email: string,
  password: string
) {
  return axios.post(
    `https://www.pre-onboarding-selection-task.shop/${endpoint}`,
    {
      email,
      password,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function onCreateTodo(todo: string, token: string) {
  try {
    return axios.post(
      `https://www.pre-onboarding-selection-task.shop/todos`,
      {
        todo,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-type": "application/json",
        },
      }
    );
  } catch (e) {
    console.error(e);
  }
}

export async function onGetTodo(token: string) {
  try {
    return axios.get(`https://www.pre-onboarding-selection-task.shop/todos`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (e) {
    console.error(e);
  }
}

export async function onUpdateTodo(
  token: string,
  id: number,
  todo: string,
  isCompleted: boolean
) {
  try {
    return axios.put(
      `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
      {
        todo,
        isCompleted,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-type": "application/json",
        },
      }
    );
  } catch (e) {
    console.error(e);
  }
}

export async function onDeleteTodo(token: string, id: number) {
  try {
    return axios.delete(
      `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  } catch (e) {
    console.error(e);
  }
}
