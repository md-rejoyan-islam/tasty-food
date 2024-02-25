const navlink = document.querySelectorAll(".nav-links");

const closeBtn = document.getElementById("closeBtn");
const openBtn = document.getElementById("openBtn");
closeBtn.addEventListener("click", () => {
  const vMenu = document.querySelector(".vertical-menu");
  vMenu.classList.toggle("show");
});
openBtn.addEventListener("click", () => {
  const vMenu = document.querySelector(".vertical-menu");
  vMenu.classList.toggle("show");
});

// if location change
// window.addEventListener("hashchange", (e) => {
//   const id = e.newURL.split("#")[1];
//   console.log(id);
//   activeLinkColorChange(id);
// });

// navlink click event
const clickEvents = navlink[0].addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    const id = e.target.href.split("#")[1];
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });

    activeLinkColorChange(id);
    // document.getElementById(id).scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "nearest",
    // });
  }
});

window.addEventListener("load", () => {
  const headingsId = document.querySelectorAll("section");

  // if location change on click color change
  const id = window.location.href.split("#")[1];
  activeLinkColorChange(id);

  const scroolEvent = document.addEventListener("scroll", (e) => {
    headingsId.forEach((ha) => {
      const rect = ha.getBoundingClientRect();

      if (rect.top > 0 && rect.top < 250) {
        // console.log(rect);
        const id = ha.id;
        history.replaceState(null, null, `#${id}`);
        activeLinkColorChange(id);
      }
    });
  });

  window.removeEventListener("scroll", scroolEvent);
});

// active link color change function
function activeLinkColorChange(id) {
  const navlink = document.querySelectorAll(".nav-links");

  Array.from(navlink[0].children).forEach((child) => {
    const children = Array.from(child.children)[0];
    if (children.href.split("#")[1] === id) {
      children.classList.add("active");
    } else {
      children.classList.remove("active");
    }
  });
  Array.from(navlink[1].children).forEach((child) => {
    const children = Array.from(child.children)[0];

    if (children.href.split("#")[1] === id) {
      children.classList.add("active");
    } else {
      children.classList.remove("active");
    }
  });
  if (id == undefined) {
    navlink[0].firstElementChild.children[0].classList.add("active");
    navlink[1].firstElementChild.children[0].classList.add("active");
  }
}
