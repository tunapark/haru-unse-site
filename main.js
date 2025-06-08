window.getUnse = async function () {
  const resultDiv = document.getElementById("result");
  resultDiv.innerText = "운세를 불러오는 중...";
  try {
    const response = await fetch("https://geniepark-5g4wx9cr8-tunas-projects-45fdaad5.vercel.app/api/unse");
    const data = await response.json();
    resultDiv.innerText = data.message;
    resultDiv.style.display = "block";
  } catch (e) {
    resultDiv.innerText = "GPT API 호출에 오류가 발생했습니다. 다시 시도해주세요.";
  }
};
