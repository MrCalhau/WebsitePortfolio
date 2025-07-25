// doc.js
const mobileDocWindow = document.querySelector('.mobile_doc_window');
const desktopDocWindow = document.querySelector('.desktop_doc_window');
const desktopbioSearch = document.querySelector('.desktop_bio_search');

function mobile_close_doc_window() {
  mobileDocWindow.classList.remove('open');
}

function desktop_close_doc_window() {
  desktopDocWindow.classList.remove('open');
  desktopbioSearch.classList.remove('fullclose');
  desktopbioSearch.classList.remove('active');
  // ❌ NO NEED to call setHorizontalScroll("work") anymore
}

function update_doc_window(index) {
  console.log(`Populating doc window for project index: ${index}`);
  const project = projectsList[index];

  const docGrids = document.querySelectorAll('.doc_grid');
  if (!docGrids.length) {
    console.error('No .doc_grid elements found!');
    return;
  }

  

  docGrids.forEach(docGrid => {
    docGrid.innerHTML = '';

    const titleBox = document.createElement('div');
    titleBox.classList.add('title_box');

    const title = document.createElement('div');
    title.classList.add('doc_title');
    title.textContent = project.title;
    titleBox.appendChild(title);

    const subtitle = document.createElement('div');
    subtitle.classList.add('doc_subtitle');
    subtitle.textContent = project.subtitle;
    titleBox.appendChild(subtitle);

    docGrid.appendChild(titleBox);

    const flex_text = document.createElement('div');
    project.text.forEach(obj => {
      for (const key in obj) {
        const pBlock = document.createElement('div');
        pBlock.classList.add('text_block');

        const p = document.createElement('p');
        p.textContent = obj[key];
        pBlock.appendChild(p);


        flex_text.appendChild(pBlock);
      }
    });

    docGrid.appendChild(flex_text);

    if (project.credits && project.credits.length > 0) {
      const creditsBox = document.createElement('div');
      creditsBox.classList.add('credits_box');

      project.credits.forEach(credit => {
        const a = document.createElement('a');
        a.href = credit.link;
        a.textContent = credit.text;
        a.target = '_blank';
        a.classList.add('credit_link');
        creditsBox.appendChild(a);
      });

      docGrid.appendChild(creditsBox);
    }

if (project.video && project.video.length > 0) {
  const videoBox = document.createElement('div');
  videoBox.classList.add('video_box');

  project.video.forEach(src => {
    const videoId = getYouTubeVideoID(src);
    if (videoId) {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.frameBorder = "0";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      videoBox.appendChild(iframe);
    } else {
      console.warn(`Invalid YouTube URL: ${src}`);
    }
  });

  docGrid.appendChild(videoBox);
}


    project.images.forEach(url => {
      const img = document.createElement('img');
      img.src = url;
      img.alt = project.title;
      docGrid.appendChild(img);
    });
    
  });

  // ✅ NO NEED to call setHorizontalScroll("doc")
  mobileDocWindow.classList.add('open');
  desktopDocWindow.classList.add('open');
  desktopbioSearch.classList.add('fullclose');
  setHorizontalScroll("doc");
  reset_vertical_scroll();
}

window.update_doc_window = update_doc_window;



function getYouTubeVideoID(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}