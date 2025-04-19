# Group-18
Front-end project for SWE363 Group 18.
# Interactive Therapy Booking System
A web-based platform that simplifies the process of booking and managing therapy sessions. It supports patients, therapists, and clinic administrators with tailored features, responsive UI, and smooth communication tools. Built to align with Figma design prototypes and user experience best practices.


## Features

### Patients
- Login & Authentication
- View Therapist Profiles
- Book, Modify, Cancel Appointments
- Personalized Messaging with Therapists

### Therapists
- Login & Access Patient Bookings
- Manage Availability
- View Patient Info and Notes
- Respond via Secure Messaging

### Admins
- Login & Verify Patient Profiles
- Assign Therapists
- Generate Reports
- Manage App Security




## Technologies Used

- React (Frontend)
- Tailwind CSS
- Shadcn/UI
- React Router
- Axios
- Node.js (optional for backend)


### 1. Clone the Repository
```bash
git clone https://github.com/ddssCS365/Group-18.git
cd Group-18
```


### 2. Check Out Your Branch
- For Admin:  
```bash
git checkout dev-admin
```
- For Patient:
```bash
git checkout dev-patient
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the App
```bash
npm start
```

The app will run at http://localhost:3000 or your default Vite/React dev port.


##  Git Workflow
```bash
git add .
git commit -m "Describe your changes"
git push origin your-branch-name
```
##  Folder Structure

```
src/
├── components/
│   ├── Admin/
│   ├── Patient/
│   ├── Therapist/
├── |
├── assets/
├── App.CSS
├── App.js

```

---
## Team Members & Roles
Mohammad Alharthy 
Basel Alzahrani
Hussain Alnasser
Ayman Al Johani 
Mohammed Andous

## Functional Assignments

### Subgroup 1 – Admin UI (Ayman, Mohammed Andous)
- View Therapists: Add/Edit/Delete
- Manage Appointments: View/Deactivate
- Manage Security: Screen & Settings
- Send Announcements: Admin Sidebar Option
- All Buttons Responsive / Desktop & Mobile Friendly

### Subgroup 2 – Patient UI (Basel, Mohammad Mohammad Alharthy )
- View Doctors: Profiles & Specializations
- Book Appointments
- View My Appointments
- Messaging
- Login/Signup
- All Buttons Responsive / Desktop & Mobile Friendly
##  Subgroup 3 – Therapist UI (Hussain Alnasser)
- Manage Appointment
- Message Patient
- Search Results
- Therapist Dashboard
- View Patients



---

## Optional Links

- Figma Prototype: (set to View Only)
  [View Figma Design](https://www.figma.com/proto/yPF7SwCa6TEFjAcaQs3uEU/Untitled?node-id=0-1&t=ozjMTCr1TidoHDfW-1)

---


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature.



