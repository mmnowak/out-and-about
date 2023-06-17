const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  const jsonData = JSON.stringify(Object.fromEntries(formData));

  fetch('https://pride-api.onrender.com/api/contacts', {
    method: 'POST',
    body: jsonData,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      Swal.fire('Success', 'Form submitted successfully!', 'success');
    })
    .catch(error => {
      console.error(error);
      Swal.fire('Error', 'An error occurred while submitting the form.', 'error');
    });
});