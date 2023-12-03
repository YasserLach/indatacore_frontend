
Frontend 

Introduction

Welcome to the documentation of my Frontend application. This document provides an overview of the app's structure, features, and how to get started.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) 
- [Angular CLI](https://angular.io/cli)


### Installation

Clone the repository and install dependencies:

 - git clone [repository-url]
 - cd [project-folder]
 - npm install


## Usage

Once the application is successfully installed, initiate it by running the command ng serve and navigate to http://localhost:4200 in your web browser.

Upon launching, the application opens on the SignIn page, prompting users to enter their email and password for authentication. Users without an account can click on "Sign Up" at the bottom of the page to access the Sign Up page and create their account. After creating an account and signing in, the user is directed to the home page.

The home page features a sidebar providing navigation to three main sections:

Dashboard: This section presents statistical data in chart form, offering insights into relevant metrics.

Data Page: Here, users find a table containing information. The page includes a search input for table filtering and incorporates pagination for efficient data browsing.

Upload Page: Users can upload files through a designated input, facilitating the addition of content to the application.

## Features

1. **Dashboard:**
  - Interactive dashboard presenting key statistics in chart form using [Chart.js](https://www.chartjs.org/).

2. **Data Management:**
  - Data page with a searchable and paginated table for efficient information retrieval, powered by [ngx-pagination](https://www.npmjs.com/package/ngx-pagination).

3. **Responsive Design:**
  - Ensured a responsive and mobile-friendly layout for optimal user experience across devices.

4. **Navigation Sidebar:**
  - User-friendly sidebar allowing seamless navigation between Dashboard, Data, and Upload pages.

5. **Styling with Tailwind CSS:**
  - Customized styling using [Tailwind CSS](https://tailwindcss.com/) for efficient and modern interface design.




