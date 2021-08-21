//using selectors inside the element

const questions = document.querySelectorAll(".question")

questions.forEach(function (element) {
  const btn = element.querySelector(".question-btn")
  
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== element) {
        item.classList.remove("show-text")
      }
    })
    element.classList.toggle("show-text")
  })
})

//traversing the dom

// const buttons = document.querySelectorAll(".question-btn")

// buttons.forEach(function (btn) {
//   btn.addEventListener("click", function (event) {
//     const question = event.currentTarget.parentElement.parentElement
//     question.classList.toggle("show-text")
//   })
// })