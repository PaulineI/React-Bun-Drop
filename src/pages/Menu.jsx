import React, { useState, useEffect } from "react";
import MenuItem from "../components/MenuItem";

function Menu() {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((res) => res.json())
      .then((data) => {
        const menuItems = Object.values(data);
        console.log("Fetched menu items:", menuItems);
        setMenu(menuItems);
        setFilteredMenu(menuItems);
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
      });
  }, []);

  useEffect(() => {
    console.log("Selected Category:", selectedCategory);
    console.log("Menu Items:", menu);
    if (selectedCategory === "all") {
      setFilteredMenu(menu);
    } else {
      const filteredItems = menu.filter((item) => {
        console.log("Item Category:", item.category);
        console.log(
          "Does item match selected category?",
          item.category.toLowerCase() === selectedCategory.toLowerCase()
        );
        return item.category.toLowerCase() === selectedCategory.toLowerCase();
      });
      console.log("Filtered Items:", filteredItems);
      setFilteredMenu(filteredItems);
    }
  }, [selectedCategory, menu]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="backgroundDiv">
        <h1 className="HeadMeny">Pick something to eat!</h1>
        <div className="navbarFilter">
          <h2
            className="filterh2"
            onClick={() => handleCategoryClick("burgers")}
          >
            Burgers
          </h2>
          <h2 className="filterh2" onClick={() => handleCategoryClick("sides")}>
            Sides
          </h2>
          <h2
            className="filterh2"
            onClick={() => handleCategoryClick("drinks")}
          >
            Drinks
          </h2>
          <h2
            className="filterh2"
            onClick={() => handleCategoryClick("dressing")}
          >
            Dressing
          </h2>
          <h2
            className="filterh2"
            onClick={() => handleCategoryClick("dessert")}
          >
            Desserts
          </h2>
          <h2 className="filterh2" onClick={() => handleCategoryClick("all")}>
            All
          </h2>
        </div>
        <div className="MenuContainer">
          {filteredMenu.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
