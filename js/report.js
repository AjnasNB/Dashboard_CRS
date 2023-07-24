

var dropdownBtn = document.querySelector('.dropbtn');
var dropdownContent = document.querySelector('.dropdown-content');
var tableContainer = document.getElementById('tableContainer');

// Define the options with IDs and data
var options = [
  { id: 1, text: 'Report 1', data: [{ reportid: 123, date: '2023-07-08', country: 'USA' }] },
  { id: 2, text: 'Report 2', data: [{ reportid: 456, date: '2023-07-09', country: 'Canada' }] },
  { id: 3, text: 'Report 3', data: [{ reportid: 789, date: '2023-07-10', country: 'Australia' } ] }
];

// Generate the options dynamically
options.forEach(function(option) {
  var optionLink = document.createElement('a');
  optionLink.href = '#';
  optionLink.textContent = option.text;
  optionLink.addEventListener('click', function() {
    // Handle option click
    handleOptionClick(option.data);
  });
  dropdownContent.appendChild(optionLink);
});

// Toggle the visibility of the dropdown content when the button is clicked
dropdownBtn.addEventListener('click', function() {
  dropdownContent.classList.toggle('show');
});

// Hide the dropdown content if the user clicks outside of it
window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropbtn')) {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }
});

// Handle option click
function handleOptionClick(data) {
  // Create the table
  var table = document.createElement('table');

  // Create the table header
  var thead = document.createElement('thead');
  var headerRow = document.createElement('tr');
  var headerCells = ['Report ID', 'Date', 'Country'];

  headerCells.forEach(function(headerText) {
    var headerCell = document.createElement('th');
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create the table body
  var tbody = document.createElement('tbody');

  data.forEach(function(item) {
    var row = document.createElement('tr');

    Object.values(item).forEach(function(value) {
      var cell = document.createElement('td');
      cell.textContent = value;
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  // Clear previous table, if any
  tableContainer.innerHTML = '';

  // Append the table to the table container
  tableContainer.appendChild(table);
}