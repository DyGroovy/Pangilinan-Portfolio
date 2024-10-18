<template>
  <footer>
    <div class="footer-content">
      <p>&copy; 2024 Groovy. All rights reserved.</p>
      <p class="footer-note">"We Can’t Change What’s Done, We Can Only Move On."</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterView'
};
</script>

<style scoped>
footer {
  background: linear-gradient(135deg, #1a1a1a, #333);
  color: white;
  text-align: center;
  padding: 15px 0; 
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center; 
}

footer p {
  margin: 0;
  font-family: 'Arial', sans-serif;
  font-size: 14px;
  transition: color 0.3s, transform 0.3s; 
}

.footer-note {
  font-size: 12px;
  color: #dcdcdc; 
  margin-top: 5px; 
}

footer p:hover {
  color: #ffd700; 
  transform: scale(1.05); 
}

footer:hover {
  background: linear-gradient(135deg, #333, #1a1a1a);
}
</style>
