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

// export async function onCreateTodo({ addTodo }: { addTodo: SubmitHandler[] }) {
//   addTodo.map((item) => {
//     return axios.post(`https://www.pre-onboarding-selection-task.shop/todos`, {
//       id: item.id,
//       todo: item.todo,
//       isCompleted: item.isCompleted,
//       userId: item.userId,
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-Type": "application/json",
//       },
//     });
//   });
// }

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
