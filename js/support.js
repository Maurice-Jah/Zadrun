var faq = document.getElementsByClassName("faq__faq-question");
var i;

var len = faq.length;

for (i = 0; i < len; i++) {
  faq[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
}
