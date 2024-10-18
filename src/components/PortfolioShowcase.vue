<template>
  <div class="portfolio-showcase">
    <h1>Portfolio Showcase</h1>
    <p>My Finished Projects</p>

    <div class="repository-container">
      <div class="repository-card">
        <img :src="repository.image" alt="Stem and Leaf Plot Calculator" class="repo-image" />
        <div class="repo-content">
          <h2>{{ repository.title }}</h2>
          <p>{{ repository.description }}</p>
          <button @click="openLink(repository.link)" class="view-button">View on Vercel</button>
          <button @click="openLink(repository.link)" class="view-button">View on Vercel</button>
        </div>
      </div>

      <div class="repository-card">
        <img :src="vercelRepository.image" alt="OS Prelim Exam" class="repo-image" />
        <div class="repo-content">
          <h2>{{ vercelRepository.title }}</h2>
          <p>{{ vercelRepository.description }}</p>
          <button @click="openLink(vercelRepository.link)" class="view-button">View on Vercel</button>
          <button @click="openLink(vercelRepository.link)" class="view-button">View on Vercel</button>
        </div>
      </div>

      <div class="repository-card">
        <img :src="adminDashboard.image" alt="Admin Dashboard" class="repo-image" />
        <div class="repo-content">
          <h2>{{ adminDashboard.title }}</h2>
          <p>{{ adminDashboard.description }}</p>
          <button @click="openLink(adminDashboard.link)" class="view-button">View on GitHub</button>
          <button @click="openLink(adminDashboard.link)" class="view-button">View on GitHub</button>
        </div>
      </div>
    </div>

    <div class="video-container">
      <div class="video-card" v-for="(video, index) in videos" :key="index">
        <img :src="video.previewImage" alt="Video preview" class="video-preview-image" />
        <div class="video-content">
          <h3>{{ video.title }}</h3>
          <button @click="playVideo(video.src)" class="play-button">Play Video</button>
          <button @click="playVideo(video.src)" class="play-button">Play Video</button>
          <p>{{ video.description }}</p>
        </div>
      </div>

      <div class="repository-card">
        <img :src="tempHumidIoT.image" alt="Temperature and Humidity IoT" class="repo-image" />
        <div class="repo-content">
          <h2>{{ tempHumidIoT.title }}</h2>
          <p>{{ tempHumidIoT.description }}</p>
          <button @click="openLink(tempHumidIoT.link)" class="view-button">View on GitHub</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioShowcase',
  data() {
    return {
      repository: {
        title: 'Stem and Leaf Plot Calculator',
        link: 'https://vercel.live/link/engineering-data-analysis-project.vercel.app?via=project-dashboard-alias-list&p=1',
        image: require('@/assets/images/st.jpg')
        link: 'https://vercel.live/link/engineering-data-analysis-project.vercel.app?via=project-dashboard-alias-list&p=1',
        image: require('@/assets/images/st.jpg')
      },
      vercelRepository: {
        title: 'OS Prelim Exam',
        link: 'https://os-prelim-exam.vercel.app/',
        image: require('@/assets/images/os.jpg')
        image: require('@/assets/images/os.jpg')
      },
      adminDashboard: {
        title: 'Admin Dashboard Final Project',
        link: 'https://github.com/DyGroovy/Admin-Dashboard-Final-Proj',
        image: require('@/assets/images/admin.jpg')
      },
      tempHumidIoT: {
        title: 'Temperature and Humidity IoT (Arduino Cloud)',
        link: 'https://github.com/DyGroovy/TempHumidIoT',
        image: require('@/assets/images/tmp.jpg')
      },
      videos: [
        {
          title: 'Bluetooth Controlled Robot Car',
          src: require('@/assets/video/blue.mp4'),
          previewImage: require('@/assets/images/tooth.jpg'),
        },
        {
          title: 'LED Memorization Game',
          src: require('@/assets/video/ledg.mp4'),
          previewImage: require('@/assets/images/game.jpg'),
        },
        {
          title: 'Obstacle Avoiding Robot Car',
          src: require('@/assets/video/obs.mp4'),
          previewImage: require('@/assets/images/obs.jpg'),
        },
        {
          title: 'RFID Door Lock using Servo',
          src: require('@/assets/video/rfid.mp4'),
          previewImage: require('@/assets/images/door.jpg'),
        },
        {
          title: 'Traffic Light System',
          src: require('@/assets/video/traffic.mp4'),
          previewImage: require('@/assets/images/tlights.jpg'),
        }
      ]
    };
  },
  methods: {
    playVideo(src) {
      window.open(src, '_blank');
    },
    openLink(link) {
      window.open(link, '_blank');
      window.open(src, '_blank');
    },
    openLink(link) {
      window.open(link, '_blank');
    }
  }
};
</script>

<style scoped>
.portfolio-showcase {
  text-align: left;
  margin: 0 auto;
  margin: 0 auto;
  padding: 20px;
  margin-left: -25%;
  margin-top: 5%;
}

.repository-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.repository-card,
.video-card {
  display: flex;
  align-items: center;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.video-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.repo-image,
.video-preview-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
}

.repo-content,
.video-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.play-button,
.view-button {
  background-color: #000000;
.repo-content,
.video-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.play-button,
.view-button {
  background-color: #000000;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  width: 90%;
  margin-top: 10px;
  width: 90%;
}

.play-button:hover,
.view-button:hover {
  background-color: #505050;
.play-button:hover,
.view-button:hover {
  background-color: #505050;
}

.repo-content h2,
.video-content h3 {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
}

.repo-content p,
.video-content p {
  font-size: 16px;
  margin: 10px 0;
}

.repo-link {
  display: none;
  display: none;
}
</style>