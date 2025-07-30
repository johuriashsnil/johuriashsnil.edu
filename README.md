├── .eslintrc.json
├── .gitignore
├── README.md
├── app
    ├── (home)
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── results
    │   │   └── page.tsx
    ├── about
    │   ├── layout.tsx
    │   └── page.tsx
    ├── academicCalender
    │   ├── layout.tsx
    │   └── page.tsx
    ├── academicResult
    │   ├── layout.tsx
    │   └── page.tsx
    ├── academicSyllabus
    │   ├── layout.tsx
    │   └── page.tsx
    ├── api
    │   ├── auth
    │   │   └── [...nextauth]
    │   │   │   └── route.ts
    │   ├── gallery
    │   │   ├── [id]
    │   │   │   └── route.js
    │   │   └── route.js
    │   ├── images
    │   │   └── route.js
    │   ├── notice
    │   │   ├── [id]
    │   │   │   └── route.js
    │   │   └── route.js
    │   ├── noticepdf
    │   │   ├── [id]
    │   │   │   └── route.js
    │   │   └── route.js
    │   ├── principleAndFounder
    │   │   ├── [id]
    │   │   │   └── route.js
    │   │   └── route.js
    │   ├── route.js
    │   ├── routine
    │   │   ├── [id]
    │   │   │   └── route.js
    │   │   └── route.js
    │   ├── uploadthing
    │   │   ├── core.js
    │   │   └── route.js
    │   └── user
    │   │   └── route.js
    ├── classRoutine
    │   ├── layout.tsx
    │   └── page.tsx
    ├── contact
    │   ├── layout.tsx
    │   └── page.tsx
    ├── dashboard
    │   ├── eventsUpload
    │   │   └── page.tsx
    │   ├── gallery
    │   │   └── page.tsx
    │   ├── layout.tsx
    │   ├── noticeUpload
    │   │   └── page.tsx
    │   ├── page.tsx
    │   ├── principle
    │   │   └── page.tsx
    │   └── routineUpload
    │   │   ├── UploadSection.tsx
    │   │   └── page.tsx
    ├── examRoutine
    │   ├── layout.tsx
    │   └── page.tsx
    ├── favicon.ico
    ├── fonts
    │   ├── GeistMonoVF.woff
    │   └── GeistVF.woff
    ├── founderMessage
    │   ├── layout.tsx
    │   └── page.tsx
    ├── gallery
    │   ├── layout.tsx
    │   └── page.tsx
    ├── globals.css
    ├── layout.tsx
    ├── login
    │   ├── layout.tsx
    │   └── page.tsx
    ├── next.config.js
    ├── not-found.tsx
    ├── notices
    │   ├── [id]
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    │   ├── layout.tsx
    │   └── page.tsx
    ├── principleMessage
    │   ├── layout.tsx
    │   └── page.tsx
    └── teacherRoutine
    │   ├── layout.tsx
    │   └── page.tsx
├── assets
    ├── Group.png
    ├── Loading.json
    ├── LoadingAnimation.json
    ├── LoginAnimation.json
    ├── bg-popup.png
    ├── bg.png
    └── footer_bg.jpg
├── components
    ├── FBMessanger
    │   └── FBMessanger.tsx
    ├── Footer
    │   ├── Footer.css
    │   └── Footer.tsx
    ├── Hooks
    │   ├── useDarkTheme.ts
    │   ├── useModal.tsx
    │   └── useUpdateData.tsx
    ├── InputField
    │   └── InputField.tsx
    ├── Loader
    │   ├── Loading.tsx
    │   └── useLoader.tsx
    ├── Loading
    │   ├── Loading.tsx
    │   ├── Spinner.tsx
    │   └── footer_bg.jpg
    ├── LoginForm
    │   └── LoginForm.tsx
    ├── Logout
    │   └── Logout.tsx
    ├── Navbar
    │   ├── DashNav
    │   │   └── DashNav.tsx
    │   ├── DashNavButton
    │   │   ├── DashNavButton.tsx
    │   │   ├── __tests_
    │   │   │   └── DashNavButton.tet.jsx
    │   │   └── __tests__
    │   │   │   └── DashNavButton.test.jsx
    │   ├── MenuBar.tsx
    │   ├── Nav.css
    │   ├── Navbar.tsx
    │   ├── Sidebar.js
    │   └── menu.css
    ├── Pages
    │   ├── Banner.tsx
    │   ├── Calender.tsx
    │   ├── Carousel.tsx
    │   ├── DashboardGraph.tsx
    │   ├── GalleryPhoto.tsx
    │   ├── GalleyImageUpload.tsx
    │   ├── MapSection.tsx
    │   ├── Marquee.tsx
    │   ├── NoticeScroll.tsx
    │   ├── UploadModal.tsx
    │   └── UploadRunningNotice.tsx
    ├── Styles
    │   └── Calender.css
    └── TransitionEffects.tsx
├── middleware.js
├── models
    ├── BannerImages.js
    ├── Event.js
    ├── GalleryPhoto.js
    ├── NoticePdf.js
    ├── PrincipleAndFounder.js
    ├── RoutinePDF.js
    ├── RunningNotice.js
    ├── Task.js
    └── User.js
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
    ├── 404.json
    ├── Logo.png
    ├── Meet.json
    ├── Week.png
    ├── event.json
    ├── events.json
    ├── meetLink.json
    ├── next.svg
    └── vercel.svg
├── tailwind.config.ts
├── tsconfig.json
└── utils
    ├── QueryClientProvider.tsx
    ├── SessionProvider.tsx
    ├── constant.ts
    ├── db.ts
    └── uploadthing.ts
