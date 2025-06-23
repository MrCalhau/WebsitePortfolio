function populateBio() {
  const bioContainerMobile = document.querySelector('.mobile_bio');
  const bioContainerDesktop = document.querySelector('.desktop_bio');

  if (!bioContainerMobile && !bioContainerDesktop) {
    console.error('Error: No bio containers found!');
    return;
  }

  const bioArray = aboutMe_content.bio;
  const contacts = aboutMe_content.contacts;

  // Helper: fill bio content into given container
  function fillBio(container) {
    // Clear it first
    container.innerHTML = '';

    // Add paragraphs
    bioArray.forEach(paragraph => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      container.appendChild(p);
    });

    // Add contacts
    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact_links';

    // Instagram
    const instaLink = document.createElement('a');
    instaLink.href = contacts.insta.link_name;
    instaLink.target = '_blank';
    const instaImg = document.createElement('img');
    instaImg.src = contacts.insta.img_link;
    instaImg.alt = 'Instagram';
    instaLink.appendChild(instaImg);

    // Email
    const emailLink = document.createElement('a');
    emailLink.href = contacts.email.link_name;
    const emailImg = document.createElement('img');
    emailImg.src = contacts.email.img_link;
    emailImg.alt = 'Email';
    emailLink.appendChild(emailImg);

    contactDiv.appendChild(instaLink);
    contactDiv.appendChild(emailLink);

    container.appendChild(contactDiv);
  }

  // Fill both if they exist
  if (bioContainerMobile) fillBio(bioContainerMobile);
  if (bioContainerDesktop) fillBio(bioContainerDesktop);
}
