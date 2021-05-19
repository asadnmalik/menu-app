// Array of Objects of the Menu
const menu = [
    {
        name: "Chicken Karahi",
        price: "Rs. 500",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa iure dolorem maiores, minus odio porro minima! Quidem, qui quia sunt dolores voluptate alias. Doloremque natus quidem facilis est nostrum iste!",
        image: "/imgs/karahi.jpg" ,
        category: "dinner"

    },

    {
        name: "Mutton",
        price: "Rs. 1000",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa iure dolorem maiores, minus odio porro minima! Quidem, qui quia sunt dolores voluptate alias. Doloremque natus quidem facilis est nostrum iste!",
        image: "/imgs/mutton.jpg" ,
        category: "dinner"

    },

    {
        name: "Daal Chawal",
        price: "Rs. 150",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa iure dolorem maiores, minus odio porro minima! Quidem, qui quia sunt dolores voluptate alias. Doloremque natus quidem facilis est nostrum iste!",
        image: "/imgs/daalchawal.jpg" ,
        category: "lunch"

    },

    {
        name: "Byriani",
        price: "Rs. 200",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa iure dolorem maiores, minus odio porro minima! Quidem, qui quia sunt dolores voluptate alias. Doloremque natus quidem facilis est nostrum iste!",
        image: "/imgs/byriani.jpg" ,
        category: "lunch"

    },

    {
        name: "Fries",
        price: "Rs. 100",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa iure dolorem maiores, minus odio porro minima! Quidem, qui quia sunt dolores voluptate alias. Doloremque natus quidem facilis est nostrum iste!",
        image: "/imgs/fries.jpg" ,
        category: "lunch"

    },

    {
        name: "Mint Margarita",
        price: "Rs. 60",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa iure dolorem maiores, minus odio porro minima! Quidem, qui quia sunt dolores voluptate alias. Doloremque natus quidem facilis est nostrum iste!",
        image: "/imgs/maragarita.jpg" ,
        category: "shakes"

    },

    {
        name: "Lassi",
        price: "Rs. 50",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa iure dolorem maiores, minus odio porro minima! Quidem, qui quia sunt dolores voluptate alias. Doloremque natus quidem facilis est nostrum iste!",
        image: "/imgs/lassi.jpg" ,
        category: "shakes"

    },

    {
        name: "Channa Poori",
        price: "Rs. 100",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa iure dolorem maiores, minus odio porro minima! Quidem, qui quia sunt dolores voluptate alias. Doloremque natus quidem facilis est nostrum iste!",
        image: "/imgs/poori.jpg" ,
        category: "breakfast"

    },

    {
        name: "Omellette Paratha",
        price: "Rs. 50",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa iure dolorem maiores, minus odio porro minima! Quidem, qui quia sunt dolores voluptate alias. Doloremque natus quidem facilis est nostrum iste!",
        image: "/imgs/paratha.jpg" ,
        category: "breakfast"

    },

    {
        name: "Pakoray",
        price: "Rs. 100",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa iure dolorem maiores, minus odio porro minima! Quidem, qui quia sunt dolores voluptate alias. Doloremque natus quidem facilis est nostrum iste!",
        image: "/imgs/pakoray.jpg" ,
        category: "lunch"

    }

    
]

//Query Selectors
const menuSection = document.querySelector(".menu-section")
const category = document.querySelectorAll('.btn')



//Category Functions
const loadAll = () =>{
    
    menuSection.innerHTML = ``
    menu.forEach(food => {
        menuSection.innerHTML += `

        <div class="menu d-flex col">
                <div class="menu-image mx-3" >
                    <img src=${food.image}  class="rounded mx-auto d-block" style=" width: 200px; height: 200px; object-fit: cover;" alt="">
                </div>
                <div class="menu-info">
                    <h5 class="menu-heading d-flex justify-content-between">${food.name}<span class="menu=price">${food.price}</span></h5>
                    
                    <p class="menu-info" >${food.description}</p>
                </div>
            </div>
        
        
        `
        
    });

}


const loadBreakfast = () =>{
    menuSection.innerHTML = ``
    breakfastData = menu.filter(food => food.category ==="breakfast")
    breakfastData.forEach(food => {
        
        menuSection.innerHTML += `

        <div class="menu d-flex col">
                <div class="menu-image mx-3" >
                    <img src=${food.image}  class="rounded mx-auto d-block" style=" width: 200px; height: 200px; object-fit: cover;" alt="">
                </div>
                <div class="menu-info">
                    <h5 class="menu-heading d-flex justify-content-between">${food.name}<span class="menu-price">${food.price}</span></h5>
                    
                    <p class="menu-info" >${food.description}</p>
                </div>
            </div>
        
        
        `
        
    });

}

const loadLunch = () =>{
    menuSection.innerHTML = ``
    breakfastData = menu.filter(food => food.category ==="lunch")
    breakfastData.forEach(food => {
        
        menuSection.innerHTML += `

        <div class="menu d-flex col">
                <div class="menu-image mx-3" >
                    <img src=${food.image}  class="rounded mx-auto d-block" style=" width: 200px; height: 200px; object-fit: cover;" alt="">
                </div>
                <div class="menu-info">
                    <h5 class="menu-heading d-flex justify-content-between">${food.name}<span class="menu-price">${food.price}</span></h5>
                    
                    <p class="menu-info" >${food.description}</p>
                </div>
            </div>
        
        
        `
        
    });

}


const loadShakes = () =>{
    menuSection.innerHTML = ``
    breakfastData = menu.filter(food => food.category ==="shakes")
    
    breakfastData.forEach(food => {
        
        menuSection.innerHTML += `

        <div class="menu d-flex col">
                <div class="menu-image mx-3" >
                    <img src=${food.image}  class="rounded mx-auto d-block" style=" width: 200px; height: 200px; object-fit: cover;" alt="">
                </div>
                <div class="menu-info">
                    <h5 class="menu-heading d-flex justify-content-between">${food.name}<span class="menu-price">${food.price}</span></h5>
                    
                    <p class="menu-info" >${food.description}</p>
                </div>
            </div>
        
        
        `
        
    });

}

const loadDinner = () =>{
    menuSection.innerHTML = ``
    breakfastData = menu.filter(food => food.category ==="dinner")

    breakfastData.forEach(food => {
        
        menuSection.innerHTML += `

        <div class="menu d-flex col">
                <div class="menu-image mx-3" >
                    <img src=${food.image}  class="rounded mx-auto d-block" style=" width: 200px; height: 200px; object-fit: cover;" alt="">
                </div>
                <div class="menu-info">
                    <h5 class="menu-heading d-flex justify-content-between">${food.name}<span class="menu-price">${food.price}</span></h5>
                    
                    <p class="menu-info" >${food.description}</p>
                </div>
            </div>
        
        
        `
        
    });

}




//Event Listener for all Category Buttons
category.forEach(category => {
    category.addEventListener('click', function(){

        if (this.textContent== "Breakfast"){
            loadBreakfast()
        }
        if (this.textContent== "Lunch"){
            loadLunch()
        }
        if (this.textContent== "Shakes"){
            loadShakes()
        }
        if (this.textContent== "Dinner"){
            loadDinner()
        }
        if (this.textContent== "All"){
            loadAll()
        }
    })
})