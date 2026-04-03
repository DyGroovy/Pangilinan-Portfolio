<template>
  <div id="app">
    <!-- Header / Navbar -->
    <header class="app-header">
      <div class="logo">Dylan Ranze Z. Pangilinan</div>
      <nav class="nav-buttons">
        <router-link to="/">Student Profile</router-link>
        <router-link to="/company">Company</router-link>
        <router-link to="/experience">Experience</router-link>
        <router-link to="/skills">Skills</router-link>
      </nav>
    </header>

    <!-- Router View -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
/* App Background */
#app {
  background-color: #000000;
  color: #f5f5f5;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Header */
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: linear-gradient(90deg, #1e3a8a, #e50914);
  box-shadow: 0 4px 10px rgba(229, 9, 20, 0.7);
  position: sticky;
  top: 0;
  z-index: 100;
  flex-wrap: wrap;
}

.logo {
  font-size: 22px;
  font-weight: bold;
  color: #ffcccb;
}

.nav-buttons {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
}

.nav-buttons a {
  color: #f5f5f5;
  text-decoration: none;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  transition: background 0.3s ease, color 0.3s ease;
}

.nav-buttons a:hover {
  background: #e50914;
  color: #aad4ff;
}

/* Main Content */
.main-content {
  padding: 40px 60px;
}

/* Responsive Navbar */
@media (max-width: 768px) {
  .app-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-buttons {
    width: 100%;
    justify-content: space-around;
    margin-top: 10px;
  }

  .main-content {
    padding: 20px;
  }
}
</style>
