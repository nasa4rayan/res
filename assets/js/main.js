const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggleBtn && navLinks) {
  toggleBtn.addEventListener('click', () => navLinks.classList.toggle('show'));
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.18 });

document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

const menuItems = [
  ['EXPRESS', '48DH', 'Petit Déjeuner', 'Boisson chaude, eau minérale, jus d\'orange, pain au chocolat ou crêpe, Nutella, Yarout'],
  ['MAROCAIN', '44DH', 'Petit Déjeuner', 'Boisson chaude, eau minérale, jus d\'orange, harcha, meloui, pain grillé, jben beldi, amlou, Yarout'],
  ['TRADITIONNEL', '48DH', 'Petit Déjeuner', 'Boisson chaude, eau minérale, jus d\'orange, pain, harcha, fromage rouge, jben beldi, Yarout'],
  ['PARISIEN', '59DH', 'Petit Déjeuner', 'Boisson chaude, eau minérale, jus d\'orange, toast aux oeufs, fromage rouge, dinde fumée, Yarout'],
  ['LA CÔTE', '55DH', 'Petit Déjeuner', 'Boisson chaude, eau minérale, jus d\'orange, pain, oeuf beldi, jben beldi, fromage rouge'],
  ['ESPAGNOL', '48DH', 'Petit Déjeuner', 'Boisson chaude, eau minérale, jus d\'orange, purée de tomates, pain grillé, fromage rouge, dinde fumée'],
  ['Tajine Khliee', '38DH', 'À LA CARTE', 'Plat maison marocain traditionnel'],
  ['Omlette Nature', '22DH', 'À LA CARTE', 'Oeufs frais classiques'],
  ['Omlette Champignons Fromage', '28DH', 'À LA CARTE', 'Champignons et fromage fondant'],
  ['Omlette Fromage Jambon', '30DH', 'À LA CARTE', 'Fromage, jambon et herbes'],
  ['Omlette Crevette Fromage', '35DH', 'À LA CARTE', 'Crevette poêlée et fromage'],
  ['Omlette Fromage', '25DH', 'À LA CARTE', 'Version simple fromage'],
  ['Toast Fromage', '15DH', 'À LA CARTE', 'Toast croustillant au fromage'],
  ['Toast Fromage Jambon', '20DH', 'À LA CARTE', 'Toast fromage et jambon'],
  ['2 Oeufs au Plat', '22DH', 'À LA CARTE', 'Deux oeufs au plat'],
  ['Croque', '38DH', 'À LA CARTE', 'Croque gourmand signature'],
  ['Jus Orange', '22DH', 'Jus', 'Orange frais pressé'],
  ['Jus Citron Gingembre', '25DH', 'Jus', 'Citron frais et gingembre'],
  ['Jus Citron', '20DH', 'Jus', 'Citron frais'],
  ['Jus Pomme Lait', '22DH', 'Jus', 'Pomme et lait'],
  ['Jus Banane Lait', '22DH', 'Jus', 'Banane et lait'],
  ['Jus Avocat Lait', '32DH', 'Jus', 'Avocat et lait'],
  ['Jus Papaye', '30DH', 'Jus', 'Papaye fraîche'],
  ['Jus Mangue', '35DH', 'Jus', 'Mangue fraîche'],
  ['Jus Avocat Orange', '35DH', 'Jus', 'Avocat et orange'],
  ['Jus Avocat Fruits Secs', '38DH', 'Jus', 'Avocat et fruits secs'],
  ['Café Noir', '15DH', 'Boissons Chaudes', 'Expresso intense'],
  ['Lait', '18DH', 'Boissons Chaudes', 'Lait chaud ou froid'],
  ['Café Crème', '15DH', 'Boissons Chaudes', 'Café onctueux'],
  ['Café Américain', '18DH', 'Boissons Chaudes', 'Long coffee'],
  ['Thé Verveine', '17DH', 'Boissons Chaudes', 'Infusion verveine'],
  ['Thé au Lait', '17DH', 'Boissons Chaudes', 'Thé traditionnel au lait'],
  ['Lait Chaud', '15DH', 'Boissons Chaudes', 'Lait chaud'],
  ['Lait Froid', '15DH', 'Boissons Chaudes', 'Lait froid'],
  ['Chocolat Chaud', '18DH', 'Boissons Chaudes', 'Chocolat riche'],
  ['Thé Marocain', '15DH', 'Boissons Chaudes', 'Thé à la menthe'],
  ['Cappuccino', '24DH', 'Boissons Chaudes', 'Cappuccino italien'],
  ['Crêpes Sucrées Signature', '32DH', 'Crêpes Sucrées', 'Nutella, fruits, caramel'],
  ['Crêpes Salées Maison', '39DH', 'Crêpes Salées', 'Fromage, dinde fumée, légumes'],
  ['Gaufres Gourmandes', '30DH', 'Gaufres', 'Gaufres dorées et toppings'],
  ['Pancakes Miel & Fruits', '34DH', 'Pancakes', 'Pancakes fluffy maison'],
  ['Milkshake Vanille', '28DH', 'Milkshakes', 'Vanille crémeuse'],
  ['Mojito Classique', '28DH', 'Mojito', 'Menthe et citron'],
  ['Smoothie Tropical', '30DH', 'Smoothies', 'Mix fruits exotiques']
];

const foodImages = [
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1000&q=80'
];

const menuContainer = document.querySelector('#menuGrid');
if (menuContainer) {
  const filters = [...new Set(menuItems.map((item) => item[2]))];
  const controls = document.querySelector('#menuFilters');

  const renderMenu = (category = 'Tous') => {
    menuContainer.innerHTML = '';
    menuItems.filter((item) => category === 'Tous' || item[2] === category).forEach((item, i) => {
      const card = document.createElement('article');
      card.className = 'card menu-card fade-up';
      card.innerHTML = `
        <img src="${foodImages[i % foodImages.length]}" alt="${item[0]}">
        <div class="card-body">
          <div class="menu-meta">
            <span class="category-pill">${item[2]}</span>
            <span class="price">${item[1]}</span>
          </div>
          <h3>${item[0]}</h3>
          <p>${item[3]}</p>
        </div>
      `;
      menuContainer.appendChild(card);
    });
    document.querySelectorAll('#menuGrid .fade-up').forEach((el) => observer.observe(el));
  };

  const addBtn = (label, active = false) => {
    const btn = document.createElement('button');
    btn.className = `filter-btn ${active ? 'active' : ''}`;
    btn.textContent = label;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(label);
    });
    controls.appendChild(btn);
  };

  addBtn('Tous', true);
  filters.forEach((f) => addBtn(f));
  renderMenu();
}

const lightbox = document.querySelector('#lightbox');
if (lightbox) {
  document.querySelectorAll('[data-lightbox]').forEach((img) => {
    img.addEventListener('click', () => {
      lightbox.querySelector('img').src = img.src;
      lightbox.classList.add('show');
    });
  });
  lightbox.addEventListener('click', () => lightbox.classList.remove('show'));
}
