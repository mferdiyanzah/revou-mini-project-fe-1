let totalItems = 0;

const cartEl = document.getElementById("cart");

const descriptionEl = document.createElement("p");
cartEl.appendChild(descriptionEl);

const checkTotal = () => {
  if (totalItems === 0) {
    descriptionEl.innerHTML = "Keranjang belanja masih kosong";
  } else {
    descriptionEl.innerHTML = `Total Jenis Barang: ${totalItems}`;
  }
};
checkTotal();

const onSubmit = (e) => {
  e.preventDefault();
  const itemName = document.getElementById("item_name").value;
  const itemTotal = document.getElementById("item_total").value;

  const itemEl = document.createElement("li");

  const textEl = document.createElement("span");
  textEl.innerHTML = `${itemName} - ${itemTotal} barang`;
  itemEl.appendChild(textEl);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.onclick = () => {
    itemEl.remove();
    totalItems--;
    checkTotal();
  };
  itemEl.appendChild(deleteBtn);

  cartEl.appendChild(itemEl);

  totalItems++;
  checkTotal();
};

const formEl = document.getElementById("add-form");
formEl.addEventListener("submit", onSubmit);
