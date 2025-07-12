// Store the full list of employees and the filtered list for dynamic updates
let employees = [...mockEmployees];
let filteredEmployees = [...employees];
let currentPage = 1; // Track the current page for pagination
let itemsPerPage = 5; // Default number of items per page

// Render the employee list based on the current page and filtered data
function renderEmployees() {
    const employeeList = document.getElementById('employeeList');
    const start = (currentPage - 1) * itemsPerPage; // Calculate the starting index
    const end = start + itemsPerPage; // Calculate the ending index
    const paginatedEmployees = filteredEmployees.slice(start, end); // Get the current page's data

    employeeList.innerHTML = ''; // Clear the current list
    paginatedEmployees.forEach(emp => {
        const div = document.createElement('div');
        div.className = 'employee-card';
        div.innerHTML = `
            <p>${emp.firstName} ${emp.lastName}</p>
            <p>Email: ${emp.email}</p>
            <p>Department: ${emp.department}</p>
            <p>Role: ${emp.role}</p>
            <button onclick="editEmployee(${emp.id})">Edit</button>
            <button onclick="deleteEmployee(${emp.id})">Delete</button>
        `;
        employeeList.appendChild(div);
    });
    renderPagination(); // Update pagination controls
}

// Generate and display pagination buttons
function renderPagination() {
    const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage); // Calculate total pages
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = ''; // Clear existing pagination

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.onclick = () => { currentPage = i; renderEmployees(); }; // Set page on click
        if (i === currentPage) button.style.backgroundColor = '#ddd'; // Highlight current page
        pagination.appendChild(button);
    }
}

// Remove an employee by ID and refresh the display
function deleteEmployee(id) {
    employees = employees.filter(emp => emp.id !== id); // Remove the employee
    filteredEmployees = [...employees]; // Update filtered list
    currentPage = 1; // Reset to first page
    renderEmployees();
}

// Populate the form with employee data for editing
function editEmployee(id) {
    const emp = employees.find(emp => emp.id === id); // Find the employee to edit
    document.getElementById('firstName').value = emp.firstName;
    document.getElementById('lastName').value = emp.lastName;
    document.getElementById('email').value = emp.email;
    document.getElementById('department').value = emp.department;
    document.getElementById('role').value = emp.role;
    document.getElementById('addForm').style.display = 'block'; // Show the form
    window.currentEditId = id; // Track the employee being edited
}

// Save or update employee data and refresh the display
function saveEmployee() {
    const emp = {
        id: window.currentEditId || Date.now(), // Use existing ID or generate new one
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        department: document.getElementById('department').value,
        role: document.getElementById('role').value
    };
    if (window.currentEditId) {
        employees = employees.map(e => e.id === window.currentEditId ? emp : e); // Update existing employee
        delete window.currentEditId; // Clear edit tracking
    } else {
        employees.push(emp); // Add new employee
    }
    filteredEmployees = [...employees]; // Update filtered list
    currentPage = 1; // Reset to first page
    cancelForm(); // Hide and clear the form
    renderEmployees();
}

// Hide the form and clear its fields
function cancelForm() {
    document.getElementById('addForm').style.display = 'none';
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('department').value = '';
    document.getElementById('role').value = '';
}

// Show the add employee form
document.getElementById('addEmployeeBtn').addEventListener('click', () => {
    delete window.currentEditId; // Clear any edit state
    document.getElementById('addForm').style.display = 'block';
});

// Filter employees based on search input
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase(); // Get search term
    filteredEmployees = employees.filter(emp =>
        emp.firstName.toLowerCase().includes(searchTerm) ||
        emp.lastName.toLowerCase().includes(searchTerm) ||
        emp.email.toLowerCase().includes(searchTerm)
    );
    currentPage = 1; // Reset to first page
    renderEmployees();
});

// Sort employees based on selected criterion
document.getElementById('sortSelect').addEventListener('change', (e) => {
    const sortBy = e.target.value; // Get sort criterion
    if (sortBy === 'firstName') {
        filteredEmployees.sort((a, b) => a.firstName.localeCompare(b.firstName)); // Sort by first name
    } else if (sortBy === 'department') {
        filteredEmployees.sort((a, b) => a.department.localeCompare(b.department)); // Sort by department
    } else {
        filteredEmployees = [...employees]; // Reset to original order
    }
    currentPage = 1; // Reset to first page
    renderEmployees();
});

// Update items per page and refresh display
document.getElementById('itemsPerPage').addEventListener('change', (e) => {
    itemsPerPage = parseInt(e.target.value); // Set new items per page
    currentPage = 1; // Reset to first page
    renderEmployees();
});

// Toggle filter panel visibility
document.getElementById('filterBtn').addEventListener('click', () => {
    const filterPanel = document.getElementById('filterPanel');
    filterPanel.style.display = filterPanel.style.display === 'none' ? 'block' : 'none'; // Toggle display
});

// Apply filters based on input values
function applyFilter() {
    const firstName = document.getElementById('filterFirstName').value.toLowerCase();
    const department = document.getElementById('filterDepartment').value.toLowerCase();
    const role = document.getElementById('filterRole').value.toLowerCase();

    filteredEmployees = employees.filter(emp =>
        (!firstName || emp.firstName.toLowerCase().includes(firstName)) &&
        (!department || emp.department.toLowerCase().includes(department)) &&
        (!role || emp.role.toLowerCase().includes(role))
    );
    currentPage = 1; // Reset to first page
    renderEmployees();
    document.getElementById('filterPanel').style.display = 'none'; // Hide panel after applying
}

// Reset filters and refresh display
function resetFilter() {
    document.getElementById('filterFirstName').value = '';
    document.getElementById('filterDepartment').value = '';
    document.getElementById('filterRole').value = '';
    filteredEmployees = [...employees]; // Restore original list
    currentPage = 1; // Reset to first page
    renderEmployees();
}

// Initial render of the employee list
renderEmployees();