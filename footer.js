function loadText(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}

function loadJSON(url, callback) {
  loadText(url, function (text) {
    callback(JSON.parse(text));
  })
}

// Function to populate footer element
function populateFooter() {
  loadJSON("index.json", function (data) {
    loadText("note.html.partial", function (content) {
      var footer = document.getElementsByTagName("footer")[0];
      data.forEach(function (item) {
        content += "<div class='card'>" + item + "</div>";
      });

      footer.innerHTML = content;
    });
  });
}

// Call the function to populate the footer
populateFooter();
