import "./main.min.js";
import "./common.min.js";
if (isMobile.any()) {
  const workItems = document.querySelectorAll(".item-work");
  workItems.forEach((item) => {
    item.addEventListener("click", function(e) {
      if (!item.classList.contains("_hover")) {
        e.preventDefault();
        workItems.forEach((el) => el.classList.remove("_hover"));
        item.classList.add("_hover");
      }
    });
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".item-work")) {
      workItems.forEach((el) => el.classList.remove("_hover"));
    }
  });
}
