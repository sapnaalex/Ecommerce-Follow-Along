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







### **Summary for Milestone 8: Frontend Product Card Component and Homepage Design 🚀**

In Milestone 8, we focused on creating a dynamic product card component and designing a homepage to display these cards. Here's an overview of what was achieved:

---

#### **Card Component**
- Designed a reusable card component to display product details such as name, image, and price.
- Implemented props in the card component to pass unique product information dynamically.

#### **Homepage Layout**
- Created a homepage layout to showcase the product cards in an organized manner.
- Utilized **grid layout** or **flexbox** for a clean and structured arrangement of multiple cards.
- Ensured a consistent and visually appealing design for all products displayed on the homepage.

#### **Dynamic Rendering**
- Leveraged array mapping to dynamically render a card for each product in the list.
- Ensured uniformity in the card design while maintaining flexibility for dynamic data.

#### **Documentation**
- Updated the repository’s README file with a new section titled **Milestone 8: Frontend Product Card Component and Homepage Design**, summarizing the progress made in this milestone.

---

Finally, all changes were committed and pushed to the GitHub repository, preparing the application for further enhancements like filtering and sorting in upcoming milestones. 🎯  







### **Summary for Milestone 9: Frontend Product Input Form 🚀**  

In Milestone 9, we focused on creating a frontend form to input product details, including multiple images, ensuring seamless data collection for product listings. Here’s an overview of the progress made:  

---  

#### **Product Input Form**  
- Designed a structured form to capture essential product details such as name, description, price, and images.  
- Implemented form fields to accept multiple images as input using the `<input type="file" multiple>` attribute.  
- Ensured a user-friendly and responsive design for optimal usability.  

#### **Data Handling & Validation**  
- Configured form validation to ensure required fields are filled before submission.  
- Used `enctype="multipart/form-data"` to handle image uploads properly.  

#### **Enhancements & Future Scope**  
- Suggested improvements like implementing **admin access** to restrict product uploads to authorized users.  
- Explored the possibility of creating **shop profiles**, allowing only registered shop owners to upload products.  

#### **Documentation & Submission**  
- Updated the repository’s README file with a new section titled **Milestone 9: Frontend Product Input Form**, summarizing the milestone progress.  
- Committed and pushed all changes to GitHub, ensuring the repository is publicly accessible for submission.  

---  

With this milestone completed, the project is now set up for further enhancements, such as **filtering and sorting product cards**, which will be tackled in the next milestone. 🚀  







### **Summary for Milestone 10: Backend Product Schema and API Endpoint 🛠️**  

In Milestone 10, we focused on building the backend foundation for managing product details by creating a Mongoose schema and an API endpoint to store the product data in MongoDB. Here’s an overview of the progress:  

---  

#### **Product Schema with Mongoose**  
- Defined the structure of product data, including essential fields like `name`, `description`, `price`, and `image URL`.  
- Incorporated validation rules to ensure data integrity, such as:  
  - Marking fields like `name` and `price` as required.  
  - Setting correct data types (e.g., `String` for names and `Number` for price).  

#### **API Endpoint Creation**  
- Built a `POST` endpoint to receive product data from the frontend form.  
- Added validation logic to ensure only valid product details are accepted before saving to the database.  
- Successfully integrated the endpoint with MongoDB to store product details seamlessly.  

#### **Why Validation Matters**  
- Ensured database integrity by validating input fields before saving data.  
- Prevented common errors like incomplete or incorrectly formatted data submissions.  

#### **Enhancements & Future Scope**  
- Suggested advanced features for the future, such as:  
  - Implementing **admin access** to restrict product uploads to authorized users.  
  - Creating **shop profiles** so that only registered shop owners can upload products.  

#### **Documentation & Submission**  
- Updated the repository’s README file with a new section titled **Milestone 10: Backend Product Schema and API Endpoint**, summarizing the milestone progress.  
- Committed and pushed all code changes to GitHub, ensuring the repository is publicly accessible for submission.  

---  

With this milestone complete, the project backend is now ready for further improvements. In the next milestone, we’ll focus on enhancing **product cards with features like filtering and sorting**. Let’s keep building! 🚀  



