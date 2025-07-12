<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Directory</title>
    <link rel="stylesheet" href="../static/css/style.css">
</head>
<body>
    <div class="container">
        <h1>Employee Directory</h1>
        <div class="controls">
            <input type="text" id="searchInput" placeholder="Search by name or email">
            <select id="sortSelect">
                <option value="default">Sort: --Select--</option>
                <option value="firstName">First Name</option>
                <option value="department">Department</option>
            </select>
            <select id="itemsPerPage">
                <option value="5">Show: 5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>
            <button id="filterBtn">Filter</button>
            <button id="addEmployeeBtn">Add Employee</button>
        </div>
        <div id="filterPanel" style="display: none;">
            <input type="text" id="filterFirstName" placeholder="First Name">
            <input type="text" id="filterDepartment" placeholder="Department">
            <input type="text" id="filterRole" placeholder="Role">
            <button onclick="applyFilter()">Apply</button>
            <button onclick="resetFilter()">Reset</button>
        </div>
        <div id="employeeList"></div>
        <div id="pagination" style="margin-top: 10px;"></div>
        <div id="addForm" style="display: none;">
            <h2>Add Employee</h2>
            <input type="text" id="firstName" placeholder="First name"><br>
            <input type="text" id="lastName" placeholder="Last name"><br>
            <input type="text" id="email" placeholder="Email"><br>
            <input type="text" id="department" placeholder="Department"><br>
            <input type="text" id="role" placeholder="Role"><br>
            <button onclick="saveEmployee()">Add</button>
            <button onclick="cancelForm()">Cancel</button>
        </div>
    </div>
    <script src="../static/js/data.js"></script>
    <script src="../static/js/app.js"></script>
</body>
</html>