<template>
  <div class="login-container">
    <div class="login-box">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Username" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    login() {
      if (this.username === 'user' && this.password === 'user') {
        localStorage.setItem('auth', 'true');
        this.$router.push('/portfolio/profile'); 
        this.$emit('login-success');
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    }
  }
};
</script>

<style scoped>
body {
  margin: 0; 
  height: 100vh; 
  overflow: hidden;  
  background-color: #371c5a; 
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: white; 
  margin-top: -10%;
}

.login-box {
  background-color: rgba(238, 238, 238, 0.9);
  border: 2px solid #e9e9e9; 
  border-radius: 15px; 
  padding: 20px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
  width: 90%; 
  max-width: 400px;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 95%; 
}

button {
  padding: 10px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%; 
}

button:hover {
  background-color: #4e4e4e;
}

.error {
  color: red;
  margin-top: 15px;
}

h1 {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 36px; 
  font-weight: 500;
  color: black;
}
@media (max-width: 600px) {
  h1 {
    font-size: 28px; 
  }
  
  .login-box {
    padding: 15px; 
  }
}
</style>
