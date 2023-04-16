<template>
  <div class="wrapper">
    <input checked type=radio name="slider" id="slide1" />
    <input type=radio name="slider" id="slide2" />
    <input type=radio name="slider" id="slide3" />
    <input type=radio name="slider" id="slide4" />
    <input type=radio name="slider" id="slide5" />

    <div class="slider-wrapper">
      
      <div class=inner>
        <article>
          <div class="suspended-word1">Recent Trends</div>
          <img
            src="https://images.sidearmdev.com/crop?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fwakeforestsports.com%2fimages%2f2022%2f11%2f11%2f221023-TB030-WSOC-vsNotreDame_HdydW.png&height=797&width=1416&type=png&gravity=smart" />
        </article>

        <article>
          <div class="suspended-word2">Recent Trends</div>
          <img src="https://prod.wp.cdn.aws.wfu.edu/sites/22/2023/04/20230323springbenson4.blog_-1.jpg" />
        </article>

        <article>
          <div class="suspended-word3">Recent Trends</div>
          <img
            src="https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/wakeforestsports.com/images/2021/9/22/unnamed_39_.jpeg" />
        </article>

        <article>
          <div class="suspended-word4">Recent Trends</div>
          <img src="https://prod.wp.cdn.aws.wfu.edu/sites/384/2020/04/desktop_night.jpg" />
        </article>

        <article>
          <div class="suspended-word5">Recent Trends</div>
          <img src="https://pbs.twimg.com/media/FAk7r48XEAMaP2i.jpg" />
        </article>
      </div>
    </div>
    <!-- .slider-wrapper -->

    <div class="slider-prev-next-control">
      <label for=slide1></label>
      <label for=slide2></label>
      <label for=slide3></label>
      <label for=slide4></label>
      <label for=slide5></label>
    </div>
    <!-- .slider-prev-next-control -->

    <div class="slider-dot-control">
      <label for=slide1></label>
      <label for=slide2></label>
      <label for=slide3></label>
      <label for=slide4></label>
      <label for=slide5></label>
    </div>
    <!-- .slider-dot-control -->
  </div>
</template>

<script>

</script>

<style scoped>
@charset "UTF-8";

.wrapper {
  width: 1500px;
  margin: 15px auto;
  position: relative;
}

.suspended-word1 {
  position: absolute; /* position the element absolutely relative to its closest positioned ancestor */
  top: 640px; 
  left: 22%; /* position it in the center horizontally */
  transform: translateX(-50%); /* center it perfectly */
  color: #fff;
  font-size: 80px;
  padding: 0.3em;
  border-radius: 5px;
  z-index: 99;
}

.suspended-word2 {
  position: absolute; /* position the element absolutely relative to its closest positioned ancestor */
  top: 640px; 
  left: 26%; /* position it in the center horizontally */
  transform: translateX(-50%); /* center it perfectly */
  color: #fff;
  font-size: 70px;
  padding: 0.3em;
  border-radius: 5px;
  z-index: 99;
}

.suspended-word3 {
  position: absolute; /* position the element absolutely relative to its closest positioned ancestor */
  top: 640px; 
  left: 28%; /* position it in the center horizontally */
  transform: translateX(-50%); /* center it perfectly */
  color: #fff;
  font-size: 80px;
  padding: 0.3em;
  border-radius: 5px;
  z-index: 99;
}

.suspended-word4 {
  position: absolute; /* position the element absolutely relative to its closest positioned ancestor */
  top: 640px; 
  left: 25%; /* position it in the center horizontally */
  transform: translateX(-50%); /* center it perfectly */
  color: #fff;
  font-size: 80px;
  padding: 0.3em;
  border-radius: 5px;
  z-index: 99;
}

.suspended-word5 {
  position: absolute; /* position the element absolutely relative to its closest positioned ancestor */
  top: 640px; 
  left: 32%; /* position it in the center horizontally */
  transform: translateX(-50%); /* center it perfectly */
  color: #fff;
  font-size: 80px;
  padding: 0.2em;
  border-radius: 5px;
  z-index: 99;
}

input {
  display: none;
}

.inner {
  width: 500%;
}

article {
  width: 20%;
  float: left;
  position: relative;
}

article img {
  height: 750px;
  margin: 0 auto;
  display: block;
}

/*---- SET UP CONTROL ----*/
.slider-prev-next-control {
  height: 50px;
  position: absolute;
  top: 50%;
  width: 100%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}

.slider-prev-next-control label {
  display: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #777777;
  opacity: 0.6;
}

.slider-prev-next-control label:hover {
  opacity: 1;
}

.slider-dot-control {
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
}

.slider-dot-control label {
  cursor: pointer;
  border-radius: 5px;
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #bbb;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  margin-right: 10px;
}

.slider-dot-control label:hover {
  background: #ccc;
  border-color: #777;
}

/* Info Box */
.info {
  position: absolute;
  font-style: italic;
  line-height: 20px;
  opacity: 0;
  color: #000;
  text-align: left;
  -webkit-transition: all 1000ms ease-out 600ms;
  -moz-transition: all 1000ms ease-out 600ms;
  transition: all 1000ms ease-out 600ms;
}


/* Slider Styling */
.slider-wrapper {
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 1px 1px 4px #666;
  background: #fff;
  background: #fcfff4;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transition: all 500ms ease-out;
  -moz-transition: all 500ms ease-out;
  transition: all 500ms ease-out;
}

.slider-wrapper .inner {
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1);
  -moz-transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1);
  transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1);
}

/*---- SET POSITION FOR SLIDE ----*/
#slide1:checked~.slider-prev-next-control label:nth-child(5)::after,
#slide5:checked~.slider-prev-next-control label:nth-child(4)::after,
#slide4:checked~.slider-prev-next-control label:nth-child(3)::after,
#slide3:checked~.slider-prev-next-control label:nth-child(2)::after,
#slide2:checked~.slider-prev-next-control label:nth-child(1)::after,
#slide5:checked~.slider-prev-next-control label:nth-child(1)::after,
#slide4:checked~.slider-prev-next-control label:nth-child(5)::after,
#slide3:checked~.slider-prev-next-control label:nth-child(4)::after,
#slide2:checked~.slider-prev-next-control label:nth-child(3)::after,
#slide1:checked~.slider-prev-next-control label:nth-child(2)::after {
  font-family: 'Courier New', Courier, monospace;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
  margin: 0;
  line-height: 38px;
  font-size: 2.5em;
  display: block;
  color: #ffffff;
}

#slide5:checked~.slider-prev-next-control label:nth-child(1)::after,
#slide4:checked~.slider-prev-next-control label:nth-child(5)::after,
#slide3:checked~.slider-prev-next-control label:nth-child(4)::after,
#slide2:checked~.slider-prev-next-control label:nth-child(3)::after,
#slide1:checked~.slider-prev-next-control label:nth-child(2)::after {
  content: ">";
  padding-left: 10px;
  padding-top: 2px;
}

#slide5:checked~.slider-prev-next-control label:nth-child(1),
#slide4:checked~.slider-prev-next-control label:nth-child(5),
#slide3:checked~.slider-prev-next-control label:nth-child(4),
#slide2:checked~.slider-prev-next-control label:nth-child(3),
#slide1:checked~.slider-prev-next-control label:nth-child(2) {
  display: block;
  float: right;
  margin-right: 5px;
}

#slide1:checked~.slider-prev-next-control label:nth-child(5),
#slide5:checked~.slider-prev-next-control label:nth-child(4),
#slide4:checked~.slider-prev-next-control label:nth-child(3),
#slide3:checked~.slider-prev-next-control label:nth-child(2),
#slide2:checked~.slider-prev-next-control label:nth-child(1) {
  display: block;
  float: left;
  margin-left: 5px;
}

#slide1:checked~.slider-prev-next-control label:nth-child(5)::after,
#slide5:checked~.slider-prev-next-control label:nth-child(4)::after,
#slide4:checked~.slider-prev-next-control label:nth-child(3)::after,
#slide3:checked~.slider-prev-next-control label:nth-child(2)::after,
#slide2:checked~.slider-prev-next-control label:nth-child(1)::after {
  content: "<";
  padding-left: 7px;
  padding-top: 2px;
}

#slide5:checked~.slider-dot-control label:nth-child(5),
#slide4:checked~.slider-dot-control label:nth-child(4),
#slide3:checked~.slider-dot-control label:nth-child(3),
#slide2:checked~.slider-dot-control label:nth-child(2),
#slide1:checked~.slider-dot-control label:nth-child(1) {
  background: #333;
}

#slide5:checked~.slider-wrapper article:nth-child(5) .info,
#slide4:checked~.slider-wrapper article:nth-child(4) .info,
#slide3:checked~.slider-wrapper article:nth-child(3) .info,
#slide2:checked~.slider-wrapper article:nth-child(2) .info,
#slide1:checked~.slider-wrapper article:nth-child(1) .info {
  opacity: 1;
}

#slide1:checked~.slider-wrapper .inner {
  margin-left: 0%;
}

#slide2:checked~.slider-wrapper .inner {
  margin-left: -100%;
}

#slide3:checked~.slider-wrapper .inner {
  margin-left: -200%;
}

#slide4:checked~.slider-wrapper .inner {
  margin-left: -300%;
}

#slide5:checked~.slider-wrapper .inner {
  margin-left: -400%;
}</style>