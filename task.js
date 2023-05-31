const groupLabels = document.querySelectorAll('.interests_main > ul > li > label > input');

groupLabels.forEach(label => {
  label.addEventListener('click', () => {
    const parentLi = label.parentNode.parentNode;
    const childItems = parentLi.querySelectorAll('.interests_active input');
    
    if (label.checked) {
        childItems.forEach(item => {
            item.checked = true;
          });
    } else {
        childItems.forEach(item => {
            item.checked = false;
          });
    };
  });
});