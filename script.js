const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

const link = document.querySelectorAll("a");

link.forEach((a) => {
  a.addEventListener("mouseover", () => {
    cursor.classList.add("link-grow");
  });
  a.addEventListener("mouseleave", () => {
    cursor.classList.remove("link-grow");
  });
});

let mouseStoppedTimeout;
document.addEventListener("mousemove", () => {
  cursor.classList.remove("mouse-stopped");
  clearTimeout(mouseStoppedTimeout);

  mouseStoppedTimeout = setTimeout(() => {
    cursor.classList.add("mouse-stopped");
  }, 1000);
});
