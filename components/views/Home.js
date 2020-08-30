const nameOfImageAsAVariable = require("../../Images/img_nature_wide.jpg");
const nameOfImageAsAVariable1 = require("../../Images/img_mountains_wide.jpg");
const nameOfImageAsAVariable2 = require("../../Images/img_snow_wide.jpg");
export default () => `
<div class="banner-area">
  <h2>What's Your Next Project?</h2>
</div>
<div class="content-area">
  <div class="wrapper">
    <form action="">
      <h2>Discover Services</h2>
      <div class="form-box">
        <input type="text" class="search-field business" placeholder="Business, Services..">
        <input type="text" class="search-field business" placeholder="Location">
        <button class="search-btn" type="button">Search</button>
      </div>
    </form>
    </div>
    <section id="jumbotron">
    <!-- Slideshow container -->
    <div class="slideshow-container">

      <!-- Full-width images with number and caption text -->
      <div class="mySlides fade">
        <div class="numbertext">1 / 3</div>
        <img src="${nameOfImageAsAVariable}" style="width:100%">
        <div class="text">Caption Text</div>
      </div>

      <div class="mySlides fade">
        <div class="numbertext">2 / 3</div>
        <img src="${nameOfImageAsAVariable1}" style="width:100%">
        <div class="text">Caption Two</div>
      </div>

      <div class="mySlides fade">
        <div class="numbertext">3 / 3</div>
        <img src="${nameOfImageAsAVariable2}" style="width:100%">
        <div class="text">Caption Three</div>
      </div>

      <!-- Next and previous buttons -->
      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br>

    <!-- The dots/circles -->
    <div style="text-align:center">
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
      <span class="dot" onclick="currentSlide(3)"></span>
    </div>
</section>
<section id="jumbotron1">
  <h2>Services you might also like</h2>
  <a href="/Contactcard" data-naviago >Contact</a>
</section>
  </div>
`;
