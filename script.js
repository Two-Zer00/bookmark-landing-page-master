const tabs = document.querySelector(".tabs");
const tabViewer = document.querySelector(".tab-viewer");

const accordion = document.querySelectorAll(".accordion-item");

tabs.addEventListener("click", (event) => {
  event.preventDefault();
  const target = event.target;
  console.log(target);
  let index;
  target.classList.add("active");
  Array.from(tabs.children).forEach((element, i) => {
    if (element.children[0] !== target) {
      element.children[0].classList.remove("active");
    } else {
      tabViewerFunc(i);
    }
  });
});

function tabViewerFunc(index) {
  Array.from(tabViewer.children).forEach((element, i) => {
    if (i === index) {
      element.classList.add("show");
    } else {
      element.classList.remove("show");
    }
  });
}

accordion.forEach((element, index) => {
  element.addEventListener("click", (event) => {
    const target = event.target.parentElement.parentElement;
    console.log(target);
    if (target.classList.contains("accordion-item")) {
      accordion.forEach((el) => {
        console.log(el === target);
        if (el !== target) {
          el.classList.remove("show");
        } else {
          el.classList.add("show");
        }
      });
    }
  });
});

const input = document.querySelector("#contact input");
const msgError = document.querySelector("#contact .input");

console.log(msgError);

input.addEventListener("input", (event) => {
  if (!event.target.checkValidity()) {
    msgError.classList.add("show");
  } else {
    msgError.classList.remove("show");
  }
});

const menu = document.querySelector("#menu");

menu.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("show");
});
