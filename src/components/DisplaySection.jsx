import React from "react";

import Pizza from "../images/food/pizza.jpg";
import Pancake from "../images/food/pancakes.jpg";
import Cake from "../images/food/cake.jpg";
import CremeRoll from "../images/food/cremeRoll.jpg";
import Breakfast from "../images/food/breakfast.jpg";
import Eggplant from "../images/food/eggplant.jpg";
import Spaghetti from "../images/food/spaghetti.jpg";
import Drink from "../images/food/drink.jpg";

function DisplaySection() {
  return (
    <section id="displaySection">
      <div className="foodDisplay">
        <h2>Classic Italian with fresh local ingredients.</h2>

        <div className="customContainer">
          <div className="row">
            <div className="column col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div className="hoverContainer">
                <img className="foodPicIMG" src={Cake} alt="cake" />
                <div className="middle">
                  <div className="hoverText">Cakes</div>
                </div>
              </div>
              <div className="hoverContainer">
                <img className="foodPicIMG" src={Pizza} alt="pizza" />
                <div className="middle">
                  <div className="hoverText">Pizzas</div>
                </div>
              </div>
            </div>

            <div className="column col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div className="hoverContainer">
                <img className="foodPicIMG" src={Eggplant} alt="eggplant" />
                <div className="middle">
                  <div className="hoverText">Italian Classics</div>
                </div>
              </div>
              <div className="hoverContainer">
                <img className="foodPicIMG" src={Drink} alt="drink" />
                <div className="middle">
                  <div className="hoverText">Alcohol</div>
                </div>
              </div>
            </div>

            <div className="column col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div className="hoverContainer">
                <img className="foodPicIMG" src={Spaghetti} alt="spaghetti" />
                <div className="middle">
                  <div className="hoverText">Itallian Pastas</div>
                </div>
              </div>
              <div className="hoverContainer">
                <img className="foodPicIMG" src={CremeRoll} alt="creme roll" />
                <div className="middle">
                  <div className="hoverText">Deserts</div>
                </div>
              </div>
            </div>

            <div className="column col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div className="hoverContainer">
                <img className="foodPicIMG" src={Pancake} alt="pancake" />
                <div className="middle">
                  <div className="hoverText">Specialty Pancakes</div>
                </div>
              </div>
              <div className="hoverContainer">
                <img className="foodPicIMG" src={Breakfast} alt="breakfast" />
                <div className="middle">
                  <div className="hoverText">Breakfast</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DisplaySection;
