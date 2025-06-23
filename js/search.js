const bioSearch = document.querySelector('.desktop_bio_search');
const mobileSearchPanel = document.querySelector('.mobile_doc_window');


document.querySelectorAll('.search_filter').forEach(filter => {
  filter.addEventListener('click', () => {
    filter.classList.toggle('active');
  });
});


function open_biosearch() {
  if (bioSearch) {
    bioSearch.classList.toggle('active');
    console.log("Desktop search toggled");
  }
}




// ---------------------------
// 1) SELECTORS FOR BOTH VIEWS
const searchInputs = document.querySelectorAll('.search_input input[type="text"]');
const filterLabels = document.querySelectorAll('.filter-button');
const filterInputs = document.querySelectorAll('.filter-button input[type="checkbox"]');
const workGrid = document.querySelector('.work_grid');

// ---------------------------


// ---------------------------
// 3) LISTEN FOR SEARCH + FILTER CHANGES
searchInputs.forEach(input => input.addEventListener('input', updateWorkGrid));
filterInputs.forEach(input => input.addEventListener('change', updateWorkGrid));

// ---------------------------
// 4) MAIN FILTER FUNCTION
function updateWorkGrid() {
  // Use the active search input: take the first non-empty
  let searchTerm = '';
  searchInputs.forEach(input => {
    if (input.value.trim()) searchTerm = input.value.trim().toLowerCase();
  });

  // Get active filter labels (checkboxes checked)
  const activeFilters = Array.from(filterInputs)
    .filter(input => input.checked)
    .map(input => input.parentElement.textContent.trim().toLowerCase());

  // Filter all work cards by title + subtitle + tags + searchkeys
  const allCards = workGrid.querySelectorAll('.work_img_container');
  allCards.forEach(card => {
    const title = card.getAttribute('data-title')?.toLowerCase() || '';
    const subtitle = card.getAttribute('data-subtitle')?.toLowerCase() || '';
    const tags = card.getAttribute('data-tags')?.toLowerCase() || '';
    const searchkeys = card.getAttribute('data-searchkeys')?.toLowerCase() || '';

    const matchesSearch = !searchTerm ||
      title.includes(searchTerm) ||
      subtitle.includes(searchTerm) ||
      tags.includes(searchTerm) ||
      searchkeys.includes(searchTerm);

    const matchesFilter = activeFilters.length === 0 ||
      activeFilters.some(filter => tags.includes(filter));

    if (matchesSearch && matchesFilter) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}


// ---------------------------
// 5) INITIALIZE ON PAGE LOAD
updateWorkGrid();

function open_search_window() {
    const panel = document.querySelector('.mobile_doc_window');
    panel.classList.toggle('active');
}


