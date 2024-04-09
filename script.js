//Naming and assigning the variables
const menuIcon = document.querySelector(".menu-icon"),
      closeIcon = document.querySelector(".close-icon"),
      navBar = document.querySelector(".sideBar"),
      cardss = document.querySelector(".card"),
      container = document.querySelector(".cards"),
      cartIcon = document.querySelector(".cart-icon"),
      cartBox = document.querySelector(".cart-box"),
      closeCart = document.querySelector(".close-cart"),
      ulCart = document.querySelector(".ul-El"),
      p = document.querySelector(".num"),
      plus = document.querySelector(".plus"),
      shoeImage = document.querySelector(".shoeImage"),
      shoeName = document.querySelector(".shoeName"),
      discountPrice = document.querySelector(".discount"),
      itemsNo = document.querySelector(".no-of-items"),
      thumbnailOne = document.querySelector(".one"),
      thumbnailTwo = document.querySelector(".two"),
      thumbnailThree = document.querySelector(".three"),
      thumbnailFour = document.querySelector(".four"),
      decreaseIcon = document.querySelector(".decrease-icon"),
      next = document.querySelector(".icon-next"),
      prev = document.querySelector(".icon-previous"),
      lightroom = document.querySelector(".lightroom"),
      lightroomCloseIcon = document.querySelector(".closeLightroom-icon")
      app = document.querySelector(".body")
      let phtml = 1
      let currentIndex = 0
      let cartss = []
      let itmensNoincrement = 0

    //EventListener to Close and Open Navbar 

    menuIcon.addEventListener("click" , openNav)  
    closeIcon.addEventListener("click" , closeNav)

    // Functuon to Open sideBar

    function openNav(){
     navBar.style.left = "0"
    }
    // Function to close SideBar
    
    function closeNav(){
        navBar.style.left = `-300%`
    }
    
    // Eventlistner to click anywhere in the body to close Nav bar and hide lightroom

    app.addEventListener("click" , function CloseNav(event){
        const targ = event.target
        if(targ.className !== "menu-icon"){
            closeNav()
        }
    })


    lightroom.addEventListener("click" , function CloseLightroom(event){
      const targ = event.target
      if(targ.className !== "lightroom-control" && targ.className !== "thumbnail" && targ.className === "thumbnai-image"){
              hideLightRoom()
      }
    } )
     // EventListner to showLight Room  and hide lightroom  
     
    shoeImage.addEventListener("click" , showLightroom)
    function showLightroom(){
      lightroom.style.top = "0%"
    }

      
    lightroomCloseIcon.addEventListener("click" , hideLightRoom)
    function hideLightRoom(){
      lightroom.style.top = "-200%"
    }
 
    // CLASS to create template for the normalCarousel display in the screen and the lightroom caarousel

     class Carousel{
      constructor(cardss , container , thumbnailOne,thumbnailTwo,thumbnailThree,thumbnailFour,next,prev){
             this.cardss = cardss.offsetWidth
             this.container = container
             this.thumbnailOne = thumbnailOne
             this.thumbnailTwo = thumbnailTwo
             this.thumbnailThree = thumbnailThree
             this.thumbnailFour = thumbnailFour
             this.next = next
             this.prev = prev
      }

      MakeCarouselSlide(){
        let currentIndex = 0;
        const card = this.cardss
        const container = this.container
        const thumbnailOne = this.thumbnailOne
        const thumbnailTwo = this.thumbnailTwo
        const thumbnailThree = this.thumbnailThree
        const thumbnailFour = this.thumbnailFour
        thumbnailOne.classList.add("active")
       function CarouselSlide(index){
        if(index >= 0 && index < 4){
         currentIndex = index
         const translateX = -currentIndex * card
          container.style.transform = `translateX(${translateX}px)`
          if(translateX === 0){
            thumbnailOne.classList.add("active")
          }
          if(translateX === -500){
            thumbnailOne.classList.remove("active")
            thumbnailTwo.classList.add("active")
          }
          else{
            thumbnailTwo.classList.remove("active")
          }
          if(translateX === -1000){
            thumbnailOne.classList.remove("active")
            thumbnailThree.classList.add("active")
          }
          else{
            thumbnailThree.classList.remove("active")
          }
          if(translateX === -1500){
            thumbnailOne.classList.remove("active")
            thumbnailFour.classList.add("active")
          }
          else{
            thumbnailFour.classList.remove("active")
          }
        }
       }
 
      // EventListner to each thumbnail to change the Carousel slide func index to 0-4
       
      thumbnailOne.addEventListener("click" , function One(){
        CarouselSlide(0)
      })
      thumbnailTwo.addEventListener("click" , function Two(){
        CarouselSlide(1)
      })
      thumbnailThree.addEventListener("click" , function Three(){
        CarouselSlide(2)
      })
      thumbnailFour.addEventListener("click" , function Four(){
        CarouselSlide(3)
      })
      function next(){
        CarouselSlide(currentIndex + 1)
      }
      function prev(){
        CarouselSlide(currentIndex - 1)
      }
      this.next.addEventListener("click" , next)
      this.prev.addEventListener("click" , prev)
     }
    }

    //Calling the class function for NormalCCarousel 

     const  NormalCarousel = new Carousel(cardss , container , thumbnailOne , thumbnailTwo ,thumbnailThree , thumbnailFour , next , prev)
     NormalCarousel.MakeCarouselSlide()

    // Naming / asiigning variable in lightroom component in other to class the class function for it

     const LightroomCardss = document.querySelector(".lightroom-card"),
     LightroomContainer = document.querySelector(".lightroom-cards"),
     LightroomThumbnailOne = document.querySelector(".lightroom-one"),
     LightroomThumbnailTwo = document.querySelector(".lightroom-two"),
     LightroomThumbnailThree = document.querySelector(".lightroom-three"),
     LightroomThumbnailFour = document.querySelector(".lightroom-four"),
     LightroomNext = document.querySelector(".lightroom-icon-next"),
     LightroomNPrev = document.querySelector(".lightroom-icon-previous")

     // Calling the class function for the lightroom carousel
     const lightroomCarousel = new Carousel(LightroomCardss,LightroomContainer,LightroomThumbnailOne,LightroomThumbnailTwo,LightroomThumbnailThree,LightroomThumbnailFour,LightroomNext,LightroomNPrev)
     lightroomCarousel.MakeCarouselSlide()


    // Eventlistner to show the cartbox
       
    cartIcon.addEventListener("click" , function showCart(){
       cartBox.style.left = `50%`
    })
    closeCart.addEventListener("click" , function closeCart(){
      cartBox.style.left = `-100%`
    })
    
    // Functions to increase items number and decrease it 
            
     function Increase(){
       phtml++;
       p.innerHTML = phtml
      }
      function Decrease(){
        if(phtml === 1){
          decreaseIcon.disable
        }
        else{
        phtml--;
        p.innerHTML = phtml
        }
      }

      // Function to dynamically add list items to the Add cart element 

      let carts;
      function addTocart(){
        const pValue = p.innerHTML
        const ShoeName = shoeName.innerHTML
        const ShoeImage = shoeImage.src
        const Discount = Number(discountPrice.innerHTML)
        const discountRound = Discount.toFixed(2)
        const totalPrice = pValue * Discount
        const totalPriceRound = Number(totalPrice).toFixed(2)


        const id = Math.floor(Math.random() * 5) + 1

        const info = {id : id , ShoeImage , ShoeName , discountRound , totalPriceRound}
        cartss.push(info)
        updateUi(cartss)
        itmensNoincrement++;
      }
      let list;
      
      function div(ShoeImage , ShoeName , discountRound , totalPriceRound , id){
    return ` 
               <div> 
                      <div class="shoe-image">
                          <img src=${ShoeImage} class ="cart-thumbnail">
                       </div>
                       <div class="name-and-price">
                          <p class="name-of-shoe">${ShoeName}</p>
                          <div class="price">
                          <p class="origal-price" >$${discountRound}</p> 
                             <p class="total-price">${totalPriceRound}</p>
                          </div>
                        </div>
                      <div class="delete-icon" id=${id}" onclick='delet(event)'>
                            <img src="images/icon-delete.svg" alt="delete-icon" class="delete-icon" id=${id}>
                       </div>
                     </div>
                    <div class="button"><button class = "icon">Checkout</button>
                </div> `
  }



function updateUi(cartss){
  ulCart.innerHTML =  ""
  cartss.forEach((items , index) => {
  const  list  = `<li id ${index}>
                           ${div(items.ShoeImage , items.ShoeName , items.discountRound , items.totalPriceRound , index)}
                          </li>`
ulCart.insertAdjacentHTML("afterbegin" , list)
                          })
}

function delet(event){
  ulCart.innerHTML = ""
  const id = Number(event.target.id)
   delete cartss[id]
  updateUi(cartss)
  itmensNoincrement--;
  
}