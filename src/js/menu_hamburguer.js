const menuList = document.querySelector('#menu_list');
const menuIcon = document.querySelector("#menu_icon");




menuIcon.addEventListener('click', () => {
   let menuListDisplay = Object.values(menuList.classList);
   if (menuListDisplay.includes('display_none')){
      menuIcon.textContent = 'close';
      menuList.classList.remove('display_none');
      menuList.classList.add('display_flex')

   } else{
      console.log("ok");
      menuIcon.textContent = 'menu';
      menuList.classList.remove('display_flex');
      menuList.classList.add('display_none')
   }
});