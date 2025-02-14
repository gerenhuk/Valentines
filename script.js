let noCount = 0;
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const heartText = document.getElementById("heartText");

noBtn.addEventListener("click", () => {
    noCount++;

    yesBtn.style.fontSize = `${18 + noCount * 6}px`;
    yesBtn.style.padding = `${15 + noCount * 4}px ${30 + noCount * 6}px`;

    noBtn.style.fontSize = `${18 - noCount}px`;
    noBtn.style.padding = `${15 - noCount}px ${30 - noCount * 2}px`;

    if (noCount >= 5) {
        yesBtn.classList.add("fullscreen");
        yesBtn.innerText = "Натисни мене!";
    }
});

yesBtn.addEventListener("click", () => {
    document.body.style.background = "url('space.jpg') no-repeat center";
    document.body.style.backgroundSize = "cover";
    heartText.innerText = "Ти мій всесвіт";
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
});
