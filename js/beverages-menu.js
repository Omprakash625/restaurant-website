const menu = [
  {
    id: 1,
    title: "coffee",
    category: "juice",
    price: 2.99,
    value: "3ZFANQ6QS57SC",
    img: "./images/drinks/coffee.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "soda",
    category: "juice",
    price: 2.99,
    value: "BNPNQZSPHEADS",
    img: "./images/drinks/soda.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings . Marfa thundercats `,
  },
  {
    id: 3,
    title: "tea",
    category: "tea",
    price: 3.49,
    value: "NRFJFY2KUV95E",
    img: "./images/drinks/tea.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "herbal tea",
    category: "tea",
    price: 10.99,
    value: "DX564L8XCHWKJ",
    img: "./images/drinks/herbal-tea.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "juice",
    category: "juice",
    price: 10.99,
    value: "BZR58S6VXCLTW",
    img: "./images/drinks/juice.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "water",
    category: "water",
    price: 10.99,
    value: "G8CVFNKSHGDX8",
    img: "./images/drinks/water.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  }
];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);
    return `<article class="menu-item">
              <img src=${item.img} alt=${item.title} class="photo card-img-top img-thumbnail shadow-drop-2-center" />
              <div class="item-info">
                <header>
                  <h4 class="item-title">${item.title}</h4>
                  <h4 class="price">$${item.price}
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_self">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value=${item.value} />
                  <input type="hidden" name="currency_code" value="USD" />
                  <input type="image" class= "cart" src="./images/cart.jpg" border="0" name="submit" title="Add to Cart - PayPal" alt="Add to Cart" width="35px" height="30px"/>
                </form></h4>
                </header>
                <p class="item-text">
                  ${item.desc}
                </p>
              </div>
            </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
              ${category}
            </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}

function searchitems() {
  var findval = document.getElementById("search").value;
  console.log(findval);
}
