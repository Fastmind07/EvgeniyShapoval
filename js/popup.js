let link = document.querySelector(".login-link");
let popup = document.querySelector(".modal-login");
let close = document.querySelector(".modal-close");
let login = popup.querySelector('.login-icon-user')
let form = popup.querySelector('form');
let password = popup.querySelector('.login-icon-password');
let isStorageSupport = true;
let storage = "";


        link.addEventListener("click", function(evt){
            evt.preventDefault();
popup.classList.add('modal-show');
if(storage){
    login.value=storage;
    password.focus();
}else{
    login.focus();
}
        });
        close.addEventListener("click", function(evt){
            evt.preventDefault();
popup.classList.remove('modal-show');

popup.classList.remove('modal-error');
});

form.addEventListener("submit",function(evt){
  if(!login.value || !password.value){  
      evt.preventDefault(); 
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
}else{
    evt.preventDefault();
    if(isStorageSupport){
        localStorage.setItem("login", login.value);
    }
    
}
    
   
});
try{
    storage=localStorage.getItem("login")
    }catch(err){
        isStorageSupport = false;
        
    }
    window.addEventListener("keydown",function(evt){
        if(evt.keyCode === 27){
            if(popup.classList.contains("modal-show")){
                evt.preventDefault();
                popup.classList.remove('modal-show');
                popup.classList.remove('modal-error');
            }

        }
    })
/*Popup-map*/
let mapactive = document.querySelector('.map-react');
let maplittleactive = document.querySelector('.map-littlereact')
let popupMap = document.querySelector('.modal-map');
let mapClose = document.querySelector('.modal-close-map')
if(mapactive){
    mapactive.addEventListener("click", function(evt){
    evt.preventDefault();
    popupMap.classList.add('modal-show');
});
}
maplittleactive.addEventListener("click", function(evt){
    evt.preventDefault();
    popupMap.classList.add('modal-show');
});
window.addEventListener("keydown",function(evt){
    if(evt.keyCode === 27){
        if(popupMap.classList.contains("modal-show")){
            evt.preventDefault();
            popupMap.classList.remove('modal-show');
            
        }

    }
});
mapClose.addEventListener("click", function(evt){
    evt.preventDefault();
popupMap.classList.remove('modal-show');

});