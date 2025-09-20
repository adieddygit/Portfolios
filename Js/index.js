const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const social = document.getElementById("social");

function toggleMenu() {
  const isOpen = menu.classList.contains("translate-y-0");

  if (isOpen) {
    // Close
    menu.classList.add("-translate-y-full");
    menu.classList.remove("translate-y-0");
    overlay.classList.add("hidden");
    menuBtn.innerHTML = "&#9776;";
    menuBtn.style.color = "#818cf8"; // hamburger
  } else {
    // Open
    menu.classList.remove("-translate-y-full");
    menu.classList.add("translate-y-0");
    overlay.classList.remove("hidden");
    menuBtn.innerHTML = "✕"; // close (X)
  }
}

// To remove social handles @ screen <= 768
function toggleSocial() {
  if (window.innerWidth < 768) {
    social.classList.add("hidden");
  } else {
    social.classList.remove("hidden");
  }
}

window.addEventListener("resize", toggleSocial);
toggleSocial(); // run once on page load

menuBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// Close when clicking a menu link
document.querySelectorAll("#menu a").forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

// Auto-close when resizing to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    menu.classList.add("-translate-y-full");
    menu.classList.remove("translate-y-0");
    overlay.classList.add("hidden");
    menuBtn.innerHTML = "&#9776;";
  }
});

const links = document.querySelectorAll("nav a");
links.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("text-indigo-400", "font-bold");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section"); // all sections with IDs
  const navLinks = document.querySelectorAll("nav a, #menu a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove active styles from all links
          navLinks.forEach((link) =>
            link.classList.remove("text-indigo-400", "font-bold")
          );

          // Highlight the current section link
          const activeLink = document.querySelector(
            `a[href="#${entry.target.id}"]`
          );
          if (activeLink) {
            activeLink.classList.add("text-indigo-400");
          }
        }
      });
    },
    { threshold: 0.6 } // 60% of section visible = active
  );

  sections.forEach((section) => observer.observe(section));
});

document.addEventListener("DOMContentLoaded", () => {
  // Find all sections that have an id
  const sections = Array.from(document.querySelectorAll("section[id]"));
  // Mobile menu links (your dropdown has id="menu")
  const mobileLinks = Array.from(document.querySelectorAll("#menu a"));

  // quick safety checks
  if (!sections.length) {
    console.warn("Scrollspy: no <section id='...'> elements found.");
    return;
  }
  if (!mobileLinks.length) {
    console.warn("Scrollspy: no mobile links found (#menu a).");
    return;
  }

  let observer = null;

  function createObserver() {
    // disconnect previous observer if any
    if (observer) observer.disconnect();

    // try to account for a fixed header height (so section detection ignores header overlay)
    const header = document.querySelector(".fixed, header"); // best-effort
    const headerHeight = header ? header.getBoundingClientRect().height : 0;

    const options = {
      root: null,
      // shift top boundary down by headerHeight so the section's top under the header counts correctly
      rootMargin: `-${headerHeight}px 0px -40% 0px`,
      threshold: [0.25, 0.5, 0.75],
    };

    observer = new IntersectionObserver((entries) => {
      // Only consider entries that are intersecting
      const visible = entries.filter((e) => e.isIntersecting);
      if (visible.length === 0) return;

      // pick the entry with the largest intersectionRatio (most visible)
      visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      const topEntry = visible[0];
      const id = topEntry.target.id;

      // update mobile menu links
      mobileLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (!href) return;
        if (href === `#${id}`) {
          link.classList.add("text-indigo-400");
        } else {
          link.classList.remove("text-indigo-400");
        }
      });
    }, options);

    // observe each section
    sections.forEach((s) => observer.observe(s));
  }

  function enableScrollspyIfMobile() {
    // disconnect if desktop
    if (window.innerWidth > 768) {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      // remove mobile-only active classes (so desktop is unaffected)
      mobileLinks.forEach((link) => link.classList.remove("text-indigo-400"));
      return;
    }

    // create observer for mobile
    createObserver();
  }

  // run on load
  enableScrollspyIfMobile();

  // handle resizes (debounced)
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(enableScrollspyIfMobile, 150);
  });
});
