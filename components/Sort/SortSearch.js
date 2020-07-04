let filter = function () {
  let input = document.getElementById('filter-search');

  input.addEventListener('keyup', function () {
    let filter = input.value.toLowerCase(),
      filterElements = document.querySelectorAll('.products-element');
      

    filterElements.forEach((item) => {
        let at = item.getAttribute('data-name'); 
        
      if (at.toLowerCase().indexOf(filter) > -1) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
};

filter();
