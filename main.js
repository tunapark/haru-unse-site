document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("generateBtn");
  const resultDiv = document.getElementById("result");

  if (!button || !resultDiv) {
    console.error("버튼 또는 결과 영역을 찾을 수 없습니다.");
    return;
  }

  button.addEventListener("click", async () => {
    resultDiv.innerText = "운세를 불러오는 중...";

    try {
      const response = await fetch("https://geniepark-5g4wx9cr8-tunas-projects-45fdaad5.vercel.app/api/unse");
      const data = await response.json();
      resultDiv.innerText = data.message;
    } catch (error) {
      console.error("에러 발생:", error);
      resultDiv.innerText = "운세를 가져오지 못했습니다.";
    }
  });
});
