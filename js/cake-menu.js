const menu = [
  {
    id: 1,
    title: "black forest",
    category: "pastry",
    price: 2.99,
    value: "NJ38VRPEJNEUJ",
    img: "./images/cake1.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "dutch truffle",
    category: "pastry",
    price: 2.99,
    value: "Q5LNX9TCHNCX4",
    img: "./images/cake2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings . Marfa thundercats `,
  },
  {
    id: 3,
    title: "red velvet",
    category: "pastry",
    price: 3.49,
    value: "7J58SRCRN2ALW",
    img: "./images/cake3.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "stripy cake",
    category: "chiffon-cake",
    price: 10.99,
    value: "M7EXTZLPPDK9N",
    img: "./images/cake4.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "cushion cake",
    category: "chiffon-cake",
    price: 10.99,
    value: "L5D6HFP9DXMMA",
    img: "./images/cake5.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "tesla - tall n fancy",
    category: "chiffon-cake",
    price: 10.99,
    value: "3Z9TKAHRY8NBJ",
    img: "./images/cake6.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "dark sensation",
    category: "exotic-cake",
    price: 12.99,
    value: "FXWKGZKUUTBP8",
    img: "./images/cake7.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud  put a bird `,
  },
  {
    id: 8,
    title: "dutch chocolate cake",
    category: "exotic-cake",
    price: 12.99,
    value: "2GAKQ6VT54BBQ",
    img: "./images/cake8.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "choco mine tall n fancy",
    category: "chiffon-cake",
    price: 10.99,
    value: "EHLCJY9X6D6ES",
    img: "./images/cake9.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "choco ice tall n fancy",
    category: "chiffon-cake",
    price: 8.99,
    value: "7KB2NM3Z8WJFL",
    img: "./images/cake10.jpg",
    desc: `skateboard fam synth authentic semiotics. carry squid palo santo leggings. edison bulb crucifix microdosing.`,
  },
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
