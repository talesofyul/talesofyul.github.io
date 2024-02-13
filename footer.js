function loadJSON(callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET", "index.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  };
  xhr.send(null);
}

// Function to populate footer element
function populateFooter() {
  loadJSON(function (data) {
    var footer = document.getElementsByTagName("footer")[0];
    var content = "<h2>Recent Investigation Results</h2>";

    // Assuming the JSON file contains an array of strings
    data.forEach(function (item) {
      content += "<p>" + item + "</p>";
    });

    footer.innerHTML = content;
  });
}

// Call the function to populate the footer
populateFooter();
