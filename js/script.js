const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('[data-filter]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach((filterButton) => {
      filterButton.classList.remove('filter-active');
    });

    button.classList.add('filter-active');
    const filter = button.dataset.filter;

    document.querySelectorAll('.project-card').forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
});

const lightbox = document.getElementById('lightbox');
const lightboxTitle = document.getElementById('lightboxTitle');
const closeLightbox = document.getElementById('closeLightbox');

if (lightbox && lightboxTitle && closeLightbox) {
  document.querySelectorAll('[data-lightbox]').forEach((item) => {
    item.addEventListener('click', () => {
      lightboxTitle.textContent = item.dataset.lightbox;
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
      closeLightbox.focus();
    });
  });

  const hideLightbox = () => {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
  };

  closeLightbox.addEventListener('click', hideLightbox);

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      hideLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !lightbox.classList.contains('hidden')) {
      hideLightbox();
    }
  });
}

const contactForm = document.getElementById('contactForm');
const submitButton = document.getElementById('submitButton');
const formStatus = document.getElementById('formStatus');

if (contactForm && submitButton && formStatus) {
  contactForm.addEventListener('input', () => {
    submitButton.disabled = !contactForm.checkValidity();
  });

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    const whatsappMessage = `Olá, Kátia! Vi seu portfólio e Gostaria de conversar sobre um projeto.

Nome: ${name}
E-mail: ${email}

Mensagem:
${message}`;

    const whatsappUrl = `https://wa.me/5511930752218?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    formStatus.textContent = 'Tudo certo! O WhatsApp foi aberto com sua mensagem preenchida.';
    contactForm.reset();
    submitButton.disabled = true;
  });
}

function downloadCV() {
  const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << >> >>
endobj
4 0 obj
<< /Length 72 >>
stream
BT /F1 24 Tf 72 700 Td (Katia Reis - Front-end Developer) Tj ET
endstream
endobj
trailer
<< /Root 1 0 R >>
%%EOF`;

  const blob = new Blob([pdf], {
    type: 'application/pdf'
  });
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = 'katia-reis-cv.pdf';
  downloadLink.click();
  URL.revokeObjectURL(downloadLink.href);
}


