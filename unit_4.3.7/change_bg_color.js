const body = document.getElementsByTagName("body")[0];

document.addEventListener("mousemove", (evt) => {
  const color1 = Math.round((evt.clientX * 255) / window.innerWidth);
  const color2 = Math.round((evt.clientY * 255) / window.innerHeight);
  body.style.backgroundColor = `rgb(${color1},0,${color2})`;
});
