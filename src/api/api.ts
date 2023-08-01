export async function signController(
  endpoint: string,
  email: string,
  password: string
) {
  console.log(endpoint, email, password);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }), // 바디 데이터를 JSON 형식으로 변환하여 전달
  };

  try {
    const response = await fetch(
      `https://www.pre-onboarding-selection-task.shop/${endpoint}`,
      options
    );
    // 요청이 성공적으로 완료된 경우에만 처리
    if (response.ok) {
      const data = await response.json();
      console.log(data); // 성공적인 응답 데이터 처리
    } else {
      console.log("Request failed:", response.status, response.statusText);
    }
  } catch (error) {
    console.log("Error occurred:", error);
  }
}
