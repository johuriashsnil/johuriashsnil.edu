# School Management System

A comprehensive school management web application built with Next.js, featuring academic resources, notices, routines, and an admin dashboard.

## Project Structure

```bash
├── .eslintrc.json
├── .gitignore
├── README.md
├── app/
│   ├── (home)/               # Home page and results
│   ├── about/                # About page
│   ├── academicCalender/      # Academic calendar
│   ├── academicResult/        # Student results
│   ├── academicSyllabus/      # Syllabus
│   ├── api/                  # API routes
│   │   ├── auth/             # Authentication
│   │   ├── gallery/          # Gallery endpoints
│   │   ├── images/           # Image handling
│   │   ├── notice/           # Notice management
│   │   └── ...               # Other API endpoints
│   ├── dashboard/            # Admin dashboard
│   │   ├── eventsUpload/     # Event management
│   │   ├── gallery/          # Gallery management
│   │   └── ...               # Other admin sections
│   ├── fonts/                # Custom fonts
│   ├── login/                # Login page
│   └── ...                   # Other pages
├── assets/                   # Static assets
├── components/               # Reusable components
│   ├── FBMessanger/          # Facebook integration
│   ├── Footer/               # Footer component
│   ├── Navbar/               # Navigation
│   └── ...                   # Other components
├── models/                   # Database models
├── public/                   # Public assets
├── utils/                    # Utility functions
└── ...
