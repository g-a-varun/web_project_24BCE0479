document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  let base = "";

  if (path.includes("/assignments/") || path.includes("/tasks/")) {
    base = "..";
  } else {
    base = ".";
  }

  fetch(base + "/components/navbar.html")
    .then(res => res.text())
    .then(data => {
      const updated = data.replace(/%BASE%/g, base);
      document.getElementById("navbar").innerHTML = updated;

      // 🔥 HANDLE HASH SCROLL (IMPORTANT)
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    });
});