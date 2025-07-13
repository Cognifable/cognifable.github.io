
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBeoUuEieqIs2OSpAJGWShs7mfxKCnCXCM",
    authDomain: "formdata-161a3.firebaseapp.com",
    databaseURL: "https://formdata-161a3-default-rtdb.firebaseio.com",
    projectId: "formdata-161a3",
    storageBucket: "formdata-161a3.firebasestorage.app",
    messagingSenderId: "976822714476",
    appId: "1:976822714476:web:e22cd81a35913e6f971849"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  // Form submission handler
  const form = document.getElementById('detailsForm');
  const submitBtn = document.querySelector('.submit-btn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Push data to Firebase
    push(ref(db, 'formSubmissions'), {
      name: name,
      email: email,
      timestamp: Date.now()
    })
    .then(() => {
      submitBtn.textContent = 'Submitted!';
      form.reset();
      
      // Reset button text after 2 seconds
      setTimeout(() => {
        submitBtn.textContent = 'Submit';
      }, 2000);
    })
    .catch((error) => {
      console.error('Error submitting form: ', error);
      submitBtn.textContent = 'Error!';
    });
  });
