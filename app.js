const prekiuLikutis = [
  {
    pavadinimas: 'knyga',
    kaina: 2,
    likutis: 20
  },
  {
    pavadinimas: 'stalcius',
    kaina: 20,
    likutis: 10
  },
  {
    pavadinimas: 'spinta',
    kaina: 100,
    likutis: 5
  },
  {
    pavadinimas: 'sofa',
    kaina: 200,
    likutis: 3
  },
  {
    pavadinimas: 'saldytuvas',
    kaina: 250,
    likutis: 2
  },
];
// -------------------pridedam produkta-------------------------
const addProduct = (pavadinimas,k,likutis) => {
  prekiuLikutis.push({
    pavadinimas: pavadinimas,
    kaina: k, 
    likutis: likutis
  })
}
// -------------------perkam preke,mazeja likutis------------------------------------
const buyProduct = (pavadinimas, likutis) => {
  const found = prekiuLikutis.find((element) => element.pavadinimas === pavadinimas)
  if (found == undefined) {
    return
  }
  found.likutis = likutis
}
// -------------------gaminam sarasa---------------------------------------------------
const listProducts = () => {
  prekiuLikutis.forEach((element) => console.log(`${element.pavadinimas}: Kaina - ${element.kaina}, Likutis - ${element.likutis}`));
}

// ----------------------ieskom ir spausdinam pigiausia preke-------------------------------
const cheapestProduct = () =>{
  let lowestPrice = 99999
  prekiuLikutis.forEach((element)=>{
    if (lowestPrice > element.kaina){
      lowestPrice = element.kaina
    }
  })
  const cheapestProducts = prekiuLikutis.filter((element)=>{
    return element.kaina == lowestPrice
  })
  console.log(cheapestProducts)
}

// ----------------------------Atnaujinam info prekiu----------------------------------------------------------------
const editProductInfo = (senasPavadinimas, naujasPavadinimas, likutis, kaina) =>{
  const found = prekiuLikutis.find((element) => element.pavadinimas === senasPavadinimas)
  if (found == undefined) {
    return
  }
  found.likutis = likutis
  found.pavadinimas = naujasPavadinimas
  found.kaina = kaina
}
// Editinant pavadinima dalinam ji i nauja ir sena kad ieskant galetu grazinti abi reiksmes

document.getElementById('forma').addEventListener('submit', (e)=>{
  e.preventDefault()
  // addProduct('lova', 500, 8)
  // buyProduct('siuskle')
  // listProducts()
  // cheapestProduct()
})

