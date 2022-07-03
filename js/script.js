

//------Выпадающее меню в верхнем правом углу-----------------------

const profileNavigationButton = document.querySelector('.profileNavigationButton');
const subMenu = document.querySelector('.subMenuAccount');
const animationTriangle = document.querySelector('.triangle');

document.addEventListener('click',function(e){

   const click = e.composedPath().includes(profileNavigationButton);
   const clickMenu = e.composedPath().includes(subMenu);

   if(!click && !clickMenu){
      console.log('закрываем меню');
      subMenu.classList.remove('show');
      animationTriangle.classList.remove('downTriangle');
   }

})

profileNavigationButton.addEventListener('click',showMenu);

function showMenu(event){
   subMenu.classList.toggle('show');
   animationTriangle.classList.toggle('downTriangle');
}

//------------------------------------------------------------------

