(() => {
  const PRODUCTS = [
    {
      id: 'bathtub-spa',
      title: 'Cordless Bathtub Jet Spa With Bubble Mode',
      image: 'https://picksnest.com/wp-content/uploads/2026/10/ChatGPT-Image-Sep-11-2026-03_52_04-AM-1024x576.png',
      alt: 'Blue cordless bathtub jet spa resting beside a bathtub with water jets running',
      href: 'https://picksnest.com/cordless-bathtub-jet-spa-with-bubble-mode/',
      date: '2026-10-09',
      dateLabel: 'October 9, 2026',
      categories: ['Home Finds', 'Gadgets'],
      description: 'Add adjustable water jets or a bubble mode to a standard tub with a compact cordless bath spa.',
      keywords: 'bath spa bathroom self care relaxation wellness bubbles jets blue',
      badge: 'Just added',
    },
    {
      id: 'burger-press',
      title: 'Burger Patty Press With Freezer Storage',
      image: 'https://picksnest.com/wp-content/uploads/2026/10/ChatGPT-Image-Sep-15-2026-06_44_04-PM-1024x576.png',
      alt: 'Burger patties being shaped and stacked inside a lidded storage container',
      href: 'https://picksnest.com/burger-patty-press-with-freezer-storage/',
      date: '2026-10-09',
      dateLabel: 'October 9, 2026',
      categories: ['Kitchen Finds'],
      description: 'Shape, stack, and store burger patties together for a tidier meal-prep routine.',
      keywords: 'food cooking meal prep freezer burger meat grilling barbecue',
      badge: 'Just added',
    },
    {
      id: 'smart-toaster',
      title: 'Smart Two-Slice Toaster with Panini Mode',
      image: 'https://picksnest.com/wp-content/uploads/2026/10/ChatGPT-Image-Sep-11-2026-04_07_59-AM-1024x576.png',
      alt: 'Stainless steel touchscreen toaster displayed on a kitchen counter beside slices of bread',
      href: 'https://picksnest.com/smart-two-slice-toaster-with-panini-mode/',
      date: '2026-10-09',
      dateLabel: 'October 9, 2026',
      categories: ['Kitchen Finds'],
      description: 'A two-slice countertop toaster with a touchscreen and a panini setting for more than toast.',
      keywords: 'breakfast bread sandwich appliance countertop kitchen toast',
      badge: 'Just added',
    },
    {
      id: 'travel-dispenser',
      title: '4-in-1 Travel Toiletry Dispenser Bottle',
      image: 'https://picksnest.com/wp-content/uploads/2026/09/5-1024x576.png',
      alt: 'Pale green dispenser bottle beside makeup brushes and cosmetics on a marble vanity',
      href: 'https://picksnest.com/4-in-1-travel-toiletry-dispenser-bottle/',
      date: '2026-09-27',
      dateLabel: 'September 27, 2026',
      categories: ['Travel Finds', 'Gadgets'],
      description: 'Keep travel toiletries together in one compact dispenser designed for packing light.',
      keywords: 'travel toiletries bathroom beauty dispenser bottle packing carry on',
      badge: 'Travel pick',
    },
    {
      id: 'charging-station',
      title: '12-in-1 Desktop Charging Station with Retractable USB-C Chargers',
      image: 'https://picksnest.com/wp-content/uploads/2026/09/3-1024x576.png',
      alt: 'White desktop charging station with four front charging modules on a marble countertop',
      href: 'https://picksnest.com/12-in-1-desktop-charging-station-with-retractable-usb-c-chargers/',
      date: '2026-09-27',
      dateLabel: 'September 27, 2026',
      categories: ['Home Finds', 'Tech Finds'],
      description: 'Bring outlets, USB-C ports, and retractable charging cables together in one desktop hub.',
      keywords: 'desk office cable power usb charger phone tablet laptop workstation',
      badge: 'Tech pick',
    },
    {
      id: 'jar-opener',
      title: 'Under-Cabinet Jar Opener for Easier One-Handed Opening',
      image: 'https://picksnest.com/wp-content/uploads/2026/09/6.png',
      alt: 'Hands positioning a jar beneath an under-cabinet opener',
      href: 'https://picksnest.com/under-cabinet-jar-opener-for-easier-one-handed-opening/',
      date: '2026-09-27',
      dateLabel: 'September 27, 2026',
      categories: ['Kitchen Finds'],
      description: 'An under-cabinet jar opener designed to make stubborn lids easier to handle one-handed.',
      keywords: 'jar opener kitchen accessibility lids open canning',
      badge: 'Kitchen pick',
    },
    {
      id: 'cupcake-maker',
      title: 'Full-Size 12-Cup Cupcake Maker for Easy Home Baking',
      image: 'https://picksnest.com/wp-content/uploads/2026/09/4.png',
      alt: 'Open pink cupcake maker filled with assorted cupcakes on a kitchen countertop',
      href: 'https://picksnest.com/full-size-12-cup-cupcake-maker-for-easy-home-baking/',
      date: '2026-09-27',
      dateLabel: 'September 27, 2026',
      categories: ['Kitchen Finds'],
      description: 'Make a full batch of cupcakes at home with a dedicated countertop baking appliance.',
      keywords: 'baking dessert cake cupcakes kitchen appliance sweet treat',
      badge: 'Kitchen pick',
    },
    {
      id: 'multi-cooker',
      title: '9-in-1 Multi-Cooker with Automatic Stirring',
      image: 'https://picksnest.com/wp-content/uploads/2026/09/2.png',
      alt: 'Multi-cooker resting on a kitchen island with its lid in place',
      href: 'https://picksnest.com/9-in-1-multi-cooker-with-automatic-stirring/',
      date: '2026-09-27',
      dateLabel: 'September 27, 2026',
      categories: ['Kitchen Finds'],
      description: 'A multi-function countertop cooker with automatic stirring for more hands-off cooking.',
      keywords: 'cooking pot automatic stir cooker kitchen appliance meal prep',
      badge: 'Kitchen pick',
    },
    {
      id: 'mesh-food-covers',
      title: 'Pop-Up Mesh Food Covers for Outdoor Meals',
      image: 'https://picksnest.com/wp-content/uploads/2026/08/15.png',
      alt: 'Pop-up mesh food cover protecting a platter of food during an outdoor meal',
      href: 'https://picksnest.com/pop-up-mesh-food-covers-for-outdoor-meals/',
      date: '2026-08-12',
      dateLabel: 'August 12, 2026',
      categories: ['Home Finds', 'Outdoor Finds'],
      description: 'Cover serving dishes at picnics and outdoor meals while keeping the food easy to reach.',
      keywords: 'picnic barbecue patio garden dining cover food mesh summer',
      badge: 'Outdoor pick',
    },
    {
      id: 'round-tablecloth',
      title: 'Fitted Round Tablecloth for a Clean, Protected Table',
      image: 'https://picksnest.com/wp-content/uploads/2026/08/14.png',
      alt: 'Fitted round tablecloth covering a dining table in a cozy room',
      href: 'https://picksnest.com/fitted-round-tablecloth-for-a-clean-protected-table/',
      date: '2026-08-12',
      dateLabel: 'August 12, 2026',
      categories: ['Home Finds', 'Kitchen Finds'],
      description: 'A fitted table cover for round dining tables that helps keep the surface neat and protected.',
      keywords: 'dining room table cover cloth decor protection kitchen',
      badge: 'Home pick',
    },
    {
      id: 'crab-spoon-rest',
      title: 'Fun Crab-Shaped Spoon Rest That Also Helps Release Steam',
      image: 'https://picksnest.com/wp-content/uploads/2026/08/16.png',
      alt: 'Crab-shaped spoon rest holding a cooking spoon beside a pot',
      href: 'https://picksnest.com/fun-crab-shaped-spoon-rest-that-also-helps-release-steam/',
      date: '2026-08-12',
      dateLabel: 'August 12, 2026',
      categories: ['Kitchen Finds', 'Gadgets'],
      description: 'A playful spoon rest that props a pot lid open to help release steam while cooking.',
      keywords: 'pot lid cooking kitchen spoon holder utensils cute crab',
      badge: 'Kitchen pick',
    },
    {
      id: 'lemon-squeezer',
      title: 'Funny Pasta-Shaped Lemon Squeezer for Mess-Free Juicing',
      image: 'https://picksnest.com/wp-content/uploads/2026/08/13.png',
      alt: 'Pasta-shaped lemon squeezer being used over a glass on a kitchen counter',
      href: 'https://picksnest.com/funny-pasta-shaped-lemon-squeezer-for-mess-free-juicing/',
      date: '2026-08-12',
      dateLabel: 'August 12, 2026',
      categories: ['Kitchen Finds', 'Gadgets'],
      description: 'A quirky citrus tool for squeezing fresh lemon juice into drinks and recipes.',
      keywords: 'lemon citrus juice juicer pasta kitchen cooking drinks',
      badge: 'Kitchen pick',
    },
    {
      id: 'security-camera',
      title: 'Wireless 2K Outdoor Security Camera with Smart Detection',
      image: 'https://picksnest.com/wp-content/uploads/2026/06/11-1024x576.png',
      alt: 'Tapo MagCam outdoor security camera mounted above an exterior door',
      href: 'https://picksnest.com/tapo-magcam-2k-wireless-outdoor-security-camera/',
      date: '2026-06-21',
      dateLabel: 'June 21, 2026',
      categories: ['Home Finds', 'Outdoor Finds', 'Tech Finds'],
      description: 'A wireless outdoor camera with 2K video and smart detection features for a home setup.',
      keywords: 'security home safety wireless camera smart detection video tech',
      badge: 'Tech pick',
    },
    {
      id: 'portable-range-hood',
      title: 'Portable Range Hood for Indoor Cooking and BBQ',
      image: 'https://picksnest.com/wp-content/uploads/2026/06/6.png',
      alt: 'Portable range hood placed on a kitchen counter beside cooking accessories',
      href: 'https://picksnest.com/portable-range-hood-for-indoor-cooking-and-bbq/',
      date: '2026-06-21',
      dateLabel: 'June 21, 2026',
      categories: ['Kitchen Finds'],
      description: 'A compact range hood option for indoor cooking and countertop BBQ setups.',
      keywords: 'ventilation cooking smoke extractor bbq kitchen appliance',
      badge: 'Kitchen pick',
    },
    {
      id: 'ice-nugget-molds',
      title: 'Mini Ice Nugget Mold Set for Quick-Chilling Drinks',
      image: 'https://picksnest.com/wp-content/uploads/2026/06/7.png',
      alt: 'Mini ice nugget mold set stacked on a kitchen countertop',
      href: 'https://picksnest.com/mini-ice-nugget-mold-set-for-quick-chilling-drinks/',
      date: '2026-06-21',
      dateLabel: 'June 21, 2026',
      categories: ['Kitchen Finds', 'Gadgets'],
      description: 'Make small ice nuggets for chilling drinks quickly at home or when entertaining.',
      keywords: 'ice drink cold beverage summer freezer cocktail kitchen',
      badge: 'Kitchen pick',
    },
    {
      id: 'bamboo-board',
      title: 'Extra Large Bamboo Cutting Board for Kitchen Prep',
      image: 'https://picksnest.com/wp-content/uploads/2026/06/4.png',
      alt: 'Large bamboo cutting board positioned over a kitchen countertop',
      href: 'https://picksnest.com/extra-large-bamboo-cutting-board-for-kitchen-prep/',
      date: '2026-06-21',
      dateLabel: 'June 21, 2026',
      categories: ['Kitchen Finds'],
      description: 'A roomy bamboo board that gives you extra space for chopping and everyday prep.',
      keywords: 'chopping board butcher block wood prep countertop kitchen',
      badge: 'Kitchen pick',
    },
    {
      id: 'onion-slicer',
      title: 'Stainless Steel Onion Slicer Holder',
      image: 'https://picksnest.com/wp-content/uploads/2026/06/10.png',
      alt: 'Stainless steel onion holder with protective handle above a wooden cutting board',
      href: 'https://picksnest.com/stainless-steel-onion-slicer-holder/',
      date: '2026-06-21',
      dateLabel: 'June 21, 2026',
      categories: ['Kitchen Finds', 'Gadgets'],
      description: 'A stainless-steel guide designed to hold an onion steady while slicing.',
      keywords: 'vegetable cutter slicer chopping kitchen gadget onion holder',
      badge: 'Kitchen pick',
    },
    {
      id: 'fruit-washer',
      title: 'Fruit Washer and Spinner for Easy Produce Cleaning',
      image: 'https://picksnest.com/wp-content/uploads/2026/06/1-1.png',
      alt: 'Fruit washer and salad spinner with strawberries on a marble kitchen counter',
      href: 'https://picksnest.com/joymoop-fruit-washer/',
      date: '2026-06-21',
      dateLabel: 'June 21, 2026',
      categories: ['Kitchen Finds'],
      description: 'Rinse and spin fresh fruit and salad greens with one compact produce-cleaning tool.',
      keywords: 'wash rinse salad spinner vegetables berries produce kitchen',
      badge: 'Kitchen pick',
    },
    {
      id: 'egg-slicer',
      title: '3-in-1 Egg Slicer for Quick and Even Food Prep',
      image: 'https://picksnest.com/wp-content/uploads/2026/06/8-1024x576.png',
      alt: 'Multi-function egg slicer surrounded by sliced eggs and fresh salad ingredients',
      href: 'https://picksnest.com/craftycrocodile-egg-slicer/',
      date: '2026-06-21',
      dateLabel: 'June 21, 2026',
      categories: ['Kitchen Finds', 'Gadgets'],
      description: 'Slice, wedge, or dice eggs and other soft produce with a compact multi-mode prep tool.',
      keywords: 'egg food prep salad fruit vegetables slicer wedge dice kitchen',
      badge: 'Featured find',
    },
    {
      id: 'soda-can-lids',
      title: 'Reusable Soda Can Lids with Straw',
      image: 'https://picksnest.com/wp-content/uploads/2026/06/3-1024x576.png',
      alt: 'Reusable soda can lid with a straw attached to a drink can on a kitchen island',
      href: 'https://picksnest.com/dipesi-soda-can-lids-with-straw/',
      date: '2026-06-21',
      dateLabel: 'June 21, 2026',
      categories: ['Gadgets', 'Outdoor Finds', 'Travel Finds'],
      description: 'Add a reusable lid and straw to a canned drink for sipping at home or on the go.',
      keywords: 'drink beverage can soda straw reusable picnic camping travel',
      badge: 'Everyday pick',
    },
    {
      id: 'cocktail-maker',
      title: 'Smart Drink Maker for Cocktails and Mocktails',
      image: 'https://picksnest.com/wp-content/uploads/2026/06/5-1024x576.png',
      alt: 'Smart cocktail maker displaying a mixed drink on a modern kitchen island',
      href: 'https://picksnest.com/barsys-360-cocktail-maker-machine/',
      date: '2026-06-21',
      dateLabel: 'June 21, 2026',
      categories: ['Home Finds', 'Gadgets'],
      description: 'Explore a smart countertop drink maker for mixing cocktails and alcohol-free mocktails.',
      keywords: 'bar home entertaining party drinks hosting mixer cocktail mocktail',
      badge: 'Home pick',
    },
    {
      id: 'rechargeable-batteries',
      title: 'Long-Lasting USB Rechargeable AA Batteries',
      image: 'https://picksnest.com/wp-content/uploads/2026/06/2-1024x576.png',
      alt: 'USB rechargeable AA batteries stored in a clear protective case',
      href: 'https://picksnest.com/survival-frog-easypower-usb-aa-rechargeable-batteries/',
      date: '2026-06-21',
      dateLabel: 'June 21, 2026',
      categories: ['Home Finds', 'Gadgets'],
      description: 'A rechargeable AA battery set with USB charging and a clear case for storage.',
      keywords: 'power cell batteries usb charge rechargeable household devices',
      badge: 'Everyday pick',
    },
    {
      id: 'robotic-mower',
      title: 'Smart Robotic Lawn Mower with Bluetooth Control',
      image: 'https://picksnest.com/wp-content/uploads/2026/06/9.png',
      alt: 'Automatic robotic lawn mower positioned on a residential lawn',
      href: 'https://picksnest.com/gardena-sileno-minimo-robotic-lawn-mower/',
      date: '2026-06-21',
      dateLabel: 'June 21, 2026',
      categories: ['Home Finds', 'Outdoor Finds', 'Tech Finds'],
      description: 'A Bluetooth-controlled robotic mower for a more hands-off approach to lawn care.',
      keywords: 'garden lawn grass yard outdoor patio smart robot bluetooth',
      badge: 'Outdoor pick',
    },
    {
      id: 'laundry-basket',
      title: 'Multi-Layer Laundry Storage Basket with Wheels',
      image: 'https://picksnest.com/wp-content/uploads/2026/06/1-2.png',
      alt: 'Three-tier rolling laundry basket organizer in a modern laundry room',
      href: 'https://picksnest.com/multi-layer-laundry-basket/',
      date: '2026-06-21',
      dateLabel: 'June 21, 2026',
      categories: ['Home Finds'],
      description: 'A rolling, multi-tier laundry organizer to keep sorting and carrying in one place.',
      keywords: 'laundry clothes storage organizer hamper washing room wheels',
      badge: 'Home pick',
    },
  ];

  const CATEGORY_OPTIONS = [
    { id: 'all', label: 'All finds' },
    { id: 'Kitchen Finds', label: 'Kitchen' },
    { id: 'Home Finds', label: 'Home' },
    { id: 'Tech Finds', label: 'Tech' },
    { id: 'Outdoor Finds', label: 'Outdoor' },
    { id: 'Travel Finds', label: 'Travel' },
    { id: 'Gadgets', label: 'Gadgets' },
  ];
  const PAGE_SIZE = 9;
  const STORAGE_KEY = 'picksnest-saved-finds-v1';
  const productGrid = document.querySelector('#product-grid');
  const categoryFilters = document.querySelector('#category-filters');
  const emptyState = document.querySelector('#empty-state');
  const resultCount = document.querySelector('#result-count');
  const resultDescription = document.querySelector('#result-description');
  const activeFilters = document.querySelector('#active-filters');
  const loadMore = document.querySelector('#load-more');
  const loadMoreNote = document.querySelector('#load-more-note');
  const shopSearch = document.querySelector('#shop-search');
  const headerSearch = document.querySelector('#header-search');
  const savedFilter = document.querySelector('#saved-filter');
  const savedNav = document.querySelector('.saved-nav');
  const sortSelect = document.querySelector('#sort-select');
  const mobileNav = document.querySelector('#mobile-nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const dialog = document.querySelector('#product-dialog');
  let activeCategory = 'all';
  let query = '';
  let savedOnly = false;
  let visibleCount = PAGE_SIZE;
  let sortMode = 'latest';
  let savedIds = readSavedIds();

  function readSavedIds() {
    try {
      const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(parsed) ? parsed.filter((id) => PRODUCTS.some((product) => product.id === id)) : [];
    } catch {
      return [];
    }
  }

  function writeSavedIds() {
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds)); } catch { /* Saved picks still work for this page view. */ }
  }

  function normalize(value) {
    return value.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function countForCategory(categoryId) {
    if (categoryId === 'all') return PRODUCTS.length;
    return PRODUCTS.filter((product) => product.categories.includes(categoryId)).length;
  }

  function renderCategoryFilters() {
    categoryFilters.replaceChildren();
    CATEGORY_OPTIONS.forEach((category) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `filter-option${activeCategory === category.id ? ' active' : ''}`;
      button.setAttribute('aria-pressed', String(activeCategory === category.id));
      button.dataset.category = category.id;
      const name = document.createElement('span');
      name.textContent = category.label;
      const count = document.createElement('span');
      count.textContent = countForCategory(category.id);
      button.append(name, count);
      button.addEventListener('click', () => setCategory(category.id));
      categoryFilters.append(button);
    });
  }

  function renderCategoryCounts() {
    document.querySelectorAll('.category-tile[data-category]').forEach((tile) => {
      const count = tile.querySelector('[data-tile-count]');
      if (count) count.textContent = `${countForCategory(tile.dataset.category)} finds`;
    });
  }

  function getFilteredProducts() {
    const words = normalize(query).split(/\s+/).filter(Boolean);
    let filtered = PRODUCTS.filter((product) => {
      const inCategory = activeCategory === 'all' || product.categories.includes(activeCategory);
      const isSaved = !savedOnly || savedIds.includes(product.id);
      const searchable = normalize([
        product.title,
        product.description,
        product.categories.join(' '),
        product.keywords,
      ].join(' '));
      const matchesQuery = !words.length || words.every((word) => searchable.includes(word));
      return inCategory && isSaved && matchesQuery;
    });
    if (sortMode === 'az') filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    else filtered = [...filtered].sort((a, b) => b.date.localeCompare(a.date) || PRODUCTS.indexOf(a) - PRODUCTS.indexOf(b));
    return filtered;
  }

  function makeSvgHeart() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M20.3 8.8c0 4.3-8.3 10-8.3 10s-8.3-5.7-8.3-10A4.3 4.3 0 0 1 12 6.4a4.3 4.3 0 0 1 8.3 2.4Z');
    svg.append(path);
    return svg;
  }

  function createProductCard(product) {
    const article = document.createElement('article');
    article.className = 'product-card';
    article.dataset.productId = product.id;

    const visual = document.createElement('div');
    visual.className = 'product-visual';
    const imageLink = document.createElement('a');
    imageLink.href = product.href;
    imageLink.target = '_blank';
    imageLink.rel = 'noopener noreferrer';
    imageLink.setAttribute('aria-label', `Read the product guide for ${product.title}`);
    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.alt;
    image.loading = 'lazy';
    image.decoding = 'async';
    imageLink.append(image);

    const badge = document.createElement('span');
    badge.className = `product-badge${product.badge === 'Just added' ? ' is-new' : ''}`;
    badge.textContent = product.badge;
    visual.append(imageLink, badge);

    const saveButton = document.createElement('button');
    const isSaved = savedIds.includes(product.id);
    saveButton.type = 'button';
    saveButton.className = 'save-button';
    saveButton.setAttribute('aria-label', `${isSaved ? 'Remove' : 'Save'} ${product.title} ${isSaved ? 'from' : 'to'} saved picks`);
    saveButton.setAttribute('aria-pressed', String(isSaved));
    saveButton.dataset.save = product.id;
    saveButton.append(makeSvgHeart());
    visual.append(saveButton);

    const info = document.createElement('div');
    info.className = 'product-info';
    const categories = document.createElement('p');
    categories.className = 'product-categories';
    categories.textContent = product.categories.map((category) => category.replace(' Finds', '')).join('  /  ');
    const title = document.createElement('h3');
    title.className = 'product-title';
    const titleLink = document.createElement('a');
    titleLink.href = product.href;
    titleLink.target = '_blank';
    titleLink.rel = 'noopener noreferrer';
    titleLink.textContent = product.title;
    title.append(titleLink);
    const description = document.createElement('p');
    description.className = 'product-description';
    description.textContent = product.description;

    const footer = document.createElement('div');
    footer.className = 'product-card-footer';
    const date = document.createElement('time');
    date.className = 'product-date';
    date.dateTime = product.date;
    date.textContent = product.dateLabel;
    const quickView = document.createElement('button');
    quickView.type = 'button';
    quickView.className = 'quick-view-button';
    quickView.dataset.quickView = product.id;
    quickView.append(document.createTextNode('Quick look '));
    const arrow = document.createElement('span');
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↗';
    quickView.append(arrow);
    footer.append(date, quickView);
    info.append(categories, title, description, footer);
    article.append(visual, info);
    return article;
  }

  function updateActiveFilters() {
    activeFilters.replaceChildren();
    const filters = [];
    if (activeCategory !== 'all') {
      const category = CATEGORY_OPTIONS.find((item) => item.id === activeCategory);
      filters.push({ label: category?.label || activeCategory, type: 'category' });
    }
    if (query) filters.push({ label: `“${query}”`, type: 'query' });
    if (savedOnly) filters.push({ label: 'Saved picks', type: 'saved' });
    filters.forEach((filter) => {
      const chip = document.createElement('span');
      chip.className = 'active-filter';
      chip.append(document.createTextNode(filter.label));
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.setAttribute('aria-label', `Remove ${filter.label} filter`);
      remove.textContent = '×';
      remove.addEventListener('click', () => {
        if (filter.type === 'category') activeCategory = 'all';
        if (filter.type === 'query') {
          query = '';
          shopSearch.value = '';
          headerSearch.value = '';
        }
        if (filter.type === 'saved') savedOnly = false;
        visibleCount = PAGE_SIZE;
        render();
      });
      chip.append(remove);
      activeFilters.append(chip);
    });
  }

  function render() {
    renderCategoryFilters();
    renderCategoryCounts();
    const filtered = getFilteredProducts();
    const shown = filtered.slice(0, visibleCount);
    productGrid.replaceChildren(...shown.map(createProductCard));
    productGrid.hidden = filtered.length === 0;
    emptyState.hidden = filtered.length !== 0;
    loadMore.hidden = filtered.length <= visibleCount;
    const visibleLabel = filtered.length === 0 ? 'No finds' : `${filtered.length} ${filtered.length === 1 ? 'find' : 'finds'}`;
    resultCount.textContent = savedOnly ? `${visibleLabel} saved` : visibleLabel;
    if (query) resultDescription.textContent = `Matching “${query}”`;
    else if (activeCategory !== 'all') resultDescription.textContent = `${CATEGORY_OPTIONS.find((item) => item.id === activeCategory)?.label || activeCategory} collection`;
    else resultDescription.textContent = 'Useful finds for home and beyond.';
    loadMoreNote.textContent = filtered.length > 0 ? `Showing ${shown.length} of ${filtered.length} finds` : '';
    document.querySelector('#saved-filter-count').textContent = savedIds.length;
    document.querySelector('.saved-count').textContent = savedIds.length;
    document.querySelector('.saved-count').setAttribute('aria-label', `${savedIds.length} saved ${savedIds.length === 1 ? 'pick' : 'picks'}`);
    savedFilter.setAttribute('aria-pressed', String(savedOnly));
    savedNav.setAttribute('aria-pressed', String(savedOnly));
    updateActiveFilters();
    document.querySelectorAll('.category-nav [data-category-link]').forEach((link) => {
      const isActive = link.dataset.categoryLink === activeCategory;
      link.classList.toggle('active', isActive);
      if (isActive) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function setCategory(category) {
    activeCategory = CATEGORY_OPTIONS.some((item) => item.id === category) ? category : 'all';
    savedOnly = false;
    visibleCount = PAGE_SIZE;
    render();
  }

  function setSearch(value) {
    query = value.trim();
    shopSearch.value = value;
    headerSearch.value = value;
    visibleCount = PAGE_SIZE;
    render();
  }

  function resetAll() {
    activeCategory = 'all';
    query = '';
    savedOnly = false;
    visibleCount = PAGE_SIZE;
    sortMode = 'latest';
    shopSearch.value = '';
    headerSearch.value = '';
    sortSelect.value = 'latest';
    render();
  }

  function toggleSaved(id) {
    if (savedIds.includes(id)) savedIds = savedIds.filter((savedId) => savedId !== id);
    else savedIds = [...savedIds, id];
    writeSavedIds();
    render();
  }

  function showSavedPicks() {
    savedOnly = !savedOnly;
    activeCategory = 'all';
    visibleCount = PAGE_SIZE;
    render();
    document.querySelector('#shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function openProduct(id) {
    const product = PRODUCTS.find((item) => item.id === id);
    if (!product) return;
    const image = document.querySelector('#dialog-image');
    image.src = product.image;
    image.alt = product.alt;
    document.querySelector('#dialog-category').textContent = product.categories.map((category) => category.replace(' Finds', '')).join('  /  ');
    document.querySelector('#dialog-title').textContent = product.title;
    document.querySelector('#dialog-description').textContent = product.description;
    document.querySelector('#dialog-date').textContent = product.dateLabel;
    document.querySelector('#dialog-link').href = product.href;
    dialog.showModal();
    document.querySelector('.dialog-close').focus();
  }

  document.querySelectorAll('.category-tile[data-category]').forEach((tile) => {
    tile.addEventListener('click', () => {
      setCategory(tile.dataset.category);
      document.querySelector('#shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.addEventListener('click', (event) => {
    const categoryLink = event.target.closest('[data-category-link]');
    if (categoryLink) {
      event.preventDefault();
      setCategory(categoryLink.dataset.categoryLink);
      mobileNav.hidden = true;
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open menu');
      document.querySelector('#shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    const saveButton = event.target.closest('[data-save]');
    if (saveButton) {
      toggleSaved(saveButton.dataset.save);
      return;
    }
    const quickView = event.target.closest('[data-quick-view]');
    if (quickView) openProduct(quickView.dataset.quickView);
  });

  shopSearch.addEventListener('input', () => setSearch(shopSearch.value));
  headerSearch.addEventListener('input', () => {
    query = headerSearch.value.trim();
    shopSearch.value = headerSearch.value;
    visibleCount = PAGE_SIZE;
    render();
  });
  document.querySelector('#header-search-form').addEventListener('submit', (event) => {
    event.preventDefault();
    setSearch(headerSearch.value);
    document.querySelector('#shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
    shopSearch.focus({ preventScroll: true });
  });

  document.querySelectorAll('[data-query]').forEach((button) => {
    button.addEventListener('click', () => {
      setSearch(button.dataset.query);
      shopSearch.focus();
    });
  });
  document.querySelector('#clear-filters').addEventListener('click', resetAll);
  document.querySelector('#empty-reset').addEventListener('click', resetAll);
  loadMore.addEventListener('click', () => {
    visibleCount += PAGE_SIZE;
    render();
  });
  sortSelect.addEventListener('change', () => {
    sortMode = sortSelect.value;
    visibleCount = PAGE_SIZE;
    render();
  });
  savedFilter.addEventListener('click', () => {
    savedOnly = !savedOnly;
    visibleCount = PAGE_SIZE;
    render();
  });
  savedNav.addEventListener('click', showSavedPicks);

  menuToggle.addEventListener('click', () => {
    const open = mobileNav.hidden;
    mobileNav.hidden = !open;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  document.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      document.querySelector('#shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.setTimeout(() => shopSearch.focus({ preventScroll: true }), 250);
    }
    if (event.key === 'Escape') {
      mobileNav.hidden = true;
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open menu');
    }
  });

  render();
})();
