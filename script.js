const STORAGE_KEY = "shopping-list-items";

const form = document.getElementById("add-form");
const input = document.getElementById("item-input");
const list = document.getElementById("item-list");
const emptyMessage = document.getElementById("empty-message");

function loadItems() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveItems(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

let items = loadItems();

function render() {
  list.innerHTML = "";
  emptyMessage.classList.toggle("hidden", items.length > 0);

  items.forEach((item) => {
    const li = document.createElement("li");
    li.dataset.id = item.id;
    li.className = item.checked ? "item-checked" : "";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.checked;
    checkbox.addEventListener("change", () => toggleItem(item.id));

    const name = document.createElement("span");
    name.className = "item-name";
    name.textContent = item.name;

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "삭제";
    deleteBtn.addEventListener("click", () => deleteItem(item.id));

    li.append(checkbox, name, deleteBtn);
    list.appendChild(li);
  });
}

function addItem(name) {
  const trimmed = name.trim();
  if (!trimmed) return;
  items.push({ id: Date.now().toString(), name: trimmed, checked: false });
  saveItems(items);
  render();
}

function toggleItem(id) {
  items = items.map((item) =>
    item.id === id ? { ...item, checked: !item.checked } : item
  );
  saveItems(items);
  render();
}

function deleteItem(id) {
  items = items.filter((item) => item.id !== id);
  saveItems(items);
  render();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addItem(input.value);
  input.value = "";
  input.focus();
});

render();
