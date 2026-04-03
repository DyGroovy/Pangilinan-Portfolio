<template>
  <div class="page">
    <section class="hero">
      <img src="@/assets/profile.jpg" class="image" />

      <div class="info">
        <h1>Dylan Ranze Z. Pangilinan</h1>
        <p class="subtitle">Computer Engineering Student</p>
        <p class="desc">
          Focused on IoT, robotics, and web systems. Passionate about building
          real-world solutions with clean and efficient design.
        </p>
      </div>
    </section>

    <section class="grid">
      <div class="card">IoT & Embedded Systems</div>
      <div class="card">Vue.js Development</div>
      <div class="card">Arduino & NodeMCU</div>
      <div class="card">Problem Solving</div>
    </section>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

/* Hero */
.hero {
  display: flex;
  gap: 40px;
  align-items: center;
}

.image {
  width: 260px;
  border-radius: 15px;
  border: 3px solid #e50914;
}

.info h1 {
  color: #ff2a2a;
}

.subtitle {
  color: #7dbbff;
  margin-bottom: 10px;
}

.desc {
  color: #ccc;
  max-width: 500px;
}

/* Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  gap: 20px;
}

.card {
  padding: 20px;
  background: #111;
  border: 1px solid #e50914;
  border-radius: 10px;
  text-align: center;
  color: #7dbbff;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  background: #1a1a1a;
}
</style>
