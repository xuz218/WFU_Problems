<template>
    <body>
        <div class="loginbox">
            <form class="formbox" action="signup.inc.php" method="post">
                <div class="inputbox">
                    <label for="id">Username</label>
                    <input type="text" name="uid">
                </div>

                <div class="inputbox">
                    <label for="id">Email</label>
                    <input type="Email" name="email">
                </div>

                <div class="inputbox">
                    <label for="id">Password </label>
                    <input type="password" name="pwd">
                </div>

                <div class="inputbox">
                    <label for="id">Re-enter Password </label>
                    <input type="password" name="pwdRepeat">
                </div>

                <div class="buttons">
                    <div><button @click="goToMainPage">Submit</button></div>
                </div>
            </form>

        </div>
    </body>
</template>

<script>
import {useRouter} from 'vue-router';
export default {
    setup(){
        const router = useRouter();
        function goToMainPage(){
            router.push('/')
        }
        return{
            goToMainPage
        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(https://xiyanhua125.com/photos/img2.JPG) no-repeat;
    height: 100vh;
    width: 100vw;
    background-size: cover;

}

.loginbox {
    display: flex;
    border-radius: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 450px;
    width: 350px;
    

    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    background: rgba(50, 50, 50, 0.3);
}


.loginbox .formbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 10px;
}

.loginbox .formbox .inputbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 10px;
}

.loginbox .formbox .inputbox>label {
    margin-bottom: 5px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 15px;
}

.loginbox .formbox .inputbox>input {
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

.loginbox .formbox .inputbox>input:focus {
    border: 1px solid rgba(255, 255, 255, 0.8);
}

.loginbox .formbox .buttons {
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}


.loginbox .formbox .buttons>div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding-left: 35px;
}

.loginbox .formbox .buttons>div>button {
    width: 200px;
    height: 35px;
    border: 1px solid rgba(125, 185, 182, 0.8);
    background: rgba(125, 185, 182, 0.5);
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
    border-radius: 5px;
    transition: 0.2s;
}


.loginbox .formbox .buttons>div>button:nth-of-type(2) {
    margin-left: 10px;
}

.loginbox .formbox .buttons>div>button:hover {
    border: 1px solid rgba(248, 108, 76, 0.8);
    background: rgba(248, 108, 76, 0.5);
}
</style>
