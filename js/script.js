const menu_icon = document.querySelector(".menu_icon");
const block_heart = document.querySelector("body");
const colors_items = document.querySelector(".colors_items");
const block1_search = document.querySelector(".block1_search");
const product_form = document.querySelector(".product_form");

if (menu_icon) {
  const menu_body = document.querySelector(".menu_body");
  menu_icon.addEventListener("click", function (e) {
    document.body.classList.toggle("hidden");
    menu_body.classList.toggle("block");
    menu_icon.classList.toggle("active");
    menu_body.classList.toggle("active");
  });
}

if (block_heart) {
  block_heart.addEventListener("click", function heart(event) {
    if (event.target.classList.contains("bi")) {
      if (event.target.classList.contains("bi-heart")) {
        event.target.classList.remove("bi-heart");
        event.target.classList.add("bi-heart-fill");
      } else {
        event.target.classList.remove("bi-heart-fill");
        event.target.classList.add("bi-heart");
      }
    }
  });
}

if (colors_items) {
  colors_items.addEventListener("click", function change_color(event) {
    if (event.target.classList.contains("colors_item")) {
      Array.from(colors_items.querySelectorAll("div")).forEach((i) => {
        i.classList.add("select");
      });
    }
  });

  const open = document.querySelector(".event");
  const close = document.querySelector(".close");

  open.addEventListener("click", function (e) {
    product_form.classList.toggle("hidden");
  });
  close.addEventListener("click", function (e) {
    product_form.classList.toggle("hidden");
  });
}

if (document.querySelector(".block1")) {
  const block1_input = document.querySelector(".block1_input");
  block1_search.addEventListener("click", function (e) {
    block1_input.classList.toggle("hidden");
  });
}

$(function () {
  $(".products_scroll").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
