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

const itemNameEl = document.getElementById("item_name");
const itemTotalEl = document.getElementById("item_total");

const onSubmit = (e) => {
  e.preventDefault();
  const itemName = itemNameEl.value;
  const itemTotal = itemTotalEl.value;

  if (!itemName || !itemTotal) {
    onItemNameChange();
    onItemTotalChange();
    return;
  }

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

  itemNameEl.value = "";
  itemTotalEl.value = "";

  totalItems++;
  checkTotal();
};

const onItemNameChange = () => {
  const idItemNameErrorElement = document.getElementById("item_name_error");
  if (itemNameEl.value === "") {
    itemNameEl.classList.add("error");
    idItemNameErrorElement.innerHTML = "Nama barang harus diisi";
  } else {
    itemNameEl.classList.remove("error");
    idItemNameErrorElement.innerHTML = "&nbsp;";
  }
};
itemNameEl.addEventListener("input", onItemNameChange);

const onItemTotalChange = () => {
  const idItemTotalErrorElement = document.getElementById("item_total_error");
  if (itemTotalEl.value === "") {
    itemTotalEl.classList.add("error");
    idItemTotalErrorElement.innerHTML = "Jumlah barang harus diisi";
  } else if (isNaN(itemTotalEl.value)) {
    itemTotalEl.classList.add("error");
    idItemTotalErrorElement.innerHTML = "Jumlah barang harus berupa angka";
  } else {
    itemTotalEl.classList.remove("error");
    idItemTotalErrorElement.innerHTML = "&nbsp;";
  }
};
itemTotalEl.addEventListener("input", onItemTotalChange);

const formEl = document.getElementById("add-form");
formEl.addEventListener("submit", onSubmit);
