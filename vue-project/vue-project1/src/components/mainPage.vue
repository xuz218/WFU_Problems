<template>
    <body>
        <!-- entrance page -->
        <div id="popup" class="hidden">
            <p>Wrong email or password.</p>
        </div>

        <div class="loginbox">
            <div class="inputbox">

                <label for="id">Email</label>
                <input type="text" name="uid" v-model="username" @click="setBack">


            </div>

            <div class="inputbox">
                <label for="id">Password </label>
                <input type="password" name="password" v-model="password" @click="setBack">
            </div>

            <div class="buttons">
                <a href="#">Forget Password?</a>
                <div>

                    <button @click="goToWholePage">Login</button>

                    <button @click="goToSignup">Sign up</button>
                    <!-- <router-view></router-view> -->
                </div>

            </div>
        </div>
    </body>
    <router-view></router-view>
</template>
  
<script>
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();
        function goToSignup() {
            router.push('/signUp')
        }

        function setBack(){
            document.getElementById("popup").classList.add("hidden");
        }

        function goToWholePage() {
            const emailInput = document.querySelector('input[name="uid"]');
            const passwordInput = document.querySelector('input[name="password"]');

            const email2 = emailInput.value;
            const password2 = passwordInput.value;

            const url = 'http://18.117.181.47:8888/checklogin';
            const params = {
                email: email2,
                password: password2
            };

            const headers = {
                'Content-Type': 'application/json',
                'Referrer-Policy': 'strict-origin-when-cross-origin',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                'Access-Control-Allow-Origin': 'http://18.117.181.47:8888',
                'Content-Security-Policy': "default-src 'self' 18.117.181.47:8888; font-src 'self' https://fonts.gstatic.com",
                'Connection': 'keep-alive',
                'Host': '18.117.181.47:8888',
                'Upgrade-Insecure-Requests': 1,
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
            };

            const options = {
                method: 'GET',
                headers: headers,
                // mode: 'no-cors'
            };

            // Construct query string with URLSearchParams
            const queryParams = new URLSearchParams(params);
            const fullUrl = `${url}?${queryParams}`;

            console.log("fullUrl:", fullUrl);
            console.log("options:", options);

            fetch(fullUrl, options)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let responseData = data;
                    // do something with responseData here, for example:
                    console.log("Received response:", responseData);
                    console.log(data.response.result);
                    if (data.response.result == 1) {
                        document.userInfo = data.response.user_info;
                        router.push('/wholeBoard')
                    }
                    if (data.response.result === 0) {
                        document.getElementById("popup").classList.remove("hidden");
                    }


                })
                .catch(error => console.error(error));

        }
        return {
            goToSignup,
            goToWholePage,
            setBack
        }
    },
    data() {
        return {
            username: "",
            password: ""
        };
    },

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@charset "utf-8";

* {
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url(../assets/bg.jpg) no-repeat;
    /* background-size: cover; */
    background-size: 120%; 
    background-position: right center;

}

#popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background-color: #FFE5CA;
    color: #E74646;
    text-align: center;
    padding: 10px;
    z-index: 9999;
    font-size: 24px;
    font-weight: bold;
    /* make sure the popup appears on top of everything */
}

.hidden {
    display: none;
    margin: 0 auto;

}

/* .hidden p{
    font-size: 40px;
    font-weight: bold;
} */


.loginbox {
    display: flex;
    border-radius: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 380px;
    width: 350px;

    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    background: rgba(50, 50, 50, 0.3);
}

.loginbox .inputbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 10px;
}

.loginbox .inputbox>label {
    margin-bottom: 5px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 15px;
}

.loginbox .inputbox>input {
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
    height: 35px;
    width: 250px;
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    transition: 0.2s;
    outline: none;
    padding: 0 10px;
    letter-spacing: 1px;
}

.loginbox .inputbox>input:focus {
    border: 1px solid rgba(255, 255, 255, 0.8);
}

.loginbox .buttons {
    width: 270px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.loginbox .buttons>a {
    font-size: 15px;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.9);
    transition: 0.2s;
    width: 270px;
    text-align: end;
    margin-bottom: 20px;
}

.loginbox .buttons>a:hover {
    color: rgba(255, 255, 255, 1);
}

.loginbox .buttons>div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-flex-start;
    /* margin-top: 20px; */
}

.loginbox .buttons>div>button {
    width: 130px;
    height: 35px;
    border: 1px solid rgba(125, 185, 182, 0.8);
    background: rgba(125, 185, 182, 0.5);
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
    border-radius: 5px;
    transition: 0.2s;
}


.loginbox .buttons>div>button:nth-of-type(2) {
    margin-left: 10px;
}

.loginbox .buttons>div>button:hover {
    border: 1px solid rgba(248, 108, 76, 0.8);
    background: rgba(248, 108, 76, 0.5);
}
</style>
  