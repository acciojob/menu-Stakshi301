import { useState } from "react";
import "./Menu.css";

const Menu = () => {
  const menuitems = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://plus.unsplash.com/premium_photo-1672363353897-ae5a81a1ab57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmYXN0fGVufDB8fDB8fHww",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://plus.unsplash.com/premium_photo-1672242676674-f4349cc6470e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bHVuY2h8ZW58MHx8MHx8fDA%3D",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hha2VzfGVufDB8fDB8fHww",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://plus.unsplash.com/premium_photo-1672363353897-ae5a81a1ab57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmYXN0fGVufDB8fDB8fHww",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://plus.unsplash.com/premium_photo-1672242676674-f4349cc6470e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bHVuY2h8ZW58MHx8MHx8fDA%3D",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://images.unsplash.com/photo-1660715683649-e381e56eb07a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hha2VzfGVufDB8fDB8fHww",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://plus.unsplash.com/premium_photo-1672363353897-ae5a81a1ab57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmYXN0fGVufDB8fDB8fHww",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "https://plus.unsplash.com/premium_photo-1672242676674-f4349cc6470e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bHVuY2h8ZW58MHx8MHx8fDA%3D",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "https://images.unsplash.com/photo-1660715683649-e381e56eb07a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hha2VzfGVufDB8fDB8fHww",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems =
    selectedCategory === "all"
      ? menuitems
      : menuitems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <div>
        <div className="Menu_categories_container">
          <button 
            className="Menu_categories"
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>
          <button id="filter-btn-1"
            className="Menu_categories"
            onClick={() => setSelectedCategory("breakfast")}
          >
            Breakfast
          </button>
          <button id="filter-btn-2"
            className="Menu_categories"
            onClick={() => setSelectedCategory("lunch")}
          >
            Lunch
          </button>
          <button id="filter-btn-3"
            className="Menu_categories"
            onClick={() => setSelectedCategory("shakes")}
          >
            Shakes
          </button>
        </div>
        <div className="menu_container">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-item">
              <img src={item.img} alt={item.title} />
              <div className="heading_price_container">
                <h4 className="heading">{item.title}</h4>
                <p className="price">$ {item.price}</p>
              </div>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
