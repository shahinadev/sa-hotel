import React from "react";
import "./Reviews.css";
const Reviews = () => {
  return (
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2>Testimonials</h2>
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            {/* <!-- Carousel indicators --> */}
            <ol class="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            {/* <!-- Wrapper for carousel items --> */}
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="img-box">
                  <img src="https://i.ibb.co/6BgVGXF/team-1.png" alt="" />
                </div>
                <p class="testimonial">
                  This is our first trip ever since Pandemic hits the world. We
                  miss Bali so much and decided to make this trip as our wedding
                  anniversary trip that has been delayed 2 years (just us no
                  kids). Mandapa has always been on my bucket list and that is
                  why our number one destination. When we arrived, we are in awe
                  on Mandapa’s lobby. The lush of Ubud is displayed perfectly.
                  By the first sight I can tell that the resort is traditionally
                  beautiful and blend perfectly with the nature that surround
                  it. Mandapa team has been kindly enough to upgrade the our
                  room to River front pool villa. They escort us to the villa
                  and double its surprise, they have arranged beautiful flowers
                  to celebrate our anniversary and gave us a chocolate cake. The
                  team really make sure that we experienced…
                </p>
                <p class="overview">
                  <b>Tabasum Khan</b>, Seo Analyst
                </p>
              </div>
            </div>
            {/* <!-- Carousel controls --> */}
            <a
              class="carousel-control-prev"
              href="#myCarousel"
              data-slide="prev"
            >
              <i class="fa fa-angle-left"></i>
            </a>
            <a
              class="carousel-control-next"
              href="#myCarousel"
              data-slide="next"
            >
              <i class="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
