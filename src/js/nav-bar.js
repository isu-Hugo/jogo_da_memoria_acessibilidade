class responsivoNavbar {
  constructor(responsivoMenu, navList, navLinks) {
    this.responsivoMenu = document.querySelector(responsivoMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animatedLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.responsivoMenu.classList.toggle(this.activeClass);
    this.animatedLinks();
  }

  addClickEvent() {
    this.responsivoMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.responsivoMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const ResponsivoNavbar = new responsivoNavbar(
  ".menu-responsivo",
  ".nav-list",
  ".nav-list li"
);
ResponsivoNavbar.init();
