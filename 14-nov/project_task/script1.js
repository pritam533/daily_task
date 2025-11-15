<script>
      const form = document.getElementById('employeeForm');
      const employeeTableBody = document.getElementById('employeeTableBody');

      form.addEventListener('submit', function (event) {
            event.preventDefault();

      // 1. Get values from the form inputs
      const name = document.getElementById('name').value.trim();
      const age = document.getElementById('age').value.trim();
      const position = document.getElementById('position').value.trim();

      // 2. Simple validation (The 'required' attribute in HTML handles the tooltip from the image)
      if (!name || !age || !position) {
            alert('Please fill out all fields.');
      return;
                  }

      const newRow = document.createElement('tr');

      const nameCell = document.createElement('td');
      nameCell.textContent = name;

      const ageCell = document.createElement('td');
      ageCell.textContent = age;

      const positionCell = document.createElement('td');
      positionCell.textContent = position;
      newRow.appendChild(nameCell);
      newRow.appendChild(ageCell);
      newRow.appendChild(positionCell);
      employeeTableBody.appendChild(newRow);
      form.reset();
            });
</script>