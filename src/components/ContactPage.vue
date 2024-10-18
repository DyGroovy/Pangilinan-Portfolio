<template>
    <div class="contact-page">
        <h1>Contact Me</h1>
        <img :src="orImage" alt="Or Image" class="or-image" />
        <div class="contact-info">
            <h2>Email and Mobile</h2>
            <p>Personal Email: dylanpangilinan30@gmail.com</p>
            <p>TIP Email: mdrpangilinan1@tip.edu.ph</p>
            <p>Phone Number: 09054062608</p>
            
            <h2>Social Accounts</h2>
            <p>Facebook: Dylan Pangilinan</p>
            <p>LinkedIn: Dylan Ranze Pangilinan</p>
            <p>Instagram: dydydydyyyyy</p>
            
            <h2>Location</h2>
            <p>Tonsuya, Malabon City</p>
            <p>Arlegui, Manila</p>
        </div>

        <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="phone" placeholder="Phone" />
            <input type="subject" placeholder="Subject" />
            <textarea placeholder="Message" required></textarea>
            <div class="checkbox-container">
                <input type="checkbox" id="agree" checked />
                <label for="agree">I agree to the terms and conditions as set out by the user agreement.</label>
            </div>
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<script>
import orImage from '@/assets/images/or.png';

export default {
    name: 'ContactPage',
    data() {
        return {
            orImage
        };
    }
};
</script>

<style scoped>
.contact-page {
    text-align: left;
    margin-left: -280px; 
    margin-top: 9%;
}

form {
    display: flex;
    flex-direction: column; 
    gap: 10px; 
    margin-top: -620px;
}

input {
    width: 50%; 
    padding: 10px; 
    border: 1px solid #ddd; 
    border-radius: 5px; 
}

textarea {
    width: 50%; 
    height: 300px; 
    padding: 10px; 
    border: 1px solid #ddd; 
    border-radius: 5px; 
}

button {
    background-color: #000000; 
    color: white; 
    border: none; 
    padding: 10px 20px; 
    cursor: pointer; 
    font-size: 16px;
    border-radius: 5px; 
    width: 90px;
}

button:hover {
    background-color: #636363; 
}

.checkbox-container {
    display: flex;
    align-items: center; 
    gap: 0; 
    width: 50%; 
    margin-left: 0%; 
}

label {
    font-family: 'Times New Roman', Times, serif;
    margin-left: 5px; 
    font-size: 14px; 
}

input[type="checkbox"] {
    width: 16px; 
    height: 16px; 
    margin-right: 5px;
}

.or-image {
    max-width: 10%;
    height: auto; 
    margin-left: 60%;
    margin-bottom: -20%;
}

.contact-info {
    margin-left: 85%; 
    max-width: 35%; 
    position: relative;
    margin-top: -50px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: larger;
} 
.contact-info p {
    margin-left: 0;
    font-family: sans-serif;
    font-size: large;
}

.footer {
    bottom: 0;
    position: sticky;
    height: auto;
}
</style>