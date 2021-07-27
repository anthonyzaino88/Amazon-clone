import React from "react";
import "./Home.css";
import Product from "./Product";
import { sizing } from "@material-ui/core";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/TomorrowWar/TWAR_2021_GWBleedingHero_1500x600_GlowChrisSoloNoGun_TH_Post_1PV_en-US_ARSDE._CB666380843_.jpg"
          alt="home"
        />

        <div className="home__row">
          <Product
            id="12345678"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={14.59}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={4}
          />
          <Product
            id="87654321"
            title="KitchenAid Professional 600 Series KP26M1XER Bowl-Lift Stand Mixer, 6 Quart"
            price={799.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71VWBr-PjfL._AC_SL1280_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="21345678"
            title="Fire TV Stick 4K | Dolby Vision"
            price={49.99}
            image="https://belk.scene7.com/is/image/Belk?layer=0&src=8100705_B07YNLBS7R_A_001&$DWP_PRODUCT_PDP_LARGE$"
            rating={4}
          />
          <Product
            id="87654321"
            title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con"
            price={299.0}
            image="http://s.pacn.ws/640/s6/nintendo-switch-neon-blue-neon-red-507017.6.jpg?ok88z2"
            rating={5}
          />
          <Product
            id="87654321"
            title="$10 PlayStation Store Gift Card [Digital Code]"
            price={10.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61-BT%2BTBduS._SX522_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="87654321"
            title="Costzon Inflatable Bounce House, 7 in 1 Mighty Pool Slide, 
            Bouncer w/Climbing Wall, Basketball Rim, Splash Pool, Water Cannon, 
            "
            price={679.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Xs5RcIuaL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
