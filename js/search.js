// Sample list of water fountains in Lisbon (replace with your data)
const waterFountains = [
  { location: "Avenida da Liberdade junto ao Cinema São Jorge", latlong: "38° 43\' 13.67\" N | 9° 8\' 47.05\" W", img_address:"https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_sao_jorge.jpg" },
  { location: "Avenida da Liberdade  junto ao Teatro Tivoli BBVA", latlong: "38° 43\' 13.25\" N | 9° 8\' 42.97\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_tivoli.jpg" },
  { location: "Avenida da Liberdade EPAL junto ao Pátio da Água", latlong: "38° 43\' 2.19\" N | 9° 8\' 32.84\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouroAvLiberdade_ALA_2190.jpg" },
  { location: "Avenida da Liberdade Marquês de Pombal", latlong: "38° 43\' 33.53\" N | 9° 9\' 4.02\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_marques_pombal.jpg" },
  { location: "Avenida da República Avenida Duque de Ávila", latlong: "38° 44\' 6.95\" N | 9° 8\' 41.03\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_duque_avila.jpg" },
  { location: "Avenida Julio Dinis", latlong: "38° 44\' 32.02\" N | 9° 8\' 53.13\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_julio_dinis.jpg" },
  { location: "Cais do Sodré Estação de comboios", latlong: "38° 42\' 22.37\" N | 9° 8\' 39.80\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_cais_sodre.jpg" },
  { location: "Campo Grande 27 Edifício CML", latlong: "38° 44\ 58.79\" N | 9° 9\' 1.49\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_campo_grande.jpg" },
  { location: "Campo Grande Cidade Universitária junto à Igreja Paroquial dos Santos Reis Magos", latlong: "38° 45\' 17.22\" N | 9° 9\' 16.43\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_cidade_universitaria.JPG" },
  { location: "Campo Grande Edifício NOS junto à estação de metro", latlong: "38° 45\' 34.51\" N | 9° 9\' 24.84\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_NOS.jpg" },
  { location: "Campo Pequeno Jardim Avenida da República Avenida João XXI", latlong: "38° 44\' 29.49\" N | 9° 8\' 46.56\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_campo_pequeno.jpg" },
  { location: "Carnide Estrada da Correia", latlong: "38° 45\' 37.05\" N | 9° 11\' 40.22\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_carnide.JPG" },
  { location: "Belém Jerónimos Rua dos Jerónimos", latlong: "38° 41\' 54.25\" N | 9° 12\' 21.83\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_belem.JPG" },
  { location: "Entrecampos Avenida da República Estação Avenida 5 de Outubro junto à Teleperformance Portugal", latlong: "38° 44\' 37.62\" N | 9° 8\' 56.96\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_entrecampos.JPG" },
  { location: "Marquês de Pombal Parque Eduardo VII", latlong: "38° 43\' 33.53\" N | 9° 9\' 4.02\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_marques_pombal.jpg" },
  { location: "Martim Moniz Escadinhas da Saúde", latlong: "38° 42\' 55.75\" N | 9° 8\' 8.74\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_martim_moniz.jpg" },
  { location: "Parque das Nações FIL Alameda dos Oceanos", latlong: "38° 46\' 5.29\" N | 9° 5\' 38.12\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_parque_nacoes_1.JPG" },
  { location: "Parque das Nações Gare do Oriente", latlong: "38° 46\' 4.15\" N | 9° 5\' 53.01\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_parque_nacoes.JPG" },
  { location: "Ribeira das Naus Avenida Ribeira das Naus", latlong: "38° 42\' 20.29\" N | 9° 8\' 27.93\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_ribeira_naus.jpg" },
  { location: "Rossio Rua Augusta Praça Dom Pedro IV", latlong: "38° 42\' 48.12\" N | 9° 8\' 19.33\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_rossio.jpg" },
  { location: "Rua Viriato Maternidade Alfredo da Costa", latlong: "38° 43\' 57.06\" N | 9° 8\' 51.29\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_maternidade.jpg" },
  { location: "Saldanha Praça Duque de Saldanha", latlong: "38° 44\' 2.68\" N | 9° 8\' 43.57\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_saldanha.jpg" },
  { location: "Santa Apolónia Rua Caminhos de Ferro", latlong: "38° 42\' 48.30\" N | 9° 7\' 23.34\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_santa_apolonia.jpg" },
  { location: "Terreiro Paço Avenida Infante Dom Henrique", latlong: "38° 42\' 25.53\" N | 9° 8\' 0.19\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_praca_comercio.jpg" }
];

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent form submission

  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  console.log("Searching for... " + searchTerm);

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
    resultsContainer.innerHTML = 'Nenhum bebedouro encontrado...';
  } else {
    results.forEach(fountain => {
      const listItem = document.createElement('div');
      listItem.classList.add('item');

      const imgItem = document.createElement('img');
      imgItem.src = `${fountain.img_address}`;
      listItem.appendChild(imgItem);

      const labelItem = document.createElement('label');
      labelItem.textContent = `Bebedouro ${fountain.location}`;
      listItem.appendChild(labelItem);

      resultsContainer.appendChild(listItem);
    });
  }
}

// Attach event listener to form submission
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', handleFormSubmit);
