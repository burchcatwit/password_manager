# Password Manager Application

## Introduction

The objective of this project is to create a password management system and web application, similar to that of LastPass or Bitwarden. Users will be able to generate secure passwords, store passwords and account information in a database that is viewable via a web app, and stored information can then be automatically filled into website forms across the internet.

## Features

The following features are currently available in the web application:

1. Account Creation/Login
2. Manage Account/Passwords 
3. Secure Password Generation
4. Import/Export Passwords

## System Architecture

This password manager made use of the MERN stack architecture and the major features of each application component can be observed in the following diagram:

![Architecture-Page-2 drawio](https://user-images.githubusercontent.com/43997359/164765455-5c05a2ed-04d6-4d0a-895a-f97fd906c36e.png)

## Getting Started

### Installation and Setup

1. First make sure that [https://nodejs.org/en/](node.js) is installed

2. Clone this repository and install its dependencies
                        
        > git clone https://github.com/burchcATWIT/password_manager.git
        > cd password-manager
        > npm install
                
3. **Note**: Some devices may be incompatible with the fservents package dependencies contained in the package files of the password manager application.     As these are not critical packages for site functionality, they can be uninstalled if errors arise during initial installation or during runtime         through the following command:

        > npm uninstall fservents
        
    Mac users have also reported an error separate from the fservents packages related to the script startup. If using Mac and experiencing a **ERR_OSSL_EVP_UNSUPPORTED** error, run the following command:
    
        > export NODE_OPTIONS=--openssl-legacy-provider
        > npm start

### Running the Site

1. In the root directory (and backend if necessary), run:

        > npm install
 
   If experiencing compilation issues, also run:
   
        > cd backend
        > npm install

#### Running the backend

2. Navigate to the backend directory and run:

        > node index.js

#### Running the frontend

3. Open a new terminal window and navigate back to the root directory of the manager:

        > cd password-manager

4. From the root directory, navigate to the source directory of the application and start the site

        > cd src
        > npm start

5. Navigate to [http://localhost:3000](http://localhost:3000) and the site should be running

6. Please reach out to a member of our team (contact information in contributors section) via email if experiencing additional errors that are preventing the site from running.

## Other Files

### Add a single peice of data

1. Run script from root directory to add sample password manager data: 

        > node addonedata.js

2. Respond to the prompts as asked

3. View new password entry in password list 

### Add new random data

1. Run script from root directory to add multiple entries of new password manager data:

        > node randomdatapop.js

2. View new password entries in password list

3. **Note**: The scripts in this section are for site beta purposes and will be removed in a production environment (i.e.: when the site is publicly accessible)

## Demo Video

https://www.youtube.com/watch?v=SqcZT2kLEuM

## Contributors

* Andrew Hogan (hogana3@wit.edu), full-stack developer for password generation and database creation contributor
* Alex Grant (granta5@wit.edu), full-stack developer for password list viewing and functionality
* Lo-Badal Burch (burchc@wit.edu), front-end developer for dashboard pages and database creation contributor
* Emmanuel "Manny" Chalumeau (chalumeaue@wit.edu), front-end developer for home/login/create account pages and architecture designer
