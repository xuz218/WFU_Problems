<template>
    <topNavigator />
    <div class="container">
        <!-- Profile column on the left -->
        <div class="profile-column">
            <img src="https://via.placeholder.com/150" alt="Profile Image">
            <h2>{{ name }}</h2>
            <div class="skills">
                <span v-for="(skill, index) in skills" :key="index">{{ skill }}</span>
            </div>
        </div>

        <div class="right-column"> <!-- Create and Join buttons on the top right -->
            <div class="buttons">
                <button @click="createGroup">Create a Group</button>
                <button @click="joinGroup">Join by GID</button>
            </div>

            <!-- Group boxes in the center -->
            <div class="groups">
                <div class="group-box" v-for="(group, index) in groups" :key="index">
                    <img :src="group.image" alt="Group Image">
                    <h3>{{ group.name }}</h3>
                    <p>{{ group.description }}</p>
                    <button @click="joinGroup(group.id)" class="invite">Invite member</button>
                </div>
            </div>

            <!-- Timeline block below groups box -->
            <div class="timeline">
                <!-- timeline content here -->
                <p class="time">Timeline</p>
                <!-- Example timeline demo -->
                <div class="timeline-demo">
                    <div class="event" data-date="January 2010">
                        <h3>Event 1</h3>
                        <p>01/15/2023 Sprint1: Design the wireframes and the figma frames</p>
                    </div>
                    <div class="event" data-date="March 2012">
                        <h3>Event 2</h3>
                        <p>02/15/2023 Sprint2: Finish functions such as logging in or signing up</p>
                    </div>
                    <div class="event" data-date="June 2015">
                        <h3>Event 3</h3>
                        <p>03/15/2023 Sprint3: Build up the database and finish the data fetch function</p>
                    </div>
                    <div class="event" data-date="December 2017">
                        <h3>Event 4</h3>
                        <p>04/15/2023 Sprint4: Connect the frontends and backends, and take Unit testing</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <mainFooter />
</template>
  
<script>
import topNavigator from "./firstPage/topNavigator.vue"
import mainFooter from "./firstPage/mainFooter.vue"
export default {
    data() {
        return {
            profileImage: "path/to/profile-image.png",
            name: "Your Name",
            skills: ["Skill 1", "Skill 2", "Contact information"],
            groups: [
                {
                    id: 1,
                    name: "Group 1",
                    image: "https://via.placeholder.com/300x200.jpg",
                    description: "Description of Group 1"
                },
                {
                    id: 2,
                    name: "Group 2",
                    image: "https://via.placeholder.com/300x200.jpg",
                    description: "Description of Group 2"
                },
                {
                    id: 3,
                    name: "Group 3",
                    image: "https://via.placeholder.com/300x200.jpg",
                    description: "Description of Group 3"
                }
            ]
        };
    },
    methods: {
        createGroup() {
            // create group logic here
        },
        joinGroup(groupId) {
            // join group logic here
            console.log(groupId)
        }
    },
    components: {
        topNavigator,
        mainFooter
    }
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
}

.profile-column {
    width: 22%;
    padding: 1rem;
    box-sizing: border-box;
    background-color: #f2f2f2;
    height: 800px;
    border-radius: 5px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);
    margin-left: 10px;
}

.profile-column img {
    width: 80%;
    max-width: 200px;
    border-radius: 50%;
    margin-top: 20px;
}

.profile-column h2{
    margin-top: 20px;
}

.skills {
    display: flex;
    flex-direction: column;
    /* change this property */
    margin: 2rem auto;
    width: 160px;
}

.skills span {
    margin-bottom: 2rem;
    /* add margin between the items */
    background-color: #FF6969;
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
}

.right-column {
    width: 76%;
    height: 800px;
    margin-left: 20px;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);

}

.buttons {
    width: 98%;
    display: flex;
    height: 60px;
    /* flex-direction: row-reverse; */
    /* padding: 10px; */
    margin: 10px auto;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);

}

.buttons button {
    width: 250px;
    height: 40px;
    font-size: 20px;
    font-weight: bold;
    /* margin-left: 1rem; */
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    margin: 10px auto;
    background-color: #ccc;
    border: none;
    cursor: pointer;
    border-color: #000;
    box-shadow: 0 0 3px 0 rgba(12, 5, 66, 0.7);
}

.groups {
    width: 99%;
    margin: 20px auto;
    display: flex;
    height: 440px;
    /* flex-wrap: wrap; */
    justify-content: space-between;
    padding: 1rem;
    box-sizing: border-box;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);
    /* flex-direction: row; */
}


.group-box {
    width: 30%;
    height: 400px;
    margin-bottom: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    overflow: hidden;
}

.group-box .invite {
    font-weight: bold;
}

.group-box img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.group-box h3 {
    margin: 1rem;
}

.group-box p {
    margin: 0 1rem 1rem 1rem;
}

.group-box button {
    margin: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    background-color: #ccc;
    border: none;
    cursor: pointer;
}

.timeline {
    width: 99%;
    padding-top: 10px;
    margin: 20px auto;
    height: 230px;
    /* padding: 1rem; */
    /* box-sizing: border-box; */
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);
}

.timeline .time {
    font-size: 25px;
    font-weight: bold;
    text-decoration: underline;
}

.event{
    padding-top: 7px;
}
</style>
