const textAreaHandler = e => {
  let classList = e.target.classList;
  if (e.data) {
    if (!classList.contains("invisible")) {
      classList.add("invisible");
    }
  } else if (classList.contains("invisible")) classList.remove("invisible");
};

(() => {
  let textAreas = document.querySelectorAll("textarea");
  textAreas.forEach(ta => ta.addEventListener("input", textAreaHandler));
})();
