function searchOnWebsite(query) {
    const elements = document.getElementsByTagName('*');
  
    const results = [];
  
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
  
      if (element.innerText.includes(query)) {
        results.push(element);
      }
    }
    
    return results;
}
  

function displayResults(results) {
    const container = document.getElementById('search-results');
  
    container.innerHTML = ''; 

    if (results.length === 0) {
      container.innerText = 'No results found.';
    } else {
      for (let i = 0; i < results.length; i++) {
        const result = results[i];
  
        const resultElement = document.createElement('div');
        resultElement.innerText = result.innerText;
  
        container.appendChild(resultElement);
      }
    }
}
  

const searchOnClick = function() {
    const input = document.getElementById('search-input');
    const query = input.value;
  
    const results = searchOnWebsite(query);
  
    displayResults(results);
};  