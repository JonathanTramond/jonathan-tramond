// toggle content on index.html

function toggleContent(mySection) {
    var content = document.querySelector('.'+mySection+' div');
    var icon = document.querySelector('.'+mySection+' button .fa-chevron-down');

    if (content.classList.contains('collapsed')) {
      content.classList.remove('collapsed');
    } else {
      content.classList.add('collapsed');
    }

    if (!icon.classList.contains('rotate') && !icon.classList.contains('rotate-back')) {
      icon.classList.add('rotate');
    } else if (icon.classList.contains('rotate')) {
      icon.classList.remove('rotate');
      icon.classList.add('rotate-back');
    } else if (icon.classList.contains('rotate-back')) {
      icon.classList.remove('rotate-back');
      icon.classList.add('rotate');
    }
  }