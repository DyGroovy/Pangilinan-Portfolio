<template>
  <div class="page">
    <section class="hero">
      <img src="@/assets/profile.jpg" class="image"/>

      <div class="info">
        <h1>Company Experience</h1>
        <p class="subtitle">On-the-Job Training</p>
        <p class="desc">
          Worked on IoT monitoring systems, contributing to environmental and
          aquaculture-based solutions.
        </p>
      </div>
    </section>

    <section class="grid">
      <div class="card">Monitoring Systems</div>
      <div class="card">Sensor Integration</div>
      <div class="card">Data Handling</div>
    </section>
  </div>
</template>

<style scoped>
.page { display: flex; flex-direction: column; gap: 50px; }

.hero { display: flex; gap: 40px; align-items: center; }

.image {
  width: 260px;
  border-radius: 15px;
  border: 3px solid #e50914;
}

.info h1 { color: #ff2a2a; }
.subtitle { color: #7dbbff; }
.desc { color: #ccc; }

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
}
</style>
