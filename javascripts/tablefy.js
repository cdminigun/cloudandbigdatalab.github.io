function tablefy() {
  var tables = document.getElementsByTagName("table");
  if (tables != null) {
    for (var i = 0; i < tables.length; i++) {
      tables[i].className = "table";
    }
  }
}

window.onload = tablefy;
