window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 20);
  document
    .getElementById("l1")
    .classList.toggle(
      "unfocusedLink",
      window.scrollY >= document.getElementById("project").offsetTop - 100
    );
  document
    .getElementById("l2")
    .classList.toggle(
      "focusedLink",
      window.scrollY >= document.getElementById("project").offsetTop - 100 &&
        window.scrollY <
          document.getElementById("contact").offsetTop -
            (screen.height - document.getElementById("contact").offsetHeight)
    );
  document.getElementById("l3").classList.toggle(
    "focusedLink",

    window.scrollY >=
      document.getElementById("contact").offsetTop -
        (screen.height - document.getElementById("contact").offsetHeight)
  );
});
