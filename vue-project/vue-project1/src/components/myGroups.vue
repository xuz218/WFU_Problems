<template>
    <div class="container">
      <!-- Profile column on the left -->
      <div class="profile-column">
        <img :src="profileImage" alt="Profile Image">
        <h2>{{ name }}</h2>
        <div class="skills">
          <span v-for="(skill, index) in skills" :key="index">{{ skill }}</span>
        </div>
      </div>
  
      <!-- Create and Join buttons on the top right -->
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
          <button @click="joinGroup(group.id)">Join Group</button>
        </div>
      </div>
  
      <!-- Timeline block below groups box -->
      <div class="timeline">
        <!-- timeline content here -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profileImage: "path/to/profile-image.png",
        name: "Your Name",
        skills: ["Skill 1", "Skill 2", "Skill 3"],
        groups: [
          {
            id: 1,
            name: "Group 1",
            image: "path/to/group-image-1.png",
            description: "Description of Group 1"
          },
          {
            id: 2,
            name: "Group 2",
            image: "path/to/group-image-2.png",
            description: "Description of Group 2"
          },
          {
            id: 3,
            name: "Group 3",
            image: "path/to/group-image-3.png",
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
    }
  };
  </script>

<style>
.container {
  display: flex;
  flex-direction: row;
}

.profile-column {
  width: 20%;
  padding: 1rem;
  box-sizing: border-box;
}

.profile-column img {
  width: 100%;
  max-width: 200px;
  border-radius: 50%;
}

.skills {
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
}

.skills span {
  margin-right: 0.5rem;
  background-color: #eee;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
}

.buttons {
  width: 80%;
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem;
  box-sizing: border-box;
}

.buttons button {
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: #ccc;
  border: none;
  cursor: pointer;
}

.groups {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
  box-sizing: border-box;
}

.group-box {
  width: 30%;
  margin-bottom: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
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
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}
</style>
