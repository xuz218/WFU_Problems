<template>
  <div class="tabdown">
    <a href="#">
      <h1>Editor recommendations</h1>
    </a>
    <ul>
      <li>
        <a href="#/groupDemo"><img src="../../assets/index/img1.jpg"></a>
        
        <div><a href="#/groupDemo">Group 1</a></div>

      </li>
      <li>
        <img src="../../assets/index/img2.jpg" alt="">
        <div><a href="#">Group 2</a></div>
      </li>
      <li>
        <img src="../../assets/index/img4.jpg" alt="">
        <div><a href="#">Group 3</a></div>
      </li>
      <li>
        <img src="../../assets/index/img10.jpg" alt="">
        <div><a href="#">Group 4</a></div>
      </li>
      <li>
        <img src="../../assets/index/img6.jpg" alt="">
        <div><a href="#">Group 5</a></div>
      </li>
      <li>
        <img src="../../assets/index/img3.jpg" alt="">
        <div><a href="#">Group 6</a></div>
      </li>
    </ul>
  </div>

  <div class="tabdown">
    <a href="#">
      <h1>Top searches</h1>
    </a>
    <ul>
      <li>
        <img src="../../assets/index/img5.jpg" alt="">
        <div><a href="#">Group 7</a></div>

      </li>
      <li>
        <img src="../../assets/index/img7.jpg" alt="">
        <div><a href="#">Group 8</a></div>
      </li>
      <li>
        <img src="../../assets/index/img8.jpg" alt="">
        <div><a href="#">Group 9</a></div>
      </li>
      <li>
        <img src="../../assets/index/img9.jpg" alt="">
        <div><a href="#">Group 10</a></div>
      </li>
      <li>
        <img src="../../assets/index/img11.jpg" alt="">
        <div><a href="#">Group 11</a></div>
      </li>
      <li>
        <img src="../../assets/index/img12.jpg" alt="">
        <div><a href="#">Group 12</a></div>
      </li>
    </ul>
  </div>
</template>


<script>

</script>


<style scoped>
.tabdown {
  height: 20px;
  /* background-color: #FF7F50; */
  width: 1400px;
  margin: 0 auto;
  /* margin-bottom: 20px; */
}

.tabdown img {
  width: 210px;
  height: 280px;
  border-radius: 5px;
  /* 方块圆角 */
}

.tabdown li {
  float: left;
  height: 335px;
  margin-right: 20px;
}

.tabdown h1 {
  clear: both; 
  font-size: 30px;
  margin-bottom: 9px;
  text-decoration: underline;
}

.tabdown a {
  font-size: 18px;
  color: #3e3d3d;
  font-weight: bold;
}

.tabdown a:hover {
  color: coral;
}
</style>
