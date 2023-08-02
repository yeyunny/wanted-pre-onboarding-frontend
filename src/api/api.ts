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
