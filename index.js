// Menu data structure
/*var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];*/

  //for(let i in menuLinks){
    

  //}
  var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

  



  let mainEl = document.querySelector("main");
  mainEl.style.backgroundColor = 'var(--main-bg)';
  mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
  mainEl.classList.add('flex-ctr'); 
  
 
  

let  topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var( --top-menu-bg)';
topMenuEl.classList.add('flex-around');

for(let i in menuLinks){


    let a= document.createElement('a');
   
    a.textContent = menuLinks[i].text;

    a.setAttribute('href','menuLinks[i].href');

    if(menuLinks[i].text !=='about'){
        a.setAttribute('link','menuLinks[i].subLinks');
    }
    
    
    
    topMenuEl.appendChild(a);

    

}

let subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var( --sub-menu-bg)';
//subMenuEl.classList.add( 'flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

let topMenuLinks = document.querySelectorAll('nav a');

//let topMenuLinks =  document.querySelector('a') ;

let showingSubMenu = false;
topMenuEl.addEventListener('click', function(evt) {
    
    evt.preventDefault()
    
  
    if(evt.target.classList.contains('active')==true){
       evt.target.classList.remove('active');
        showingSubMenu = false;
        subMenuEl.style.top = '0px';
        return;
    }
    // else{
    //     showingSubMenu = true;
       
        
    // }
  
   console.log(topMenuLinks);
   for(let i in topMenuLinks){
    evt.target.classList.remove('active');
    evt.target.classList.add('active');
   }
   
   
  
   
  
 let links=[];
 //let links = {};
 for(let j in menuLinks){
    links.push(menuLinks[j].subLinks);
  // links[menuLinks[j].text] = menuLinks[j].subLinks;

    
 }
console.log(links);

     let link = evt.target.hasAttribute('link');
     
  
    if(link){

        showingSubMenu = true;
       
       
    }
    else{
        showingSubMenu = false;
       
    }



  if(showingSubMenu == true ){
        function buildSubMenu(link){
           
          subMenuEl.textContent= ' ';
         


          for(let i=1;i<links.length;i++){
            for(let j=0;j<links.length;j++){

        
            let a1=document.createElement('a'); //[1][0][0]
            
            a1.textContent = links[i][j].text;

            
           subMenuEl.appendChild(a1);
       
         
          }
         
        }  

        }
        subMenuEl.style.top = '100%';
    }
    else{
        subMenuEl.style.top = '0';
    }
if(evt.target){
    buildSubMenu(links);

}
 
   
/*[
    null,
    [
        {
            "text": "all",
            "href": "/catalog/all"
        },
        {
            "text": "top selling",
            "href": "/catalog/top"
        },
        {
            "text": "search",
            "href": "/catalog/search"
        }
    ],
    [
        {
            "text": "new",
            "href": "/orders/new"
        },
        {
            "text": "pending",
            "href": "/orders/pending"
        },
        {
            "text": "history",
            "href": "/orders/history"
        }
    ],
    [
        {
            "text": "profile",
            "href": "/account/profile"
        },
        {
            "text": "sign out",
            "href": "/account/signout"
        }
    ]
] */
    
    
 

  });
  
//   topMenuLinks.removeEventListener('click', function(evt){
//     evt.preventDefault();
   
//   })

















subMenuEl.addEventListener('click',function(e){
   e.preventDefault();
  
   console.log(subMenuEl);
})