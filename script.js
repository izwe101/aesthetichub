document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.hdr');
  const introText = document.getElementById('introText');
  const photoGrid = document.getElementById('photoGrid');
  const menuButton = document.getElementById('menuButton');
  const menuPanel = document.getElementById('menuPanel');

  if (header) {
    header.addEventListener('click', () => {
      header.style.transform = 'scale(1.02)';
      setTimeout(() => {
        header.style.transform = 'scale(1)';
      }, 200);
    });
  }

  if (menuButton && menuPanel) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuPanel.hidden;
      menuPanel.hidden = !isOpen;
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const introLines = [
    `My personal Mood board site. 
    featuring some of my fav anime visuals `,
   
    'designed by izwe icorpororation.',
    
  ];

  const typingSpeed = 55;
  const erasingSpeed = 40;
  const pauseTime = 4000;

  let lineIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeLoop() {
    if (!introText) return;

    const currentLine = introLines[lineIndex];

    if (!isDeleting && charIndex < currentLine.length) {
      introText.innerHTML = `${currentLine.slice(0, charIndex + 1)}<span class="cursor">|</span>`;
      charIndex++;
      setTimeout(typeLoop, typingSpeed);
      return;
    }

    if (!isDeleting && charIndex === currentLine.length) {
      setTimeout(() => {
        isDeleting = true;
        typeLoop();
      }, pauseTime);
      return;
    }

    if (isDeleting && charIndex > 0) {
      introText.innerHTML = `${currentLine.slice(0, charIndex - 1)}<span class="cursor">|</span>`;
      charIndex--;
      setTimeout(typeLoop, erasingSpeed);
      return;
    }

    isDeleting = false;
    charIndex = 0;
    lineIndex = (lineIndex + 1) % introLines.length;
    typeLoop();
  }

  if (photoGrid) {
    const mediaItems = [
      'imgs/1.jfif',
      'imgs/2.gif',
      'imgs/3.jfif',
      'imgs/4.gif',
      'imgs/5.gif',
      'imgs/6.jfif',
      'imgs/7.gif',
      'imgs/8.jfif',
      'imgs/9.gif',
      'imgs/10.jfif',
        'imgs/11.jfif',
        'imgs/12.jfif',
       
    ];

    for (let i = 0; i < 12; i++) {
      const tile = document.createElement('div');
      tile.className = 'gallery-tile';

      const image = document.createElement('img');
      image.src = mediaItems[i % mediaItems.length];
      image.alt = `Gallery tile ${i + 1}`;
      tile.appendChild(image);
      photoGrid.appendChild(tile);
    }
  }

  typeLoop();
});
