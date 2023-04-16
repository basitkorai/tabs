const about = document.querySelector(".about");
const tabBtn = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove active from other buttons and add it to the clicked one.
    tabBtn.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    // remove active from other articles and add it to the corresponding one to the button.
    articles.forEach((article) => {
      article.classList.remove("active");
      if (article.id === id) {
        article.classList.add("active");
      }
    });
  }
});