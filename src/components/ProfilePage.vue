<template>
  <div class="profile-page">
    <h1>Profile Page</h1>
    <img :src="meImage" alt="Me" class="me-image" />
    <div class="social-media-links">
      <a href="https://www.facebook.com/dylanpangilinan30" target="_blank">
        <img :src="fbLogo" alt="Facebook" class="social-logo" />
      </a>
      <a href="https://www.linkedin.com/in/dylan-ranze-pangilinan-136820300/" target="_blank">
        <img :src="linkedinLogo" alt="LinkedIn" class="social-logo" />
      </a>
      <a href="https://www.instagram.com/dydydydyyyyy/" target="_blank">
        <img :src="igLogo" alt="Instagram" class="social-logo" />
      </a>
    </div>
    <p>
      My name is Dylan, I am a computer engineering student currently studying at the Technological Institute of the Philippines. I have completed projects in embedded systems and web development, but my real interest lies in robotics. I currently have hands-on experience with Arduino-based projects, NodeMCU, and web technologies like Vue.js.
      I also enjoy tackling new coding challenges and am eager to explore emerging technologies and integrate them into my projects. I am still improving my skills in both hardware and software development. In my free time, I mostly play games, especially AAA titles like Red Dead Redemption 2, God of War Ragnarok, etc., and I also try to learn new songs to play on my guitar when I get bored of playing games.
      I enjoy exploring new things to learn even if it is out of my field of study. As long as I have the inspiration and eagerness to do it, I will pursue it.
    </p>

    <div class="skills-section">
      <h2>Skills</h2>
      <div class="skills-container">
        <span class="skill">Circuitry</span>
        <span class="skill">UI/UX</span>
        <span class="skill">Web Development</span>
        <span class="skill">IoT</span>
        <span class="skill">Robotics</span>
        <span class="skill">Hardware Programmer</span>
        <span class="skill">Hardware Designer</span>
        <span class="skill">Linux</span>
        <span class="skill">Networking</span>
      </div>
    </div>
    <div class ="talent-section"></div>
    <h3>Talents/Interests</h3>
    <div class="talent-container">
        <span class="skill">Guitar</span>
        <span class="skill">PC Building</span>
        <span class="skill">Gaming</span>
        <span class="skill">Motorcycle Riding</span>
    </div>
  </div>
</template>

<script>
import meImage from '@/assets/images/me.png';
import fbLogo from '@/assets/images/logos/f.png';
import linkedinLogo from '@/assets/images/logos/in.png';
import igLogo from '@/assets/images/logos/ig.png';

export default {
  name: 'ProfilePage',
  data() {
    return {
      meImage,
      fbLogo,
      linkedinLogo,
      igLogo
    };
  }
};
</script>

<style scoped>
.profile-page {
  text-align: left;
  margin-left: -25%;
  margin-right: auto;
  padding: 20px;
  margin-top: 5%;
}

.me-image {
  max-width: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
}

p {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.social-media-links {
  margin-top: 20px;
}

.social-logo {
  width: 40px;
  margin-right: 15px;
}

.social-logo:hover {
  opacity: 0.7;
}
.skills-section {
  margin-top: 40px;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill {
  background-color: #1a1a1d;
  color: white;
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 14px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  cursor: default;
}

.skill:hover {
  background-color: #999999;
}

.talent-section {
  margin-top: 40px;
}

.talent-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.talent {
  background-color: #1a1a1d;
  color: white;
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 14px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  cursor: default;
}

.talent:hover {
  background-color: #999999;
}
</style>