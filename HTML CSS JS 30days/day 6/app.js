var pushKey = document.querySelector(".btn-push");
var result = document.querySelector(".answer-box");
var resultKey = document.querySelector(".answer.key");
var resultLocation = document.querySelector(".answer.location");
var resultWhich = document.querySelector(".answer.which");
var resultCode = document.querySelector(".answer.code");
var resultCircle = document.querySelector(".circle h1");

document.body.addEventListener("keydown", function (e) {
  pushKey.classList.add("hide");
  result.classList.remove("hide");
  console.log(e);
  let keyName = e.keyCode === 32 ? "Space" : e.key;
  resultKey.innerHTML = keyName;
  resultLocation.innerHTML = e.location;
  resultWhich.innerHTML = e.which;
  resultCode.innerHTML = e.code;
  resultCircle.innerText = e.which;

  if (e.key == "") {
    resultKey.innerHTML == "space";
  }
});
