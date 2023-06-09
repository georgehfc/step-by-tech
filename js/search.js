// Sample list of water fountains in Lisbon (replace with your data)
var waterFountains = [
  { location: "Avenida da Liberdade junto ao Cinema São Jorge", latitude: "38.7204639", longitude: "-9.146402777777777", latlong: "38° 43\' 13.67\" N | 9° 8\' 47.05\" W", img_address:"https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_sao_jorge.jpg" },
  { location: "Avenida da Liberdade junto ao Teatro Tivoli BBVA", latitude: "38.7203472", longitude: "-9.145269444444445", latlong: "38° 43\' 13.25\" N | 9° 8\' 42.97\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_tivoli.jpg" },
  { location: "Avenida da Liberdade EPAL junto ao Pátio da Água", latitude: "38.717275", longitude: "-9.142455555555555", latlong: "38° 43\' 2.19\" N | 9° 8\' 32.84\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouroAvLiberdade_ALA_2190.jpg" },
  { location: "Avenida da Liberdade Marquês de Pombal Parque Eduardo VII", latitude: "38.7259806", longitude: "-9.151116666666667", latlong: "38° 43\' 33.53\" N | 9° 9\' 4.02\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_marques_pombal.jpg" },
  { location: "Avenida da República Avenida Duque de Ávila", latitude: "38.7352639", longitude: "-9.144730555555554", latlong: "38° 44\' 6.95\" N | 9° 8\' 41.03\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_duque_avila.jpg" },
  { location: "Avenida Julio Dinis", latitude: "38.7422278", longitude: "-9.148091666666666", latlong: "38° 44\' 32.02\" N | 9° 8\' 53.13\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_julio_dinis.jpg" },
  { location: "Cais do Sodré Estação de comboios", latitude: "38.7062139", longitude: "-9.144388888888889", latlong: "38° 42\' 22.37\" N | 9° 8\' 39.80\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_cais_sodre.jpg" },
  { location: "Campo Grande 27 Edifício CML", latitude: "38.7496639", longitude: "-9.15041388888889", latlong: "38° 44\ 58.79\" N | 9° 9\' 1.49\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_campo_grande.jpg" },
  { location: "Campo Grande Cidade Universitária junto à Igreja Paroquial dos Santos Reis Magos", latitude: "38.7547833", longitude: "-9.15456388888889", latlong: "38° 45\' 17.22\" N | 9° 9\' 16.43\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_cidade_universitaria.JPG" },
  { location: "Campo Grande Edifício NOS junto à estação de metro", latitude: "38.7595861", longitude: "-9.1569", latlong: "38° 45\' 34.51\" N | 9° 9\' 24.84\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_NOS.jpg" },
  { location: "Campo Pequeno Jardim Avenida da República Avenida João XXI", latitude: "38.741525", longitude: "-9.146266666666666", latlong: "38° 44\' 29.49\" N | 9° 8\' 46.56\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_campo_pequeno.jpg" },
  { location: "Carnide Estrada da Correia", latitude: "38.7602917", longitude: "-9.194505555555557", latlong: "38° 45\' 37.05\" N | 9° 11\' 40.22\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_carnide.JPG" },
  { location: "Belém Jerónimos Rua dos Jerónimos", latitude: "38.6984028", longitude: "-9.206063888888888", latlong: "38° 41\' 54.25\" N | 9° 12\' 21.83\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_belem.JPG" },
  { location: "Entrecampos Avenida da República Estação Avenida 5 de Outubro junto à Teleperformance Portugal", latitude: "38.7437833", longitude: "-9.149155555555556", latlong: "38° 44\' 37.62\" N | 9° 8\' 56.96\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_entrecampos.JPG" },
  { location: "Martim Moniz Escadinhas da Saúde", latitude: "38.7154861", longitude: "-9.13576111111111", latlong: "38° 42\' 55.75\" N | 9° 8\' 8.74\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_martim_moniz.jpg" },
  { location: "Parque das Nações FIL Alameda dos Oceanos", latitude: "38.7681361", longitude: "-9.093922222222222", latlong: "38° 46\' 5.29\" N | 9° 5\' 38.12\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_parque_nacoes_1.JPG" },
  { location: "Parque das Nações Gare do Oriente", latitude: "38.7678194", longitude: "-9.098058333333334", latlong: "38° 46\' 4.15\" N | 9° 5\' 53.01\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_parque_nacoes.JPG" },
  { location: "Ribeira das Naus Avenida Ribeira das Naus", latitude: "38.7056361", longitude: "-9.141091666666666", latlong: "38° 42\' 20.29\" N | 9° 8\' 27.93\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_ribeira_naus.jpg" },
  { location: "Rossio Rua Augusta Praça Dom Pedro IV", latitude: "38.7133667", longitude: "-9.138702777777777", latlong: "38° 42\' 48.12\" N | 9° 8\' 19.33\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_rossio.jpg" },
  { location: "Rua Viriato Maternidade Alfredo da Costa", latitude: "38.7325167", longitude: "-9.147580555555555", latlong: "38° 43\' 57.06\" N | 9° 8\' 51.29\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_maternidade.jpg" },
  { location: "Saldanha Praça Duque de Saldanha", latitude: "38.7340778", longitude: "-9.14543611111111", latlong: "38° 44\' 2.68\" N | 9° 8\' 43.57\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_saldanha.jpg" },
  { location: "Santa Apolónia Rua Caminhos de Ferro", latitude: "38.7134167", longitude: "-9.12315", latlong: "38° 42\' 48.30\" N | 9° 7\' 23.34\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_santa_apolonia.jpg" },
  { location: "Terreiro Paço Avenida Infante Dom Henrique", latitude: "38.7070917", longitude: "-9.133386111111111", latlong: "38° 42\' 25.53\" N | 9° 8\' 0.19\" W", img_address: "https://informacoeseservicos.lisboa.pt/fileadmin/espacos/imagens/bebedouro_praca_comercio.jpg" }
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
