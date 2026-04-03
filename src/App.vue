<template>
  <div id="app">
    <header class="header">
      <div class="logo">Dylan Ranze Z. Pangilinan</div>

      <nav class="nav">
        <router-link to="/">Profile</router-link>
        <router-link to="/company">Company</router-link>
        <router-link to="/experience">Experience</router-link>
        <router-link to="/skills">Skills</router-link>
      </nav>
    </header>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
#app {
  background: #000;
  color: #f5f5f5;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 50px;
  background: #0a0a0a;
  border-bottom: 2px solid #e50914;
  position: sticky;
  top: 0;
}

.logo {
  font-weight: bold;
  color: #ff2a2a;
}

.nav {
  display: flex;
  gap: 25px;
}

.nav a {
  color: #ccc;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 6px;
  transition: 0.3s;
}

.nav a:hover {
  background: #e50914;
  color: #fff;
}

/* Content */
.content {
  padding: 40px 60px;
}

/* Mobile */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav {
    width: 100%;
    justify-content: space-around;
  }

  .content {
    padding: 20px;
  }
}
</style>
