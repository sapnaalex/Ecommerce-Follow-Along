# Ecommerce-Follow-Along

Project Description

This project is a full-stack e-commerce web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The MERN stack enables developers to build seamless, JavaScript-powered applications with both frontend and backend functionality.

Milestone 1: Project Overview

Overview of the MERN Stack The MERN stack is a popular technology stack for full-stack web development. It consists of:

MongoDB – NoSQL database for storing application data. Express.js – Backend framework for handling server logic. React.js – Frontend library for building dynamic user interfaces. Node.js – JavaScript runtime for executing server-side code. This stack allows developers to use a single language, JavaScript, throughout the entire application, making development more efficient and beginner-friendly.


### **Milestone 2: Project Creation and Login Interface Design**

In this milestone, I achieved the set objectives to advance in the development of the E-Commerce Application:

---

#### **1. Project Folder Structure**

- Split the project into a ***frontend*** and a ***backend*** to improve organization and structure. 

#### **2. React Frontend Setup**

- Set up the user interface with a React frontend.

- Set up the required packages for React.

#### **3. Node.js Backend Setup**

- Created a simple Node.js application to initiate the server for the application.

- Set the server up for API integration in the future.

#### **4. Tailwind CSS Integration**

- Set up **Tailwind CSS** to provide utility first responsive styles throughout the application. 

#### **5. Login Page Development**

- Designed the first user interface element, a fully functional **Login Page**.

- Designed the Login Page with Tailwind CSS for a responsive and polished user interface

- Implemented simple features to manage user input.

---

### **Results**

Everything is in order; the project is organized, and development can continue. 

Login Page. The fully functional styled skeleton of the UI has been done.

The outstanding milestone serves as a foundation for adding more functionality in future 3 phases of the project.





### Summary for Milestone 3: Project Setup for Backend 🚀

In **Milestone 3**, we advanced our e-commerce application by establishing a solid backend foundation. Here's an overview of what was achieved:

1. **Backend Folder Structure**:
   - Created a well-organized hierarchy for backend files and folders, including directories for routes, controllers, models, and middleware.

2. **Server Setup**:
   - Set up a backend server using **Node.js** and **Express.js**.
   - Configured the server to listen on a designated port.

3. **Database Connection**:
   - Integrated **MongoDB** to enable efficient data storage and management.
   - Verified the connection between the server and the database.

4. **Error Handling**:
   - Implemented basic error-handling mechanisms to provide meaningful feedback and ensure smooth server operation.

5. **Documentation**:
   - Updated the repository’s **README file** with a new section titled *Milestone 3: Project Setup for Backend*, summarizing the progress made in this milestone.

Finally, all changes were committed and pushed to the GitHub repository, ensuring the application is ready for further enhancements in the upcoming milestones. 🎯





### **Summary for Milestone 4: User Model, Controllers, and File Uploads 🚀**

In Milestone 4, we expanded the backend functionality of our e-commerce application by focusing on user data management and file upload capabilities. Here's an overview of what was achieved:

---

#### **User Model Creation**
- Designed and implemented a **User Model** using MongoDB schemas to define how user data (e.g., name, email, password) is structured and stored in the database.

#### **User Controller Setup**
- Developed a **User Controller** to handle user-related operations such as adding new users and retrieving user information.
- Ensured efficient management of user data through clear and functional controller logic.

#### **File Uploads with Multer**
- Integrated **Multer**, a Node.js middleware, to enable the application to handle file uploads (e.g., user profile pictures).
- Configured Multer to store and manage uploaded files efficiently on the server.

#### **Documentation**
- Updated the repository’s README file with a new section titled **Milestone 4: User Model, Controllers, and File Uploads**, summarizing the progress made in this milestone.

---

Finally, all changes were committed and pushed to the GitHub repository, setting a strong foundation for more advanced features in future milestones. 🎯





### **Summary for Milestone 5: Frontend Sign-Up Page and Form Validation 🚀**

In Milestone 5, we focused on enhancing the frontend of our e-commerce application by implementing a user-friendly Sign-Up Page and ensuring data integrity through form validation. Here's an overview of what was achieved:

---

#### **Sign-Up Page Creation**
- Designed and developed a **Sign-Up Page** using HTML and CSS, enabling users to register by providing their details.
- Included essential fields such as **Name**, **Email**, and **Password** to facilitate account creation.

#### **Form Validation**
- Implemented **form validation** to ensure that user inputs are correct and secure before submission:
  - Verified that the email is in the correct format.
  - Ensured that the password meets specified criteria, such as a minimum length.
- Enhanced the user experience by providing real-time feedback for invalid inputs.

#### **Documentation**
- Updated the repository’s README file with a new section titled **Milestone 5: Frontend Sign-Up Page and Form Validation**, summarizing the progress made in this milestone.

---

Finally, all changes were committed and pushed to the GitHub repository, preparing the frontend for integration with the backend in upcoming milestones. 🎯







### **Summary for Milestone 6: Backend Endpoint for Sign-Up and Password Encryption 🚀**

In Milestone 6, we focused on securing user data by creating a backend endpoint for the Sign-Up page and implementing password encryption. Here's an overview of what was achieved:

---

#### **Password Encryption**
- Integrated **bcrypt** to hash user passwords before storing them in the database.
- Ensured that the password is stored in a secure, encrypted format, protecting user data even if the database is compromised.

#### **Storing Complete User Data**
- Developed a backend endpoint to store **user details** (such as name, email, etc.) securely in the database.
- Ensured the password is never stored in plain text, enhancing data privacy and compliance with security standards.

#### **Documentation**
- Updated the repository’s README file with a new section titled **Milestone 6: Backend Endpoint for Sign-Up and Password Encryption**, summarizing the progress made in this milestone.

---

Finally, all changes were committed and pushed to the GitHub repository, preparing the application for further enhancements in the upcoming milestones. 🎯









### **Summary for Milestone 7: Backend Endpoint for User Login 🚀**

In Milestone 7, we focused on implementing a backend endpoint for user login, validating user credentials, and verifying encrypted passwords. Here's an overview of what was achieved:

---

#### **Login Endpoint**
- Created a backend endpoint to accept user credentials (email/username and password) during login.
- Implemented logic to fetch the corresponding user record from the database using the provided email/username.
- Handled scenarios where the user does not exist by returning an appropriate error message: *"User does not exist."*

#### **Password Validation**
- Used **bcrypt** to hash the user's entered password.
- Compared the hashed input password with the stored hashed password in the database.
- Successfully authenticated users when the passwords matched, and returned an error when they did not.

#### **Secure Authentication**
- Ensured that user passwords were never decrypted but rather compared using hash verification, maintaining a high level of security.

#### **Documentation**
- Updated the repository’s README file with a new section titled **Milestone 7: Backend Endpoint for User Login**, summarizing the progress made in this milestone.

---

Finally, all changes were committed and pushed to the GitHub repository, ensuring the application is ready for advanced features in future milestones. 🎯
