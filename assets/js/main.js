//ĐIỂM ĐẠI HỌC
const benchmarks = document.querySelector("#benchmarks");
const evenOutput = document.querySelector(".even-number");
const oldOutput = document.querySelector(".old-number");
const resultSubmit = document.querySelector("#daihoc-button");
const exciseInner = document.querySelector("#exercises-box");
const menuExercises = document.querySelectorAll(".exercise");
const readMores = document.querySelectorAll(".summary-title");
const readMorecontents = document.querySelectorAll(".summary-list");

readMores.forEach((e, index) => {
  e.addEventListener("click", () => {
    for (let i = 0; i < readMores.length; i++) {
      if (index == i) {
        readMorecontents[i].classList.toggle("open");
      }
    }
  });
});

function numberActive() {
  for (let menuExercise of menuExercises) {
    menuExercise.classList.remove("active");
  }
  this.classList.add("active");
}

function innerResult() {
  let oldNumber = "";
  let evenNumber = "";
  for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
      evenNumber += i + " ";
    } else {
      oldNumber += i + " ";
    }
  }
  evenOutput.innerText = "Số chẵn:  " + evenNumber;
  oldOutput.innerText = "Số lẻ:  " + oldNumber;
}

resultSubmit.addEventListener("click", innerResult);

//TIỀN CÁP

const userType = document.querySelector("#type-user");
const userId = document.querySelector("#user-id");
const userChannel = document.querySelector(".channels");
const userConnect = document.querySelector(".connect");
const tiencapButton = document.querySelector("#tiencap-button");
const resultTienCap = document.querySelector("#result-tiencap");
const popularFee = 4.5;
const businessFee = 15;
const popularChannel = 7.5;
const businessChannel = 50;
const popularBasic = 20.5;
const first10Connect = 75;
const businessConnect = 5;

function tinhtienCap() {
  let numberCount = 0;
  for (let i = 0; i <= 1000; i++) {
    if (i % 3 == 0) {
      numberCount += 1;
    }
  }
  resultTienCap.innerText =
    "Số chia hết cho 3 nhỏ hơn 1000:   " + numberCount + " số";
}

tiencapButton.addEventListener("click", tinhtienCap);

const exerciseNumbers = document.querySelectorAll(".exercises-content");
menuExercises.forEach((e, index) => {
  e.addEventListener("click", numberActive);
  e.addEventListener("click", () => {
    for (let i = 0; i < exerciseNumbers.length; i++) {
      if (index == i) {
        exerciseNumbers[i].classList.add("open");
      } else {
        exerciseNumbers[i].classList.remove("open");
      }
    }
  });
});

// TIỀN THUẾ

const userIncome = document.querySelector(".income");
const userName = document.querySelector("#user-name");
const dependentPerson = document.querySelector(".people");
const tienthueButton = document.querySelector("#tienthue-button");
const resultTienThue = document.querySelector("#result-tienthue");
const dependentCost = 1.6e6;
const moneyOffset = 4e6;

function tienThue() {
  let minNumber;
  let sumNumber = 0;
  for (let i = 0; i < 10000; i++) {
    sumNumber += i;
    if (sumNumber > 10000) {
      minNumber = i;
      break;
    }
  }
  resultTienThue.innerText = "Số nguyên dương nhỏ nhất: " + minNumber;
}

tienthueButton.addEventListener("click", tienThue);

//TIỀN ĐIỀN

const userNameElectric = document.querySelector("#user-name2");
const electricNumber = document.querySelector(".electric-number");
const electricButton = document.querySelector("#tiendien-button");
const resultTienDien = document.querySelector("#result-tiendien");
const first50Kwh = 500;
const second50Kwh = 650;
const third50Kwh = 850;
const fourth50Kwh = 1100;
const remainKwh = 1300;
const first50KwhCost = first50Kwh * 50;
const second50KwhCost = second50Kwh * 50;
const third50KwhCost = third50Kwh * 100;
const fourth50KwhCost = fourth50Kwh * 150;

function electricBill() {
  let nNumber = Number(electricNumber.value);
  let xNumber = Number(userNameElectric.value);
  let sumNumber = 0;
  for (let i = 1; i <= nNumber; i++) {
    sumNumber += xNumber ** i;
  }
  resultTienDien.innerText = "Tổng: " + sumNumber;
}

electricButton.addEventListener("click", electricBill);
electricNumber.addEventListener("keyup", (e) => {
  if (e.key == 13) {
    electricBill;
  }
});

// GIAI THỪA

const facInput = document.querySelector(".factorial-number");
const facButton = document.querySelector("#factorial-button");
const facResult = document.querySelector("#result-factorial");

function factorialNum() {
  let facNumber = Number(facInput.value);
  let facTotal = 1;
  for (let i = 1; i <= facNumber; i++) {
    facTotal *= i;
  }
  facResult.innerText = "Giai thừa:   " + facTotal;
}

facButton.addEventListener("click", factorialNum);

// TẠO THẺ DIV

const resultDiv = document.querySelector("#result-creatdiv");
const createdivButton = document.querySelector("#creatdiv-button");

function createDiv() {
  let newDiv = [];
  for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      newDiv.push('<div class="even-div">Div chẳn</div>');
    } else {
      newDiv.push('<div class="odd-div">Div lẻ</div>');
    }
  }
  console.log(newDiv);
  resultDiv.innerHTML = newDiv.join("");
}

createdivButton.addEventListener("click", createDiv);

// IN SỐ NGUYÊN TỐ

const primeInput = document.querySelector(".prime-number");
const primeButton = document.querySelector("#prime-button");
const primeResult = document.querySelector("#result-prime");

function primeNumber() {
  let numberInput = primeInput.value;
  let primeArray = [];
  if (numberInput < 2) {
    primeResult.innerText = "Nhập số lớn hơn 2";
  } else {
    for (let i = 2; i <= numberInput; i++) {
      let count = 0;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
          count++;
        }
      }
      if (count == 0) {
        primeArray.push(i);
      }
    }
    primeResult.innerText = `Số nguyên tố: ${primeArray.join(" ")}`;
  }
}

primeButton.addEventListener("click", primeNumber);
