<template>
  <div id="app" :class="{ 'login-page': isLoginPage }">
    <nav v-if="!isLoginPage">
      <div class="logo">Pangilinan, Dylan Ranze Z.</div>
      <ul>
        <li><router-link to="/portfolio/profile">Profile</router-link></li>
        <li><router-link to="/portfolio/showcase">Showcase</router-link></li>
        <li><router-link to="/portfolio/contact">Contact</router-link></li>
        <li><router-link to="/portfolio/creative">Creative</router-link></li>
        <li class="dropdown">
          <span @click="toggleMenu" class="menu-icon">☰</span>
          <ul v-show="showMenu" class="dropdown-content">
            <li><router-link to="/portfolio/profile">Profile</router-link></li>
            <li><router-link to="/portfolio/showcase">Showcase</router-link></li>
            <li><router-link to="/portfolio/contact">Contact</router-link></li>
            <li><router-link to="/portfolio/creative">Creative</router-link></li>
            <li @click="logout">Logout</li>
          </ul>
        </li>
      </ul>
    </nav>

    <router-view @login-success="handleLogin"></router-view>
    
    <FooterView v-if="!isLoginPage" />
  </div>
</template>

<script>
import FooterView from '@/components/FooterView.vue';

export default {
  name: 'App',
  components: {
    FooterView
  },
  data() {
    return {
      isAuthenticated: localStorage.getItem('auth') === 'true',
      showMenu: false
    };
  },
  computed: {
    isLoginPage() {
      return this.$route.path === '/login';
    }
  },
  methods: {
    handleLogin() {
      this.isAuthenticated = true; 
      localStorage.setItem('auth', 'true');
    },
    toggleMenu() {
      this.showMenu = !this.showMenu; 
    },
    logout() {
      localStorage.removeItem('auth');
      this.isAuthenticated = false;
      this.$router.push('/login');
    }
  },
  watch: {
    '$route'() {
      this.isAuthenticated = localStorage.getItem('auth') === 'true';
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Georgia', serif; 
  color: #333;
  padding-top: 60px;
  background-color: #f5f5f5;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
}

nav {
  background-color: #000;
  padding: 15px 30px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%; 
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box; 
}

.logo {
  font-size: 28px;
  font-weight: bold;
  color: #fff;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 30px;
  flex-grow: 1;
  justify-content: flex-end; 
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  padding: 10px 15px;
  transition: color 0.3s, box-shadow 0.3s;
  border-radius: 5px;
}

nav ul li a:hover {
  color: #FFD700;
  box-shadow: 0 2px 10px rgba(255, 215, 0, 0.3);
}

.menu-icon {
  cursor: pointer;
  color: #fff;
  font-size: 24px;
  padding: 10px 15px;
  transition: transform 0.3s ease;
}

.menu-icon:hover {
  transform: rotate(90deg); 
}

.dropdown {
  position: relative;
}

.dropdown-content {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #1e1e1e; 
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  min-width: 180px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: visibility 0s, opacity 0.3s ease, transform 0.3s ease;
}

.dropdown:hover .dropdown-content {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}

.dropdown-content li {
  padding: 12px 20px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  border-bottom: 1px solid #444;
}

.dropdown-content li:last-child {
  border-bottom: none;
}

.dropdown-content li a,
.dropdown-content li {
  color: #fff;
  text-decoration: none;
  display: block;
  cursor: pointer;
}

.dropdown-content li:hover {
  background-color: #555;
  transform: translateX(5px); 
}

.dropdown-content li:last-child:hover {
  background-color: #E74C3C;
}

.dropdown-content li:hover a {
  color: #FFD700; 
}

.dropdown-content li:hover::before {
  content: "→"; 
  margin-right: 8px;
  color: #FFD700;
  font-weight: bold;
}

@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }

  nav ul li {
    width: 100%;
    text-align: center;
  }

  nav ul li a {
    padding: 12px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  nav ul li a {
    font-size: 14px;
    padding: 10px;
  }

  body {
    padding-top: 70px;
  }
}
</style>
