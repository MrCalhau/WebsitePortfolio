document.addEventListener('DOMContentLoaded', function() {
  populateBio();
  populateWorkGrid();
});





function populateWorkGrid() {
  const work_grid = document.querySelector('#work .work_grid');

  // Add project items first
  projectsList.forEach((proj, i) => {
    const img_container = document.createElement('div');
    img_container.className = 'work_img_container';
    img_container.setAttribute('data-title', proj.title || '');
    img_container.setAttribute('data-subtitle', proj.subtitle || '');
    img_container.setAttribute('data-tags', (proj.filters || []).join(','));
    img_container.setAttribute('data-searchkeys', proj.searchkeys || '');
    img_container.setAttribute('onclick', `update_doc_window(${i})`);

    const img = document.createElement('img');
    img.className = 'work_img';
    img.src = proj.images[0];
    img.alt = `${proj.title} - ${proj.subtitle}`;

    const img_overlay = document.createElement('div');
    img_overlay.className = 'work_img_overlay';

    const title = document.createElement('div');
    title.className = 'work_title';
    title.textContent = proj.title;

    const subtitle = document.createElement('div');
    subtitle.className = 'work_subtitle';
    subtitle.textContent = proj.subtitle;

    img_overlay.appendChild(title);
    img_overlay.appendChild(subtitle);

    img_container.appendChild(img);
    img_container.appendChild(img_overlay);

    work_grid.appendChild(img_container);
  });

  // Append 3 dummy divs at the very end of work_grid
  for (let j = 0; j < 3; j++) {
    const dummy = document.createElement('div');
    dummy.className = 'work_img_container dummy';

    // Style them so they occupy space but look distinct (optional)
    dummy.style.width = '10dvh'; 
    dummy.style.height = '10dvh';
    dummy.style.opacity = '0'; // Invisible but occupies space
    dummy.style.pointerEvents = 'none'; // So it doesn't block clicks or hovers



    work_grid.appendChild(dummy);
  }
}

