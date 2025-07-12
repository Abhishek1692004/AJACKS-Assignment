# Employee Directory Web Interface

This project is a front-end web application developed as part of the "Employee Directory Web Interface" assignment. It showcases the use of HTML, CSS, JavaScript, and Freemarker templates to create a responsive employee management system with features like adding, editing, deleting, searching, sorting, filtering, and pagination.

## Setup and Run Instructions

### Prerequisites
- A web browser (e.g., Chrome, Firefox).
- Python 3.x installed (for running a local server).

### Steps to Run
1. **Clone or Download the Project**:
   - Download the `employee-directory` folder or clone the repository (if hosted) to your local machine.

2. **Navigate to the Project Folder**:
   - Open a terminal and change to the project directory:
     
3. **Start the Local Server**:
  - Run the following command to start a Python HTTP server:
  - python -m http.server 8000
  - If `python` doesn’t work, try:
  - python3 -m http.server 8000
    
4. **Access the Application**:
  - Open a browser and go to:
  - http://localhost:8000/src/main/resources/templates/index.html
  - The Employee Directory interface should load.
  - 
5. **Stop the Server**:
- Press `Ctrl + C` in the terminal to stop the server when done.

### Notes
- This setup simulates Freemarker template processing using client-side JavaScript. No full server-side Freemarker environment is required for this version.

## Overview of Project Structure
- `src/main/resources/templates/`:
- `index.html`: The main template file (renamed from `.ftl` for simplicity) containing the HTML structure and Freemarker placeholders.
- `src/main/resources/static/css/`:
- `style.css`: Contains the CSS styles for the responsive layout.
- `src/main/resources/static/js/`:
- `data.js`: Defines the mock employee data array.
- `app.js`: Implements the JavaScript logic for adding, editing, deleting, searching, sorting, filtering, and pagination.
- `README.md`: This file, providing setup and documentation details.

## Screenshots
<img width="1916" height="862" alt="image" src="https://github.com/user-attachments/assets/88a082d4-6894-4bde-90a1-105bfed46bf7" />
<img width="1216" height="733" alt="image" src="https://github.com/user-attachments/assets/fb8135a3-db0b-425a-9de9-87fbf2c332ec" />
<img width="1420" height="849" alt="image" src="https://github.com/user-attachments/assets/8ac8f43f-762f-4aa8-bc6a-78593b27e20b" />

- **Dashboard (Desktop)**: Showing the employee list, search bar, and controls.
- **Dashboard (Mobile)**: Demonstrating the responsive design.
- **Add/Edit Form**: Displaying the form with filled or empty fields.
- **Filter/Sort/Search**: Showing the interface with applied filters or sorted lists.

- **Improvements**:
- Add more robust form validation (e.g., email format checking) with visual feedback.
- Implement a confirmation dialog for deletions to prevent accidental data loss.
- Enhance the UI with animations or a more modern design if time permits.
- Set up a full Freemarker server environment for true template processing in a production-like scenario.
