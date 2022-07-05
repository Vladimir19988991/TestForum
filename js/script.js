

//------Выпадающее меню в верхнем правом углу-----------------------

const profileNavigationButton = document.querySelector('.profileNavigationButton');
const subMenu = document.querySelector('.subMenuAccount');
const animationTriangle = document.querySelector('.triangle');

const defaultValue = "Let’s share what going on your mind...";

document.addEventListener('click',function(e){

   const click = e.composedPath().includes(profileNavigationButton);
   const clickMenu = e.composedPath().includes(subMenu);
   
//проверка на щелчки вне элементов сайта(меню, окна ввода и т.д.)
   if(!click && !clickMenu){
      //console.log('закрываем меню');
      subMenu.classList.remove('show');
      animationTriangle.classList.remove('downTriangle');
   }
})

profileNavigationButton.addEventListener('click',showMenu);

function showMenu(event){
   subMenu.classList.toggle('show');
   animationTriangle.classList.toggle('downTriangle');
}

//---------------------------------------------------------------------------------------------------
//-----------Анимация плэйсхолдера окна ввода информации(create post)--------------------------------


const inputWindow = document.getElementById('createPostInput');

inputWindow.addEventListener('focus',() => {

   let newValue;

   animationInputWindow();

   function animationInputWindow(){

      setTimeout(() =>{
         newValue = "";
         inputWindow.placeholder = newValue + "E";
      },100);

      setTimeout(() =>{
         newValue = "";
         inputWindow.placeholder = newValue + "En";
      },200)

      setTimeout(() =>{
         newValue = "";
         inputWindow.placeholder = newValue + "Ent";
      },300)

      setTimeout(() =>{
         newValue = "";
         inputWindow.placeholder = newValue + "Ente";
      },400)

      setTimeout(() =>{
         newValue = "";
         inputWindow.placeholder = newValue + "Enter";
      },500)

      setTimeout(() =>{
         newValue = "";
         inputWindow.placeholder = newValue + "Enter your";
      },650)

      setTimeout(() =>{
         newValue = "";
         inputWindow.placeholder = newValue + "Enter your p";
      },1000)

      setTimeout(() =>{
         newValue = "";
         inputWindow.placeholder = newValue + "Enter your po";
      },1100)

      setTimeout(() =>{
         newValue = "";
         inputWindow.placeholder = newValue + "Enter your pos";
      },1200)

      setTimeout(() =>{
         newValue = "";
         inputWindow.placeholder = newValue + "Enter your post";
      },1300)

      setTimeout(() =>{
         newValue = "";
         inputWindow.placeholder = newValue + "Enter your post.";
      },1350)
      setTimeout(() =>{
         newValue = "";
         inputWindow.placeholder = newValue + "Enter your post..";
      },1400)
      setTimeout(() =>{
         newValue = "";
         inputWindow.placeholder = newValue + "Enter your post...";
      },1450)

      inputWindow.addEventListener('blur',()=>{
         inputWindow.placeholder = defaultValue;
      })
   }

   })

//---------------------------------------------------------------------------------------------------
//-----------Вывод информации об кнопках меню в башке сайта------------------------------------------


const 

homeButtonMenuHeader = document.getElementsByClassName('homeButton'),
 homeButtonMenuHeaderInfo = document.getElementsByClassName('homeInfo'),

 calendarButtonMenuHeader = document.getElementsByClassName('calendarButton'),
 calendarButtonMenuHeaderInfo = document.getElementsByClassName('calendarInfo'),

 groupButtonMenuHeader = document.getElementsByClassName('groupButton'),
 groupButtonMenuHeaderInfo = document.getElementsByClassName('groupInfo'),

 podcastButtonMenuHeader = document.getElementsByClassName('podcastButton'),
 podcastButtonMenuHeaderInfo = document.getElementsByClassName('podcastInfo'),

 interviewButtonMenuHeader = document.getElementsByClassName('interviewButton'),
 interviewButtonMenuHeaderInfo = document.getElementsByClassName('interviewInfo')


homeButtonMenuHeader[0].addEventListener('mouseover',()=>{
   homeButtonMenuHeaderInfo[0].classList.toggle('show');
})
homeButtonMenuHeader[0].addEventListener('mouseout',()=>{
   setTimeout(()=>homeButtonMenuHeaderInfo[0].classList.toggle('show'),220);
})

calendarButtonMenuHeader[0].addEventListener('mouseover',()=>{
   calendarButtonMenuHeaderInfo[0].classList.toggle('show');
})
calendarButtonMenuHeader[0].addEventListener('mouseout',()=>{
   setTimeout(()=>calendarButtonMenuHeaderInfo[0].classList.toggle('show'),220);
})

groupButtonMenuHeader[0].addEventListener('mouseover',()=>{
   groupButtonMenuHeaderInfo[0].classList.toggle('show');
})
groupButtonMenuHeader[0].addEventListener('mouseout',()=>{
   setTimeout(()=>groupButtonMenuHeaderInfo[0].classList.toggle('show'),220);
})

podcastButtonMenuHeader[0].addEventListener('mouseover',()=>{
   podcastButtonMenuHeaderInfo[0].classList.toggle('show');
})
podcastButtonMenuHeader[0].addEventListener('mouseout',()=>{
   setTimeout(()=>podcastButtonMenuHeaderInfo[0].classList.toggle('show'),220);
})

interviewButtonMenuHeader[0].addEventListener('mouseover',()=>{
   interviewButtonMenuHeaderInfo[0].classList.toggle('show');
})
interviewButtonMenuHeader[0].addEventListener('mouseout',()=>{
   setTimeout(()=>interviewButtonMenuHeaderInfo[0].classList.toggle('show'),220);
})