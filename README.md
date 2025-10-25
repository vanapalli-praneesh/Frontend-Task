# Frontend Task - User Management System

A comprehensive React-based user management system with profile management, data persistence, and form validation.

## 🚀 Features

### Core Functionality
- **User Management**: Add, view, edit, and delete users
- **Profile System**: Detailed user profiles with multiple sections
- **Data Persistence**: Browser localStorage integration
- **Form Validation**: Comprehensive input validation
- **Responsive Design**: Modern UI with Tailwind CSS

### User Interface
- **User List**: Table view with action buttons
- **Add User Modal**: Form to create new users
- **Profile Pages**: Detailed user information display
- **Edit Forms**: In-place editing with validation

## 📋 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Validation Rules](#validation-rules)
- [Data Flow](#data-flow)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vanapalli-praneesh/Frontend-Task.git
   cd Frontend-Task
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎯 Usage

### Adding a New User
1. Click the "Add User" button
2. Fill in the required fields:
   - **Name**: Characters only
   - **Email**: Valid email format
   - **Contact**: Exactly 10 digits
3. Click "Add" to create the user

### Viewing User Profile
1. Click the eye icon (👁️) next to any user
2. View detailed profile information
3. Navigate between different profile sections

### Editing User Information
1. Go to user profile
2. Click "Edit" in any section
3. Make changes with real-time validation
4. Click "Save Changes" to persist data

### Deleting Users
1. Click the trash icon (🗑️) next to any user
2. Confirm deletion

## 📁 Project Structure

```
src/
├── components/
│   ├── AddUserModal.jsx      # Modal for adding new users
│   ├── BasicInfo.jsx         # Basic user information form
│   ├── EducationSkills.jsx  # Education and skills section
│   ├── Experience.jsx       # Work experience and profile links
│   ├── MyProfile.jsx        # Main profile display component
│   └── User.jsx             # User list and management
├── App.jsx                   # Main application component
├── main.jsx                  # Application entry point
└── index.css                 # Global styles
```

## 🧩 Components

### App.jsx
- **Purpose**: Main application router and state management
- **Key Features**:
  - Navigation between user list and profile views
  - Selected user state management
  - Component routing logic

### User.jsx
- **Purpose**: User list management and CRUD operations
- **Key Features**:
  - Display users in table format
  - Add/delete user functionality
  - localStorage integration
  - Navigation to user profiles

### AddUserModal.jsx
- **Purpose**: Modal form for creating new users
- **Key Features**:
  - Form validation (name, email, contact)
  - User creation with complete data structure
  - localStorage persistence
  - Modal state management

### MyProfile.jsx
- **Purpose**: Display detailed user profile
- **Key Features**:
  - User information display
  - Contact information copying
  - Component integration (BasicInfo, EducationSkills, Experience)

### BasicInfo.jsx
- **Purpose**: Basic user information management
- **Key Features**:
  - Personal details form
  - Phone number validation (exactly 10 digits)
  - Data persistence to localStorage
  - Real-time form validation

### EducationSkills.jsx
- **Purpose**: Education and skills management
- **Key Features**:
  - Education history form
  - Skills and projects input
  - Character-only validation for text fields
  - Data persistence

### Experience.jsx
- **Purpose**: Work experience and profile links
- **Key Features**:
  - Work experience form
  - Profile URL validation
  - LinkedIn and resume link management
  - URL format validation

## ✅ Validation Rules

### Input Field Validations

#### Text Fields (Characters Only)
- **Name fields**: First name, last name, school, degree, course, skills, projects
- **Validation**: Only letters and spaces allowed
- **Error Message**: "Please enter characters only"

#### Numeric Fields
- **Pincode**: Numbers only
- **Phone Number**: Exactly 10 digits, numbers only
- **Alternate Phone**: Numbers only
- **Contact**: Exactly 10 digits, numbers only

#### Email Fields
- **Email**: No validation (removed as requested)
- **Format**: Accepts any input

#### URL Fields
- **LinkedIn, Resume, Profile URLs**: Valid URL format required
- **Validation**: Must start with http:// or https://
- **Error Message**: "Please enter a valid URL"

### Save Validation
- **Phone Numbers**: Must be exactly 10 digits to save
- **Contact**: Must be exactly 10 digits to save
- **Error Messages**: 
  - "Phone number must be exactly 10 digits"
  - "Alternate phone must be exactly 10 digits"
  - "Contact must be exactly 10 digits"

## 🔄 Data Flow

### User Creation Flow
1. **AddUserModal** → Creates user object
2. **localStorage** → Stores user data
3. **User.jsx** → Updates user list
4. **Navigation** → Redirects to profile

### Profile Editing Flow
1. **MyProfile** → Displays user data
2. **BasicInfo/EducationSkills/Experience** → Edit forms
3. **Validation** → Real-time input validation
4. **Save** → Updates localStorage
5. **Refresh** → Updates displayed data

### Data Persistence
- **Storage**: Browser localStorage
- **Key**: 'users' (array of user objects)
- **Structure**: Complete user objects with all fields
- **Persistence**: Survives browser sessions

## 🎨 Features

### User Interface
- **Modern Design**: Clean, professional interface
- **Responsive Layout**: Works on all screen sizes
- **Interactive Elements**: Hover effects, transitions
- **Icon Integration**: Lucide React icons

### User Experience
- **Real-time Validation**: Immediate feedback on input
- **Error Messages**: Clear, helpful error messages
- **Data Persistence**: Changes saved automatically
- **Navigation**: Smooth transitions between views

### Data Management
- **CRUD Operations**: Create, Read, Update, Delete
- **localStorage**: Browser-based data persistence
- **State Management**: React state for real-time updates
- **Data Validation**: Comprehensive input validation

## 🛠️ Technologies Used

### Frontend
- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library

### Development Tools
- **Node.js**: JavaScript runtime
- **npm**: Package manager
- **Git**: Version control
- **GitHub**: Code repository

### Browser APIs
- **localStorage**: Client-side data persistence
- **Clipboard API**: Copy functionality

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Modern web browser

### Development Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open browser to `http://localhost:5173`

### Building for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📝 Key Features Implemented

### ✅ User Management
- Add new users with validation
- View user profiles
- Edit user information
- Delete users
- Data persistence

### ✅ Form Validation
- Real-time input validation
- Save-time validation
- Character-only fields
- Numeric-only fields
- URL validation
- Phone number validation (exactly 10 digits)

### ✅ Data Persistence
- localStorage integration
- Automatic data saving
- Cross-session persistence
- Data synchronization

### ✅ User Interface
- Modern, responsive design
- Interactive elements
- Clear error messages
- Smooth navigation

## 🔧 Configuration

### Environment Variables
No environment variables required for basic functionality.

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📊 Project Statistics

- **Components**: 7 React components
- **Validation Rules**: 15+ validation rules
- **Features**: 20+ implemented features
- **Lines of Code**: 2000+ lines
- **Dependencies**: 10+ npm packages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Praneesh Vanapalli**
- GitHub: [@vanapalli-praneesh](https://github.com/vanapalli-praneesh)
- Repository: [Frontend-Task](https://github.com/vanapalli-praneesh/Frontend-Task)

## 🎯 Future Enhancements

- [ ] Search and filter functionality
- [ ] Export user data (CSV/PDF)
- [ ] User authentication
- [ ] Database integration
- [ ] Advanced validation rules
- [ ] Bulk operations
- [ ] User roles and permissions

---

**Built with ❤️ using React, Tailwind CSS, and modern web technologies.**
