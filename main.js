


const homeContent = [
  [
    {
      url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70",
      name: "Mobiles",
      fet: "https://ecommerce-api3.p.rapidapi.com/mobiles",
    },
    {
      url: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/6/n/chromebook-plus-chromebook-acer-original-imahfcj5s2dc2rhc.jpeg?q=70",
      name: "Laptops",
      fet: "https://ecommerce-api3.p.rapidapi.com/laptops",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/p/a/y/-original-imagrtbrqzwf8fjn.jpeg?q=70",
      name: "Watches",
      fet: "https://ecommerce-api3.p.rapidapi.com/watches",
    },
  ],
  [
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-shoe/n/b/w/-original-imaghqz5uj4axvyg.jpeg?q=70",
      name: "Kid's Footwear",
      fet: "https://ecommerce-api3.p.rapidapi.com/kidsfootwear",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/3/s/i/-original-imaggbvzhdkegqgj.jpeg?q=70",
      name: "Women's FootWear",
      fet: "https://ecommerce-api3.p.rapidapi.com/femalefootwear",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/f/z/u/7-winner-white-red-7-evok-white-red-original-imagycpyvfqnzkf9.jpeg?q=70",
      name: "Men's FootWear",
      fet: "https://ecommerce-api3.p.rapidapi.com/malefootwear",
    },
  ],
  [
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/y/n/m/12-18-months-combo-3-t-hf12-gamer-mars-infiniti-original-imagtbkyu4k2xw2a.jpeg?q=70",
      name: "Kid's wear",
      fet: "https://ecommerce-api3.p.rapidapi.com/kidswear",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/q/z/s/l-ps4512blac-berrylicious-original-imagwt9hrzurftcf.jpeg?q=70",
      name: "Women's wear",
      fet: "https://ecommerce-api3.p.rapidapi.com/womenswear",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/s/c/p/m-db1024-15-3bros-original-imagz8zjfxthf7kn.jpeg?q=70",
      name: "Men's wear",
      fet: "https://ecommerce-api3.p.rapidapi.com/menswear",
    },
  ],
];


const MainSection = document.getElementById("MainSection");
let page = "HOME";
let back = document.getElementById("backBut");
let itemData = [];
localStorage.setItem("singleItem",JSON.stringify([]))
let backStep = false;
let LoginSectionDiv = document.getElementById("LoginSectionDiv")
homeRender();

back.addEventListener("click", () => {
  let num = backStep === false ? JSON.parse(localStorage.getItem("backPath")).slice(0, -1):JSON.parse(localStorage.getItem("backPath"));
  console.log(num);
  let RB = JSON.parse(localStorage.getItem("backPath"))[num.length - 1];
  localStorage.setItem("backPath", JSON.stringify(num));
  backStep = true;
  BACK(RB);
});

function homeRender() {
  page = "HOME";
  MainSection.innerHTML = "";
  back.style.display = "none";
  backStep = false;

  let Electronics = document.createElement("section");
  Electronics.id = "Electronics";
  Electronics.setAttribute("class", "mainpage");
  Electronics.innerHTML = `<h2>Electronics</h2>`;

  MainSection.append(Electronics);
  let elec = document.createElement("div");
  elec.class = "mainpage";

  homeContent[0].forEach((x) => {
    let y = document.createElement("div");
    y.innerHTML = ` <img src="${x.url}" alt="${x.name}">
    <h3>${x.name}</h3>`;
    y.addEventListener("click", () => {
      renderitems(x.fet);
    });
    elec.append(y);
  });
  Electronics.append(elec);

  let eleAdd = document.createElement("section")
  eleAdd.innerHTML=`<section id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <section class="carousel-item active">
      <img src="./images/Screenshot 2024-12-11 155917.png" class="d-block w-100" alt="..." style="height: 320px;object-fit: contain;" >
    </section>
    <section class="carousel-item">
      <img src="${homeContent[0][1].url}" class="d-block w-100" alt="..." style="height: 320px;object-fit: contain;">
    </section>
    <section class="carousel-item">
      <img src="./images/Screenshot 2024-12-11 155823.png" class="d-block w-100" alt="..." style="height: 320px;object-fit: contain;">
    </section>
  </section>
</div>`
  eleAdd.setAttribute("class", "mainpage");
  eleAdd.style.backgroundColor="white"
  MainSection.append(eleAdd)

  let Footware = document.createElement("section");
  Footware.setAttribute("class", "mainpage");
  Footware.innerHTML = `<h2>Footware</h2>`;
  MainSection.append(Footware);
  let foot = document.createElement("div");



  homeContent[1].forEach((x) => {
    let y = document.createElement("div");
    y.innerHTML = ` <img src="${x.url}" alt="${x.name}">
    <h3>${x.name}</h3>`;
    y.addEventListener("click", () => {
      renderitems(x.fet);
    });
    foot.append(y);
  });
  Footware.append(foot);

  let footAdd = document.createElement("section")
  footAdd.innerHTML=`<section id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <section class="carousel-item active">
      <img src="${homeContent[1][0].url}" class="d-block w-100" alt="..." style="height: 320px;object-fit: contain;" >
    </section>
    <section class="carousel-item">
      <img src="${homeContent[1][1].url}" class="d-block w-100" alt="..." style="height: 320px;object-fit: contain;">
    </section>
    <section class="carousel-item">
      <img src="${homeContent[1][2].url}" class="d-block w-100" alt="..." style="height: 320px;object-fit: contain;">
    </section>
  </section>
</div>`
  footAdd.setAttribute("class", "mainpage");
  footAdd.style.backgroundColor="white"
  MainSection.append(footAdd)

  let Clothes = document.createElement("section");
  Clothes.id = "Clothes";
  Clothes.setAttribute("class", "mainpage");
  Clothes.innerHTML = `<h2>Clothes</h2>`;
  MainSection.append(Clothes);
  let clo = document.createElement("div");

  homeContent[2].forEach((x) => {
    let y = document.createElement("div");
    y.innerHTML = ` <img src="${x.url}" alt="${x.name}">
    <h3>${x.name}</h3>`;
    y.addEventListener("click", () => {
      renderitems(x.fet);
    });
    clo.append(y);
  });
  Clothes.append(clo);
  let cloAdd = document.createElement("section")
  cloAdd.innerHTML=`<section id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <section class="carousel-item active">
      <img src="./images/Screenshot 2024-12-11 155951.png" class="d-block w-100" alt="..." style="height: 320px;object-fit: contain;" >
    </section>
    <section class="carousel-item">
      <img src="${homeContent[2][1].url}" class="d-block w-100" alt="..." style="height: 320px;object-fit: contain;">
    </section>
    <section class="carousel-item">
      <img src="./images/Screenshot 2024-12-11 155843.png" class="d-block w-100" alt="..." style="height: 320px;object-fit: contain;">
    </section>
  </section>
</div>`
 cloAdd.setAttribute("class", "mainpage");
 cloAdd.style.backgroundColor="white"
  MainSection.append(cloAdd)
  localStorage.setItem("backPath", JSON.stringify(["homeRender"]));

}

function renderitems(a) {
  const url = a;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "bf0941cc31msh6ba7aaa1b41e60ap19bde7jsn43d3e5a60240",
      "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
    },
  };

  async function render() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      itemData = result;
      localStorage.setItem("itemData", JSON.stringify(itemData));
      display();
    } catch (error) {
      console.error(error);
    }
  }
  render();
}

function display() {
  if (!backStep) {
    let RP = JSON.parse(localStorage.getItem("backPath"));
    RP.push("display");
    localStorage.setItem("backPath", JSON.stringify(RP));
  }
  backStep = false;
  page = "ITEMS";
  let a = JSON.parse(localStorage.getItem("itemData"));
  back.style.display = "block";

  MainSection.innerHTML = "";
  localStorage.setItem("singleItem",JSON.stringify([]))

  let itemSection = document.createElement("section");
  itemSection.id = "itemSection";
  MainSection.append(itemSection);

  a.forEach((x) => {
    let y = document.createElement("div");
    y.setAttribute("class", "itemDiv");
    y.innerHTML = `<img src="${x.Image}" alt="${x.Brand}">
    <p>${x.Price}</p>
    <h4>${x.Brand}</h4>
    <p>${x.Description}</p>
    <div>
        <button class="addTocart button-40">Add to Cart</button>
    </div>`;

    y.addEventListener("click", (e) => {
      singleItemDisplay(x);
    });
    let Acart = y.querySelector(".addTocart");
    Acart.addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(x);
      // console.log(x);
    });
    itemSection.append(y);
  });
}

function BACK(a) {
  switch (a){
    case "homeRender":
      homeRender();
      break;
    case "display":
      display();
      break;
    case "displayCart":
      if(page === "SINGLEITEM"){
        let bb = JSON.parse(localStorage.getItem("singleItem"));
        bb.pop()
        localStorage.setItem("singleItem",JSON.stringify(bb))
      }
      displayCart();
      break;
    case "singleItemDisplay":
      // console.log("here")
      let bb = JSON.parse(localStorage.getItem("singleItem"))
      singleItemDisplay(bb[bb.length-1])
      break;
  }
}

function displayCart(){
  let loginn = localStorage.getItem("isLogin")
  if(loginn == "false"){
    alert("Please login to open cart")
    return
  }
  if(!backStep){
    let RP = JSON.parse(localStorage.getItem("backPath"));
    RP.push("displayCart");
    localStorage.setItem("backPath", JSON.stringify(RP));
  }
  backStep = false;
  page = "CART";
  back.style.display = "block";
  let cartItems = JSON.parse(localStorage.getItem("cart"));

  if(cartItems == null || cartItems.length == 0){
    return MainSection.innerHTML="Cart is empty"
  }

  MainSection.innerHTML = "";

  let CartSection = document.createElement("section")
  CartSection.id="CartSection"
  let allcarts = document.createElement("div");
  allcarts.id = "carts";
  allcarts.innerHTML=`<div class="title">
    Shopping Cart
  </div>`

  let TotalAmount = 0;

  cartItems.forEach((x,index) => {
    let cartItem = document.createElement("div");
    TotalAmount += parseFloat(x.Price.replace(/[^0-9.]/g, ''));
    cartItem.setAttribute("class","CartDiv")
    cartItem.innerHTML = `
    <div class="index">
    ${index+1}
    </div>
 
    <div class="image">
      <img src="${x.Image}" alt="" />
    </div>
 
    <div class="description">
      <span>${x.Brand}</span>
      <span>${x.Description}</span>
    </div>
 
    <div class="price">${x.Price}</div>
    <div class="buttons">
      <i class="fa-solid fa-trash"></i>
    </div>
  </div>`
    allcarts.append(cartItem);
    cartItem.querySelector(".fa-trash").addEventListener("click",()=>{
      deleteCartitem(index,cartItems)
    })
    cartItem.querySelector("img").addEventListener("click",()=>{
      singleItemDisplay(x)
    })
  });

  CartSection.append(allcarts);

  let amountDiv = document.createElement("div");
  amountDiv.id="right"
  amountDiv.innerHTML=`<div><div>Total Amount</div><div>₹${TotalAmount.toFixed(2)}</div></div>
  <div><div>Total Items</div><div>${cartItems.length}</div></div>
  <div><div>GST 18%</div><div style="color: red ;">+₹${(TotalAmount*(18/100)).toFixed(2)}</div></div>
  <div><div>Discount 5%</div><div style="color: green;">-₹${(TotalAmount*(5/100)).toFixed(2)}</div></div>
  <div><div>Dalivary Charges</div><div style="color: red;">+₹40</div></div>
  <div><div>Final Amount</div><div>₹${(TotalAmount+40+TotalAmount*(18/100)-(TotalAmount)*(5/100)).toFixed(2)}</div></div>`

  CartSection.append(amountDiv);
  localStorage.setItem("price",JSON.stringify((TotalAmount+40+TotalAmount*(18/100)-(TotalAmount*(18/100))*(5/100)).toFixed(2)))
  let buyBut = document.createElement("button");
  buyBut.id="buyBut";
  buyBut.setAttribute("class","button-40")
  buyBut.innerHTML="BUY NOW"
  amountDiv.append(buyBut)
  MainSection.append(CartSection)
}

function deleteCartitem(index,arr){

  let con = confirm("Do you want to delete");
  if(con){
    arr.splice(index,1);
  localStorage.setItem("cart",JSON.stringify(arr))
  }
  backStep = true
  return displayCart();
}

function addToCart(x) {
  let loginn = localStorage.getItem("isLogin")
  if(loginn == "false"){
    alert("Please login to open cart")
    return
  }
  alert("Added to cart Successfully");
  let a = JSON.parse(localStorage.getItem("cart")) || [];
  a.push(x);
  localStorage.setItem("cart", JSON.stringify(a));
}

function singleItemDisplay(x) {
  if (!backStep) {
    let RP = JSON.parse(localStorage.getItem("backPath"));
    RP.push("singleItemDisplay");
    localStorage.setItem("backPath", JSON.stringify(RP));

    let RR = JSON.parse(localStorage.getItem("singleItem"))
    RR.push(x)
    localStorage.setItem("singleItem", JSON.stringify(RR));
  }
  page = "SINGLEITEM";
  backStep = false;
  MainSection.innerHTML=""
  let singleItemSection = document.createElement("section")
  singleItemSection.id="singleItemSection"
  singleItemSection.innerHTML = `<img src="${x.Image}" alt="${x.Brand}">
    <p>${x.Price}</p>
    <h3>${x.Brand}</h3>
    <p>${x.Description}</p>
    <div>
        <button class="addTocart button-40">Add to Cart</button>
    </div>`;
    singleItemSection.querySelector(".addTocart").addEventListener("click",()=>{
      addToCart(x)
    })
  MainSection.append(singleItemSection)

}


function searchItem(){
  if(page !== "ITEMS"){
    alert("Please Select A Catagory")
    document.getElementById("searchBar").value=""

  }else{
    let searchBar = document.getElementById("searchBar");
    searchValue = searchBar.value.trim().toLowerCase()
    let searcharray = [];
    itemData.forEach((x)=>{
      if(x.Brand.toLowerCase().includes(searchValue)){
        searcharray.push(x)
      }
    })
    // if (!backStep) {
    //   let RP = JSON.parse(localStorage.getItem("backPath"));
    //   RP.push("display");
    //   localStorage.setItem("backPath", JSON.stringify(RP));
    // }
    backStep = false;
    back.style.display = "block";
  
    MainSection.innerHTML = "";
    localStorage.setItem("singleItem",JSON.stringify([]))
  
    let itemSection = document.createElement("section");
    itemSection.id = "itemSection";
    MainSection.append(itemSection);
  
    searcharray.forEach((x) => {
      let y = document.createElement("div");
      y.setAttribute("class", "itemDiv");
      y.innerHTML = `<img src="${x.Image}" alt="${x.Brand}">
      <p>${x.Price}</p>
      <h3>${x.Brand}</h3>
      <p>${x.Description}</p>
      <div>
          <button class="addTocart button-40">Add to Cart</button>
      </div>`;
  
      y.addEventListener("click", (e) => {
        singleItemDisplay(x);
      });
      let Acart = y.querySelector(".addTocart");
      Acart.addEventListener("click", (e) => {
        e.stopPropagation();
        addToCart(x);
      });
      itemSection.append(y);
    });
   }
}


function logInOut(){
  let login = localStorage.getItem("isLogin")
  if(login == "false"){
    MainSection.style.display="none"
    back.style.display="none"
    LoginSectionDiv.style.display="contents"
  }
  if(login == "true"){
    confirmm = confirm("Do u want to Sign Out");
    localStorage.setItem("isLogin",false)
    document.getElementById("loginout").innerHTML="Login"
  }
}