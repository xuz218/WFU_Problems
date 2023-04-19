<template>
    <div class="headBar">
        <nav>
            <div class="logo">
                <a @click="goToMain">WFU Problem</a>
            </div>

            <div class="site-search">
                <!-- <form action=""> -->
                <input class="search-text" name="groupSearch" type="text" placeholder="Find your interests..." />
                <!-- <input class="submit" type="submit" value="Search" @click="searchDB" /> -->
                <!-- <input class="searchDB"  value="Search" /> -->
                <button class="searchDB" @click="searchDB">Search</button>
                <!-- </form> -->
            </div>

            <div class="menu">
                <ul>
                    <li class="navlists"><a class="navtag" @click="goToGroup">MyGroups</a></li>
                    <li class="navlists">
                        <a class="navtag" href="#">Explore</a>
                        <ul class="droplist">
                            <li class="dropContents"><a href="#">Channels</a></li>
                            <li class="dropContents"><a href="#">Groups signed</a></li>
                            <li class="dropContents"><a href="#">Interests</a></li>
                            <li class="dropContents"><a href="#">Research chance</a></li>
                            <li class="dropContents"><a href="#">Others</a></li>
                        </ul>
                    </li>

                    <li class="navlists"><a class="navtag" href="#">Contact</a></li>
                    <li class="navlists"><a class="navtag" href="#">Help</a></li>
                </ul>
            </div>

            <div class="logo2">
                <a class="p1" @click="goToProfile"></a>
                <a class="p2" @click="goToProfile"></a>
            </div>

        </nav>
    </div>
</template>
  
<script>
import { useRouter } from 'vue-router';
// import { inject } from 'vue'


// import { defineComponent,ref} from 'vue';
export default {
    setup() {
        const router = useRouter();
        // const reload = inject('reload')

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

        function goToMain() {
            router.push('/wholeBoard')
        }

        function goToGroup() {
            router.push('/myGroup')
        }

        function searchDB() {
            const searchInput = document.querySelector('input[name="groupSearch"]');
            const groupSearch = "\"" + searchInput.value + "\"";

            const url = 'http://18.117.181.47:8888/getgrouplist';
            const params = {
                keyword: groupSearch,
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
                    console.log(data.response)
                    document.searchLists = responseData.response.group_list;
                    console.log(router.currentRoute.value.fullPath )
                    setTimeout(() => {
                        // if (router.currentRoute.value.fullPath === '/searchPage') {
                        //     router.go(0)
                        //     router.push('/searchPage')
                        // } else {
                        //     router.push('/searchPage')
                        // }
                        router.push('/searchPage')
                    }, 300)

                })
                .catch(error => console.error(error));

        }

        function goToProfile() {
            const userId = document.userInfo.userid;

            const url = 'http://18.117.181.47:8888/getuser';
            const params = {
                userid: userId,
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
                    console.log(data.response.result)
                    document.userProfile = data.response;
                    setTimeout(function () {
                        // Do something after waiting for 5 seconds
                        // console.log('Five seconds have elapsed!')
                        router.push('/profile')
                    }, 300)

                })
                .catch(error => console.error(error));

        }
        return {
            searchDB,
            goToProfile,
            goToMain,
            goToGroup

        }

    },
    data() {
        return {
            groupSearch: ""
        };
    },


}
</script>


<style scoped>
* {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
}

.headBar {
    background-color: black;
    box-shadow: 0px 1px 3px #666;
    height: 70px;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 0 auto;
    max-width: 1500px;
    padding: 0 20px;
}

.logo a {
    font-size: 28px;
    font-weight: bold;
    color: white;
    text-decoration: none;
    transition: border-bottom 0.5s ease-in-out;
}

.logo:hover a {
    border-bottom: 2px solid white;
}

.menu ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding-left: 50px;
}

.menu .navlists {
    margin-left: 10px;
    position: relative;
    display: inline-block;
}

.menu .navlists:first-child {
    margin-left: 0;
}

.menu .navlists .navtag {
    display: block;
    font-size: 24px;
    font-weight: bold;
    color: white;
    text-decoration: none;
    padding: 10px;
    transition: color 0.3s ease;
}

.menu .navlists:hover .navtag {
    color: #777777;
}

.menu ul li ul {
    /* display: none; */
    position: absolute;
    top: 57px;
    left: -65px;
    background-color: #333;
    padding: 0;
    width: 220px;
    border-radius: 5px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
    z-index: 999;
    overflow: hidden;
    opacity: 0;
    /* transition: opacity 0.3s ease-in-out; */
}

.menu ul li:hover>ul {
    display: block;
    opacity: 1;
}


/* .menu ul li ul li {
    display: block;
} */


.menu ul li ul li a {
    padding: 20px 20px;
    color: #fff;
    font-size: 18px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    /* font-weight: bold; */
    text-decoration: none;
    display: block;
}

.menu ul li ul li a:hover {
    background-color: #555;
    color: #fff;
}

.headBar .site-search {
    float: right;
    width: 440px;
    margin-top: 5px;
    margin-left: 30px;
    /* background-color: #777; */
}

.headBar .site-search from {
    position: relative;
    width: 400px;
    height: 40px;
}

.search-text {
    width: 300px;
    height: 38px;
    border: 1px solid #E0E0E0;
    font-family: 'Courier New', Courier, monospace;
    font-size: 15px;
    font-weight: bold;
    padding: 0 10px;
    float: left;
    background-color: lightgray;
}

.searchDB {
    float: left;
    width: 100px;
    height: 40px;
    /* margin-top: 2px; */
    margin-left: -1px;
    border: 0px solid #E0E0E0;
    font-size: 16px;
    font-weight: bold;
    color: white;
    /* background: linear-gradient(100deg, #e0c3fc 0%, #8ec5fc 100%); */
    background-color: #577D86;
}

.searchDB:hover {
    /* background-color: #555; */
    color: #000000;
}

.logo2 {
    float: right;
    /* margin-top: 22.5px; */
    width: 40px;
    height: 40px;
    position: relative;
    overflow: hidden;

}

.logo2 a {
    position: absolute;
    width: 40px;
    height: 40px;
    left: 0;
    /* background-color: #ffffff; */
    background-image: url(../../assets/profile.png);
    background-size: 40px;
    background-position: center;
    transition: transform 0.6s ease-out;
}

.logo2 .p2 {
    background-image: url(../../assets/profile2.png);
    background-size: 40px;
    left: -40px;
}

.logo2:hover .p1 {
    left: 40px;
}

.logo2:hover .p2 {
    left: 0px;
}
</style>
