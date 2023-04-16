<template>
  <topNavigator/>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.1/css/all.css">
  <div class="profile">
    <div class="header">
      <div class="avatar">
        <img :src="user.avatar" alt="User Avatar" />
      </div>
      <h1>{{ user.name }}</h1>
      <p>{{ user.title }}</p>
      <div class="social-links">
        <a :href="user.socialLinks.twitter"><i class="fab fa-twitter"></i></a>
        <a :href="user.socialLinks.github"><i class="fab fa-github"></i></a>
        <a :href="user.socialLinks.linkedin"><i class="fab fa-linkedin"></i></a>
      </div>
    </div>
    <div class="content">
      <h2>About Me</h2>
      <p>{{ user.about }}</p>
      <h2>Skills</h2>
      <ul>
        <li v-for="(skill, index) in user.skills" :key="index">{{ skill }}</li>
      </ul>
      <h2>Experience</h2>
      <ul>
        <li v-for="(experience, index) in user.experience" :key="index">
          <h3>{{ experience.position }}</h3>
          <p>{{ experience.company }}</p>
          <p>{{ experience.date }}</p>
          <ul>
            <li v-for="(task, index) in experience.tasks" :key="index">{{ task }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <mainFooter/>
</template>

  
<script>
import topNavigator from "./firstPage/topNavigator.vue"
import mainFooter from "./firstPage/mainFooter.vue"

export default {
  data() {
    return {
      user: {
        name: "Ziang Xu",
        title: "Web Developer",
        avatar: "https://via.placeholder.com/150",
        socialLinks: {
          twitter: "https://twitter.com",
          github: "https://github.com",
          linkedin: "https://linkedin.com",
        },
        about:
          "Open to work",
        skills: ["HTML", "CSS", "JavaScript", "Vue.js", "Node.js"],
        experience: [
          {
            position: "Web Developer",
            company: "Wake Forest University",
            date: "Jan 2023 - Present",
            tasks: [
              "- Developed and maintained the company website",
              "- Optimized website performance and speed",
              "- Collaborated with designers and other developers on projects",
            ],
          },
          {
            position: "Frontend Developer",
            company: "Wake Forest University",
            date: "Jan 2023 - Present",
            tasks: [
              "- Built and maintained the WFU problems project",
              "- Worked on various frontend projects",
            ],
          },
        ],
      },
    };
  },

  components:{
    topNavigator,
    mainFooter
  }
};
</script>
  
<style>
.profile {
  max-width: 800px;
  margin: 30px auto;
  /* background-color: black; */
  padding-bottom: 20px;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.social-links {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.social-links a {
  display: inline-block;
  margin-right: 1rem;
  font-size: 1.5rem;
  color: #666;
  transition: all 0.2s ease-in-out;
}

.social-links a:hover {
  color: #007bff;
}

.content {
  padding: 2rem;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.content h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.content ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.content li {
  margin-bottom: 0.5rem;
}

.content h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}
</style>
  