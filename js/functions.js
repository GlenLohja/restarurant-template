document.addEventListener("DOMContentLoaded", function () {
  var pagingLinks = document.querySelectorAll(".tm-paging-link");

  pagingLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      var page = this.textContent.toLowerCase();
      var galleryPages = document.querySelectorAll(".tm-gallery-page");

      galleryPages.forEach(function (galleryPage) {
        galleryPage.classList.add("hidden");
      });

      document
        .getElementById("tm-gallery-page-" + page)
        .classList.remove("hidden");

      pagingLinks.forEach(function (pagingLink) {
        pagingLink.classList.remove("active");
      });

      this.classList.add("active");
    });
  });

  var acc = document.getElementsByClassName("accordion");

  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
});
