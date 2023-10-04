const menuLinks = document.querySelectorAll('#side-menu > ul > li > a');
const menuItems = document.querySelectorAll('#side-menu > ul > li');

menuItems.forEach(item => {
  item.style.opacity = '1'; // tüm menülerin opaklığını %100'e ayarla
});

setTimeout(function () {
  menuItems.forEach(item => {
    item.classList.add('fade'); // menülerin opaklığını azaltan fade sınıfını ekle
    item.style.opacity = '0.5';
  });
}, 5000);

menuLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    // Seçilen menü öğesinin opaklığını %100'e ayarla
    const menuItem = link.parentNode;
    menuItem.style.opacity = '1';

    // Diğer menülerin opaklığını %50'ye ayarla
    menuLinks.forEach(otherLink => {
      const otherMenuItem = otherLink.parentNode;
      if (otherLink !== link) {
        otherMenuItem.style.opacity = '0.5';
      }
    });
  });
  link.addEventListener('mouseout', () => {
    menuItems.forEach(item => {
      item.style.opacity = '0.5'; // mouse menülerin üzerinden çıktığında tüm menülerin opaklığını tekrar %50'ye ayarla
    });
  });
});