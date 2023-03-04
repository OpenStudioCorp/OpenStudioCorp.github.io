function goToPage() {
  var dropdown = document.getElementById("bd1");
  var selectedPage = dropdown.options[dropdown.selectedIndex].value;
  if (selectedPage !== "") {
    window.location.href = selectedPage;
  }
}