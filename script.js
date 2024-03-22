function search() {
  // Récupérer le terme de recherche depuis l'élément avec l'ID 'searchInput'
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();

  // Récupérer le contenu de la page
  const pageContent = document.body.innerText.toLowerCase();

  // Effectuer la recherche
  const searchResult = findOccurences(pageContent, searchTerm);

  // Afficher le ou les résultats
  displayResult(searchResult);
}

// Fonction pour trouver toutes les occurences d'un termes dans une chaine de caractère "string"
function findOccurrences(content, term) {
  const results = [];
  let index = content.indexOf(term);

  while (index !== -1) {
    results.push(index);
    index = content.indexOf(term, index + 1);

    return results;
  }
}

// Fonction pour afficher les résultats de la recherche
function displayResults(results) {
  const searchResultsContainer = document.getElementById('searchResults');

  // Effacer les résultats précédents
  searchResultsContainer.innerHTML = '';

  // Afficher les résultats
  if (results.length === 0) {
    searchResultsContainer.innerHTML = '<p>Aucune correspondance trouvée.</p>';
  } else {
    results.forEach((position, index) => {
      const resultElement = document.createElement('p');
      resultElement.textContent = `Correspondance ${index + 1} à la position ${position}.`;
      searchResultsContainer.appendChild(resultElement);
    });
  }
}