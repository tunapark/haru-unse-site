
async function fetchUnse() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerText = "불러오는 중...";

  try {
    const response = await fetch("https://genieparkunse.vercel.app/api/unse");
    const data = await response.json();
    resultDiv.innerText = data.message;
  } catch (error) {
    resultDiv.innerText = "GPT API 호출에 오류가 발생했습니다. 다시 시도해주세요.";
  }
}
