const wrap = document.querySelector(".images");
const images = document.querySelectorAll(".image");
const submitBtn = document.getElementById("submit");
const email = document.getElementById("email");
const message = document.getElementById("message");
const faq = document.querySelector(".faq-wrapper");
// image slider
let index = 0;
wrap.addEventListener("click", (e) => {
  if (e.target.className == "btn left") {
    if (index <= 0) {
      index = images.length - 1;
    } else {
      index--;
    }
  } else if (e.target.className == "btn right") {
    if (index >= images.length - 1) {
      index = 0;
    } else {
      index++;
    }
  }
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[index].style.display = "block";
});
images[index].style.display = "block";

//form handling
submitBtn.addEventListener("click", () => {
  let emailCheck = email.value;
  let messageCheck = message.value;
  if (validateEmail(emailCheck) && messageCheck.length > 15) {
    alert("Email dan Pesan yang dimasukkan sesuai dengan kriteria");
  } else {
    alert("Email dan Pesan yang dimasukkan tidak sesuai dengan kriteria");
  }
});

const validateEmail = (email) => {
  let key = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return key.test(email);
};

//FAQ accordion
faq.addEventListener("click", (e) => {
  if (e.target.className == "accordion") {
    if (e.target.nextElementSibling.style.display === "block") {
      e.target.nextElementSibling.style.display = "none";
    } else {
      e.target.nextElementSibling.style.display = "block";
    }
  }
});
