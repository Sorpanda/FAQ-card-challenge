const question = document.getElementsByClassName("question");
let i;

for (i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function() {
    this.classList.toggle("active");

    const answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}