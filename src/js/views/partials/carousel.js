class Carousel {
  init() {
    const users = document.getElementsByClassName("catalog_item");
    const userTabs = document.getElementsByClassName("user-tabs")[0];

    userTabs.children[0].classList.add("activeTab");
    userTabs.addEventListener("click", showUser);

    users[0].classList.add("activeUser");

    function showUser(e) {
      let target = e.target;

      if (target.classList.contains("user-tab")) {
        for (let i = 0; i < users.length; i++) {
          userTabs.children[i].classList.remove("activeTab");
          users[i].classList.remove("activeTab");

          if (userTabs.children[i] == target) {
            users[i].classList.add("activeUser");
          } else {
            users[i].classList.remove("activeUser");
          }
        }
        target.classList.add("activeTab");
      }
    }
  }
}

export default Carousel;
