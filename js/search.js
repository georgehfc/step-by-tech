// Sample list of water fountains in Lisbon (replace with your data)
const waterFountains = [
  { location: "Liberdade São Jorge" },
  { location: "Liberdade Tivoli" },
  { location: "Liberdade EPAL" },
  { location: "Liberdade Marquês de Pombal" },
  { location: "República Duque de Ávila" },
  { location: "Julio Dinis" },
  { location: "Cais do Sodré" },
  { location: "Campo Grande" },
  { location: "Campo Grande Cidade Universitária" },
  { location: "Campo Grande NOS" },
  { location: "Campo Pequeno Jardim" },
  { location: "Carnide" },
  { location: "Belém Jerónimos" },
  { location: "Entrecampos República Estação" },
  { location: "Martim Moniz" },
  { location: "Parque das Nações FIL" },
  { location: "Parque das Nações Gare do Oriente" },
  { location: "Ribeira das Naus" },
  { location: "Rossio  Augusta" },
  { location: "Viriato Maternidade Alfredo da Costa" },
  { location: "Saldanha" },
  { location: "Santa Apolónia" },
  { location: "Terreiro Paço" }
];

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent form submission

  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  console.log(searchTerm);

  const searchResults = waterFountains.filter(fountain =>
    fountain.location.toLowerCase().includes(searchTerm)
  );

  // Process search results
  displaySearchResults(searchResults);
}

// Function to display search results
function displaySearchResults(results) {
  const resultsContainer = document.getElementById('search-results');

  // Clear previous results
  resultsContainer.innerHTML = '';

  if (results.length === 0) {
    resultsContainer.innerHTML = 'Nenhum bebedouro encontrado.';
  } else {
    results.forEach(fountain => {
      const listItem = document.createElement('li');
      listItem.textContent = `${fountain.location}`;
      resultsContainer.appendChild(listItem);
    });
  }
}

// Attach event listener to form submission
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', handleFormSubmit);
