const gridScroll = document.querySelector('#work .scroll_container');
const docScroll = document.querySelector('.desktop_doc_window .scroll_container');

function setHorizontalScroll(id) {
  docScroll.scrollLeft = 0;
  console.log(`setHorizontalScroll called for ${id}`);

  if (id === "work" && gridScroll) {
    gridScroll.addEventListener('wheel', (evt) => {
      evt.preventDefault();
      gridScroll.scrollBy({
        left: evt.deltaY * 3,  // Optional: multiply for desired speed
        behavior: 'smooth'
      });
    });
  } else if (id === "doc" && docScroll) {
    docScroll.addEventListener('wheel', (evt) => {
      evt.preventDefault();
      docScroll.scrollBy({
        left: evt.deltaY * 3,  // same idea
        behavior: 'smooth'
      });
    });
  }
}


// ✅ Use aspect-ratio to detect desktop-ish layout
const isPortraitOrSquare = window.matchMedia('(max-aspect-ratio: 1/1)');

if (!isPortraitOrSquare.matches) {
  // Only attach horizontal scroll for landscape / wide screens
  setHorizontalScroll("work");
}

// Optional: expose helper
window.setHorizontalScroll = setHorizontalScroll;



