export function mostrarCreate() {
  document.getElementById("view-create").hidden = false;
  document.getElementById("view-crud").hidden = true;
}

export function mostrarCrud() {
  document.getElementById("view-create").hidden = true;
  document.getElementById("view-crud").hidden = false;
}
