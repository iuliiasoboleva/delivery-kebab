function userForm(target) {}
function courierOrders(target) {}
function courierOrderClose(target) {
  const id = target.id.split('_')[1];
  fetch(`/product/delete/${id}`)
    .then((res) => res.json())
    .then((data) => {
      const div = document.getElementById(`list_${id}`);
      div.style = 'display: none';
    });
}
