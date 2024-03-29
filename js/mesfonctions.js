$(document).ready(function () {
  /**
   * Smooth scrolling to page anchor on click
   **/
  $("a[href*='ancre01']:not([href='ancre01'])").click(function () {
    if (location.hostname == this.hostname && this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({ scrollTop: anchor.offset().top }, 1000);
      }
    }
  });

  // Display current year
  const currentYearContainer = document.querySelector(".current-year");
  currentYearContainer.appendChild(document.createTextNode(new Date().getFullYear()));
});
