let counter = document.querySelector("#counter");
let pause = document.querySelector("#pause");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");
const comments = document.querySelector(".comments");
const submit = document.querySelector("#submit");
const likes = document.querySelector(".likes");
let timer = true;
let number = parseInt(counter.textContent);
let obj = {};

setInterval(() => {
  if (timer === true) {
    number += 1;
    counter.textContent = number;
  }
}, 1000);

pause.addEventListener("click", () => {
  if (timer === true) {
    timer = false;
    pause.textContent = "resume";
  } else {
    timer = true;
    pause.textContent = "pause";
  }
});

minus.addEventListener("click", () => {
  number -= 1;
  counter.textContent = number;
});

plus.addEventListener("click", () => {
  number += 1;
  counter.textContent = number;
});

heart.addEventListener("click", () => {
  if (obj[number]) {
    obj[number].num++;
    obj[number].li.textContent = `${number} has ${obj[number].num} like`;
  } else {
    let li = document.createElement(`li`);
    obj[number] = { li: li, num: 1, forest: { gump: "run" } };
    console.log(obj);
    li.textContent = `${number} has 1 like`;
    likes.appendChild(li);
    console.log(li);
  }
});

submit.addEventListener("click", (e) => {
  const input = document.querySelector("#comment-input").value;
  let p = document.createElement("p");
  p.textContent = input;
  comments.appendChild(p);
  e.preventDefault();
});
