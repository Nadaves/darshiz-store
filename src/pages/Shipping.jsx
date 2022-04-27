import React from "react";
import "./Shipping.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import { useMediaQuery } from "react-responsive";

function Shipping() {
  const isMobile = useMediaQuery({ query: `(max-width: 900px)` });

  return (
    <>
      <Navbar />
      <div class="background">
        <div class="container">
          <div class="panel pricing-table">
            <div class="pricing-plan">
              <img
                src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png"
                alt=""
                class="pricing-img"
              />
              <div class="pricing-spacing">
                <h2 class="pricing-header">איסוף עצמי</h2>
                <ul class="pricing-features">
                  <li class="pricing-features-item">
                    איסוף עצמי מגבעת שמואל בתיאום מראש
                  </li>
                </ul>
              </div>
              <span class="pricing-price">₪0</span>
            </div>

            <div class="pricing-plan">
              <img
                src="https://s28.postimg.cc/ju5bnc3x9/plane.png"
                alt=""
                class="pricing-img"
              />
              <div class="pricing-spacing">
                <h2 class="pricing-header">שליח עד הבית</h2>
                <ul class="pricing-features">
                  <li class="pricing-features-item">משלוחים לכל הארץ</li>
                  <li class="pricing-features-item">עד 7 ימי עסקים*</li>
                </ul>
              </div>
              <span class="pricing-price">₪30</span>
            </div>

            <div class="pricing-plan">
              <img
                src="https://s21.postimg.cc/tpm0cge4n/space-ship.png"
                alt=""
                class="pricing-img"
              />
              <div class="pricing-spacing">
                <h2 class="pricing-header">Boxit משלוח</h2>
                <ul class="pricing-features">
                  <li class="pricing-features-item">
                    איסוף עצמי מנקודות Boxit ברחבי הארץ
                  </li>
                  <li class="pricing-features-item">עד 3 ימי עסקים </li>
                </ul>
              </div>
              <span class="pricing-price">₪20</span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-container">
        <h4>הערות</h4>
        <p class="text">
          משלוח עם שליח עד הבית ומשלוח אקספרס נעשים באמצעות ספק חיצוני. " דרשיז"
          אינה נושאת באחריות לכל עיכוב או תקלה באספקת המוצר מרגע העברת המוצר
          לחברת המשלוחים.
        </p>
        <p>
          הזמנים הרשומים מתייחסים להזמנת מוצר שנמצא במלאי. עבור מוצר שאינו
          במלאי, זמן האספקה עשוי להתארך.
        </p>
      </div>
      {isMobile ? <MobileFooter /> : <Footer />}
    </>
  );
}

export default Shipping;
