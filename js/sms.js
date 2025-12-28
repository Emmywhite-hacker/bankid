let currentNumber = "";
let currentPlatform = "";

function randomNumber(code) {
  return code + Math.floor(100000000 + Math.random() * 900000000);
}

function getNumber() {
  const country = document.getElementById("country").value;
  const platform = document.getElementById("platform").value;

  currentPlatform = platform;
  currentNumber = randomNumber(country);

  document.getElementById("numberBox").innerText = currentNumber;
  document.getElementById("smsBox").innerText = "Waiting for code...";
  document.getElementById("codeBtn").disabled = false;
}

function requestCode() {
  document.getElementById("smsBox").innerText = "Receiving code... ⏳";

  setTimeout(() => {
    const code = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("smsBox").innerText =
      `Your ${currentPlatform} code is: ${code}`;
  }, 30000);
}

// LIVE FAKE FEED
function fakeSMS() {
  const box = document.getElementById("historyBox");
  const user = fakeUsers[Math.floor(Math.random() * fakeUsers.length)];
  const platform = platforms[Math.floor(Math.random() * platforms.length)];
  const code = Math.floor(100000 + Math.random() * 900000);
  const time = new Date().toLocaleTimeString();

  const div = document.createElement("div");
  div.className = "sms-item";
  div.innerHTML = `<b>${user}</b> received <b>${platform}</b> code <b>${code}</b> <small>(${time})</small>`;

  box.prepend(div);
  if (box.children.length > 8) box.removeChild(box.lastChild);
}

setInterval(fakeSMS, 6000);
