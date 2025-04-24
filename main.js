document.getElementById('Submit').addEventListener('submit', function(event) {
    event.preventDefault();

   
    const user = {
      id: document.getElementById('id').value,

      firstName: document.getElementById('firstName').value,

      lastName: document.getElementById('lastName').value,

      address: document.getElementById('address').value,

      email: document.getElementById('email').value,

      gender: document.getElementById('gender').value
    };

    
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
      <h3>📋 Your Submitted Data:</h3>

      <p><span class="highlight">ID:</span> ${user.id}</p>

      <p><span class="highlight">First Name:</span> ${user.firstName}</p>

      <p><span class="highlight">Last Name:</span> ${user.lastName}</p>

      <p><span class="highlight">Address:</span> ${user.address}</p>

      <p><span class="highlight">Email:</span> ${user.email}</p>

      <p><span class="highlight">Gender:</span> ${user.gender}</p>

    `;
  });