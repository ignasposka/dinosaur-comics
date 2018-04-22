const textAreaHandler =  e => {
    let classList = e.target.classList;
    if (e.target.value) {
      if (!classList.contains("invisible")) {
        classList.add("invisible");
      }
    } else if (classList.contains("invisible")) classList.remove("invisible");
  };

  export default textAreaHandler;