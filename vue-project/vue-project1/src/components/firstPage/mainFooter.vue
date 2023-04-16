<template>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.1/css/all.css">


    <footer class="footer">
        <div class="container">
            <div class="row footer-content">
                <div class="leftBar">
                    <h3>Follow Us</h3>
                    <ul class="social-icons">
                        <li><a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com/ZiangXu1225"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com/fuzzoooplush/"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>

                <div class="slogan"> Connecting Wake Forest's brightest minds.<br> Say goodbye to group project stress.</div>

                <div class="rightBar">
                    <h3>Contact Us</h3>
                    <ul class="contact-info">
                        <li><i class="fas fa-envelope"></i>xiyanhua125@gmail.com</li>
                        <li><i class="fas fa-phone"></i>+1 336 829 2667</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
  
<style scoped>
.footer {
    background-color: #f8f8f8;
    padding: 20px 0;
    width: 100%;
    clear: both;
}

.footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.slogan {
    display: block;
    width: 500px;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    padding-top: 30px;
    margin-bottom: 20px;
    margin: 20 auto;
    align-items: center;
}


.footer h3 {
    font-size: 20px;
    margin-bottom: 20px;
}

.leftBar{
    margin-left: 10%;
}
.social-icons li {
    display: inline-block;
    margin-right: 15px;
}

.social-icons li a {
    display: block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    color: #fff;
    background-color: #222;
}

.contact-info li {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 20px;
    color: #777;
    display: flex;
    align-items: center;
}

.rightBar{
    width: 20%;
}

.contact-info li i {
    margin-right: 10px;
    font-size: 20px;
    color: #222;
}
</style>
  