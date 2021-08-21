const buttons = document.querySelectorAll(".question-btn")

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const question = event.currentTarget.parentElement.parentElement
    question.classList.toggle("show-text")
  })
})