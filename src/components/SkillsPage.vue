<template>
  <div>
    <h1>Skills</h1>

    <div class="grid">
      <div class="card">IoT Development</div>
      <div class="card">Vue.js</div>
      <div class="card">Arduino</div>
      <div class="card">Problem Solving</div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: #ff2a2a;
  margin-bottom: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
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
}
</style>
