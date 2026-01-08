let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  let item = cart.find(p => p.name === name);
  if (item) item.qty++;
  else cart.push({name, price, qty:1});

  localStorage.setItem("cart", JSON.stringify(cart));
  showToast("Produk ditambahkan");
}

function showToast(msg) {
  let t = document.getElementById("toast");
  t.innerText = msg;
  t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),2000);
}

function checkout() {
  if(cart.length===0) return;
  let msg="Halo saya pesan:%0A";
  cart.forEach(i=>{
    msg+=`- ${i.name} (${i.qty})%0A`;
  });
  window.open("https://wa.me/6281234567890?text="+msg);
}
