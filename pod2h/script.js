// script.js

// Function to add a new row
document.getElementById('add-new-row').addEventListener('click', function() {
    const tableBody = document.querySelector('.my-table tbody');
    const lastRow = tableBody.querySelector('tr:not(.my-table-heading)');
    if (lastRow) {
        const newRow = lastRow.cloneNode(true);
        newRow.querySelectorAll('td').forEach(td => {
            td.textContent = ''; // Clear content of new row
            td.setAttribute('contenteditable', 'true'); // Ensure contenteditable is set
        });
        tableBody.appendChild(newRow);
    }
});

// Function to duplicate the last row
document.getElementById('duplicate-row').addEventListener('click', function() {
    const tableBody = document.querySelector('.my-table tbody');
    const rows = tableBody.querySelectorAll('tr:not(.my-table-heading)');
    const lastRow = rows[rows.length - 1];
    if (lastRow) {
        const newRow = lastRow.cloneNode(true);
        tableBody.appendChild(newRow);
    }
});

// Function to delete the last row
document.getElementById('del-last-row').addEventListener('click', function() {
    const tableBody = document.querySelector('.my-table tbody');
    const rows = tableBody.querySelectorAll('tr:not(.my-table-heading)');
    if (rows.length > 0) {
        tableBody.removeChild(rows[rows.length - 1]);
    }
});

// Function to copy the code of the entire .fulfill-price div
document.getElementById('copy-code').addEventListener('click', function() {
    const fulfillPriceDiv = document.querySelector('.fulfill-price');
    
    // Remove contenteditable attributes
    fulfillPriceDiv.querySelectorAll('[contenteditable="true"]').forEach(el => {
        el.removeAttribute('contenteditable');
    });

    // Get the entire HTML content of the .fulfill-price div
    const container = fulfillPriceDiv.outerHTML;

    // Create a temporary textarea to hold the code
    const textarea = document.createElement('textarea');
    textarea.value = container;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Optionally, re-add contenteditable attributes
    fulfillPriceDiv.querySelectorAll('td').forEach(td => {
        td.setAttribute('contenteditable', 'true');
    });

    alert('Code copied to clipboard!');
});
