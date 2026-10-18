function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}

// Builds the address on click so it never appears as text or in the page source.
function sendEmail(subject) {
  const address = ['tanmay', 'unitedsmilealliance.com'].join('@');
  window.location.href = 'mailto:' + address + (subject ? '?subject=' + encodeURIComponent(subject) : '');
}

function copyLink(button, url) {
  const label = button.querySelector('span');
  const showCopied = () => {
    label.textContent = 'Link copied';
    setTimeout(() => { label.textContent = 'Copy link'; }, 2000);
  };
  // Without clipboard access, show the link so it can be copied by hand.
  const showLink = () => window.prompt('Copy this link:', url);
  if (!navigator.clipboard) { showLink(); return; }
  navigator.clipboard.writeText(url).then(showCopied, showLink);
}
