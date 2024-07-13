const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];


const cartItems = [];

function checkout()
{

  let finalPrice = cartItems.reduce(function(pre,value){

    return pre + value.qty * value.price;
  },0);

  alert(finalPrice);
}

function addCartItmes(id)
{
 
  let product = menu.find(function(v){

   return v.id == id;
  });

  let findFromCart = cartItems.find(function(vr){

    return vr.id == id;
  })

  console.log(product);
  if(findFromCart == undefined)
  {
    product["qty"] =1;
  cartItems.push(product);
  }
  else
  {
    findFromCart.qty = findFromCart.qty +1;

  }

  console.log(cartItems);
}


function display(op)
{
  const menuitems = op.map(function(va,in1){

    return `  <article class="menu-item">
            <img src="${va.img}" alt="menu item" class="photo" />
            <div class="item-info">
              <header>
                <h4>${va.title}</h4>
                <h4 class="price">${va.price}</h4>
              </header>
              <p class="item-text">
                ${va.desc}
              </p>
            </div>
            <button  class="filter-btn" onclick="addCartItmes(${va.id})">Add To Cart </button>
          </article>`
  
  })

  document.getElementById("menu").innerHTML = menuitems.join(" ");

}

display(menu);

const categories = menu.reduce(function(pre,current){

  if(!pre.includes(current.category))
  {
    pre.push(current.category);
  }
  return pre;

},[]);

categories.unshift("All");

let buttons = categories.map(function(v){

  return `<button  class="filter-btn" onclick="filterCategory('${v}')">${v}</button>`
});

document.getElementById("btn").innerHTML = buttons.join(" ");



function filterCategory(categoryname)
{

  let filter = menu.filter(function(value){

    return value.category == categoryname || categoryname == "All";
  });

  display(filter)

  console.log(filter);
}

function arrangePriceLowToHight(field,order)
{

  menu.sort(function(a,b){

    if(order == "asc" && typeof a[field] == "number")
    {
    return a[field]- b[field];

    }
    else if(order == 'desc' && typeof a[field] == "number")
    {

      return b[field]-a[field];


    }
    else if(order == 'asc' && typeof a[field] == "string")
    {
        if(a.title > b.title)
        {
          return 1;
        }
        else
        {
          return -1
        }

    }
    else
    { if(a.title > b.title)
      {
        return -1;
      }
      else
      {
        return 1
      }

    }
    



  })

  console.log(menu);
  display(menu);



}