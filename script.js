fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('name').textContent = data.name;
    document.getElementById('age').textContent = data.age;
  })
  .catch(error => console.error(error));
