let menu_mobile =  document.querySelector(".dropdown-menu");
let data_menu_target = menu_mobile.getAttribute('data-target');
let menu_target = document.getElementById(data_menu_target)
console.log(menu_target);
menu_mobile.appendChild(menu_target)
let menu_mobile_icon = document.querySelector(".menu-mobile .menu-mobile-icon");
menu_mobile_icon.onclick = function(){
    if(menu_mobile.style.display == 'none'){
        menu_mobile.style.display = 'block';
        menu_mobile.classList.add("active");
    }
    else{
        menu_mobile.style.display = 'none';
        menu_mobile.classList.remove("active");

    }
}