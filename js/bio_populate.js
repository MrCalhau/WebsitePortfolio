function populateBio() {
  const bioContainerMobile = document.querySelector('.mobile_bio');
  const bioContainerDesktop = document.querySelector('.desktop_bio');
  const contactsContainerMobile = document.querySelector('.mobile_contacts_box');

  if (!bioContainerMobile && !bioContainerDesktop) {
    console.error('Error: No bio containers found!');
    return;
  }

  const bioArray = aboutMe_content.bio;
  const contacts = aboutMe_content.contacts;

  // Helper: fill bio content into given container
  function fillBio(container) {
    container.innerHTML = '';

    const bio_container = document.createElement('div');
    bio_container.className = "bio_container";

    bioArray.forEach(paragraph => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      bio_container.appendChild(p);
    });

    container.appendChild(bio_container);
  }

  // Helper: create a new contact_links div
  function createContactsDiv() {
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

    return contactDiv;
  }

  // Fill bio text
  if (bioContainerMobile) fillBio(bioContainerMobile);
  if (bioContainerDesktop) fillBio(bioContainerDesktop);

  // Clear & fill contacts in each container separately
  if (contactsContainerMobile) {
    contactsContainerMobile.innerHTML = '';
    contactsContainerMobile.appendChild(createContactsDiv());
  }

  if (bioContainerDesktop) {
    bioContainerDesktop.appendChild(createContactsDiv());
  }
}
