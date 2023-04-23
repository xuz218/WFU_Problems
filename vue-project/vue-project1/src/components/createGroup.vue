<template>
    <topNavigator/>
    <div class="padding"></div>
    <body>
        <form class="wrapper">
            <h1>New Group</h1>
            <label for="group-name">Group Name:</label>
            <input type="text" id="group-name" name="group-name" placeholder="Enter group name" required>

            <label for="group-category">Group Category:</label>
            <input type="text" id="group-category" name="group-category" placeholder="Enter group category" required>

            <label for="group-description">Group Description:</label>
            <textarea id="group-description" name="group-description" rows="4" placeholder="Enter group description"
                required></textarea>

            <button type="submit">Create Group</button>
        </form>
    </body>
    <div class="padding"></div>
    <mainFooter/>
</template>

<script>
import topNavigator from "./firstPage/topNavigator.vue"
import mainFooter from "./firstPage/mainFooter.vue"
export default {
    components: {
        topNavigator,
        mainFooter
    }
}
</script>

<style scoped>
body {
    background-color: #f5f5f5;
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    padding: 20px;
    width: 1000px;
    height: 600px;
    margin: 200px auto;
}

body form {
    background-color: #fff;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 40px auto;
    /* height: 80%; */
    width: 1200px;
    /* height: 200px; */
}

label {
    display: block;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}

input,
textarea {
    display: block;
    width: 90%;
    height: 90%;
    padding: 30px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
}

button {
    background-color: #9E7E38;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
}

input:invalid,
textarea:invalid {
    border-color: black;
}

.padding{
    margin: 230px;
}
</style>