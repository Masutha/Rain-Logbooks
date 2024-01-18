// const visitorForm = document.getElementById("visitorForm");
// visitorForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formData = new FormData(visitorForm);
//   fetch("/registerVisitor", {
//     method: "POST",
//     body: formData
//   })
//   .then(response => response.json())
//   .then(data => {
//     // Display name tag on a new window (popup)
//     window.open(data.nameTag, '_blank');
//     // Update visitors list on Visiting Records page (using JS to manipulate #visitorsList)
//    console.log(formData);    
//     updateVisitorsList(data.visitingRecords);
//   });
// });

// function updateVisitorsList(records) {
//   // Clear existing list and append new list items based on records data
// }
alert("JS working !")
const registrationForm = document.getElementById("registration-form");
const nameTagDiv = document.getElementById("name-tag");
const accessRecordsButton = document.getElementById("access-records");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const Visitor_ID = document.getElementById("Visitor_ID").value;
  const Name = document.getElementById("Name").value;
  // Get other fields data
  const Surname = document.getElementById("Surname").value;
  const  company = document.getElementById("company").value;
  const reason = document.getElementById("reason").value;
  const contact = document.getElementById("contact").value;
  // Send data to SQL database (using AJAX or a library like Axios)
  console.log(Visitor_ID, Name, Surname, company, reason, contact);
  sendDataToDatabase();/* other fields */

 
  // Generate name tag
  generateNameTag(Name, Surname);

  // Show welcome message
  alert("Welcome to Rain, " + Surname+ " " + Name + "!");
});
// 
const Data={Visitor_ID, Name, Surname, company, reason, contact}
function sendDataToDatabase() {
  fetch('/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Data),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error inserting data');
      }
      return response.json();
    })
    .then(() => {
      console.log('Data inserted successfully');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  function generateNameTag(name, surname) {
    // Create name tag HTML content
    const nameTagContent = `
      <h2> Visitor: ${name} ${surname}</h2>
      <p>Please wear this name tag during your visit.</p>
      <button onclick="printNameTag()">Print Name Tag</button>
    `;
    nameTagDiv.innerHTML = nameTagContent;

  }
  
  // accessRecordsButton.addEventListener("click", () => {
  //   // Redirect to the visiting records page
  //   window.location.href = "visiting_records.html";
  // });
  
