// Get the container element
const container = document.getElementById('container');

// Fetch the JSON file
fetch('repo.json')
  .then(response => response.json())
  .then(data => {
    // Loop through the data and create a checkbox for each entry
    data.packages.forEach(entry => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = entry.name;
      container.appendChild(checkbox);

      const label = document.createElement('label');
      label.textContent = `${entry.name} (${entry.version})`;
      container.appendChild(label);

      container.appendChild(document.createElement('br'));
    });

    // Create a button to download the selected entries
    const button = document.createElement('button');
    button.textContent = 'Download Selected Entries';
    button.style.display = 'none';
    button.addEventListener('click', () => {
      const selectedEntries = [];
      const checkboxes = container.querySelectorAll('input[type="checkbox"]');
      if (checkboxes && checkboxes.length > 0) {
        checkboxes.forEach(checkbox => {
          if (checkbox.checked) {
            selectedEntries.push(checkbox.value);
          }
        });
      }

      const content = selectedEntries.join('\n');
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'selected-entries.txt';
      link.click();
      URL.revokeObjectURL(url);
    });

    container.appendChild(button);

    // Show the button if any checkboxes are checked
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    if (checkboxes && checkboxes.length > 0) {
      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          const anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
          button.style.display = anyChecked ? 'block' : 'none';
        });
      });
    }
  })
  .catch(error => console.error(error));