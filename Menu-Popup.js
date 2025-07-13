 // Get references to the elements
 const menuBtn = document.querySelector('.menu-btn');
 const closeBtn = document.getElementById('closeBtn');
 const menuPanel = document.getElementById('menuPanel');
 
 // Open the panel when the MENU button is clicked
 menuBtn.addEventListener('click', () => {
     menuPanel.classList.add('open');
 });
 
 // Close the panel when the X button is clicked
 closeBtn.addEventListener('click', () => {
     menuPanel.classList.remove('open');
 });
 
 function openForm() {
   document.getElementById("formBlock").style.display = "block";
   return false; // Prevent the <a> tag from navigating
 }
 
 function closeForm() {
   document.getElementById("formBlock").style.display = "none";
 }
 
 // Close the modal when clicking outside the form
 window.onclick = function(event) {
   const modal = document.getElementById("formBlock");
   if (event.target == modal) {
     closeForm();
   }
 }