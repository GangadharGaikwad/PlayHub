# PlayHub

PlayHub is a modern React application designed to help users discover and book esports venues around the world. It features a user-friendly interface with responsive design and a complete authentication system.

## Table of Contents

- [Features](#features)
- [Application Structure](#application-structure)
- [Authentication System](#authentication-system)
- [Venue Booking System](#venue-booking-system)
- [Components](#components)
- [Pages](#pages)
- [Styling](#styling)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)

## Features

- **Venue Discovery**: Browse and search for esports venues worldwide
- **Detailed Venue Pages**: View comprehensive information about each venue
- **Venue Booking**: Interactive calendar for selecting booking dates
- **User Authentication**: Complete login, signup, and password recovery system
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, intuitive user interface with smooth animations

## Application Structure

PlayHub follows a component-based architecture using React and React Router for navigation. The application is organized as follows:

```
play-hub/
├── public/             # Static files
├── src/                # Source code
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── App.js          # Main application component
│   ├── App.css         # Global styles
│   └── index.js        # Entry point
└── package.json        # Dependencies and scripts
```

## Authentication System

PlayHub includes a complete authentication system with the following features:

### Login

- Email and password authentication
- Remember me functionality
- Form validation
- Redirect to previous page after login

### Sign Up

- User registration with name, email, and password
- Password confirmation
- Terms of service acceptance
- Form validation

### Password Recovery

- Email-based password recovery
- Success confirmation message
- Form validation

### Authentication State

- Authentication state is stored in localStorage
- Protected routes require authentication
- Login status is maintained across the application
- Automatic redirection to login when accessing protected resources

## Venue Booking System

The venue booking system allows users to:

1. Browse venues on the Home and Venues pages
2. View detailed information about each venue on the VenueDetail page
3. Select booking dates using an interactive calendar
4. Complete booking (requires authentication)

### Booking Process:

1. User selects a venue by clicking on a venue card
2. User is directed to the venue detail page
3. If the user is not logged in and attempts to book, a login prompt appears
4. After logging in, the user is redirected back to the venue detail page
5. User can select a date from the calendar
6. User confirms the booking

## Components

### Navbar

The navigation bar provides access to all main sections of the application and displays login/logout options.

- Dynamic links to main pages
- Responsive design with hamburger menu for mobile
- Authentication-aware: shows Login or Logout based on user status
- Active link highlighting

### Footer

The footer contains additional navigation links and information about PlayHub.

### Venue Cards

Venue cards display preview information about each venue:

- Venue name and location
- Rating
- Featured image
- Clickable links to venue detail pages

## Pages

### Home

The home page showcases featured venues and provides an introduction to PlayHub.

### Venues

The venues page displays a grid of venue cards, allowing users to browse all available venues.

### VenueDetail

The venue detail page provides comprehensive information about a specific venue:

- Image gallery
- Venue name, location, and rating
- Features and amenities
- Description
- Booking calendar (requires authentication)
- Navigation to other venues

### Authentication Pages

- **Login**: User login form
- **Signup**: New user registration form
- **ForgotPassword**: Password recovery form

## Styling

PlayHub uses a consistent design system defined with CSS variables:

```css
:root {
  --primary: #6200ea;
  --primary-dark: #5100c9;
  --accent: #00e7ff;
  --text-primary: #333333;
  --text-secondary: #777777;
}
```

Components follow this design system for a cohesive look and feel across the application.

## Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/GangadharGaikwad/PlayHub.git
   cd play-hub
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. The application will be available at http://localhost:3000

## Usage

### Browsing Venues

1. Navigate to the Home or Venues page
2. Click on any venue card to view details

### Booking a Venue

1. Navigate to a venue detail page
2. Click the "Book Now" button
3. If not logged in, you'll be prompted to log in
4. After logging in, select a date from the calendar
5. Confirm your booking

### User Authentication

1. **Login**: Click the "Log In" button in the navigation bar
2. **Sign Up**: Click "Sign Up" on the login page
3. **Forgot Password**: Click "Forgot password?" on the login page

### Demo Accounts

For demonstration purposes, any valid email format and password (minimum 6 characters) will work.

---

© 2023 PlayHub. All rights reserved.
