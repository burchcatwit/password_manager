# Password Manager Application

## Introduction

The objective of this project is to create a password management system and web application, similar to that of LastPass or Bitwarden. Users will be able to generate secure passwords, store passwords and account information in a database that is viewable via a web app, and stored information can then be automatically filled into website forms across the internet.

## Features

The following features are currently available in the web application:

1. Account Creation/Login
2. Manage Account/Passwords 
3. Secure Password Generation
4. Import/Export Passwords

## Getting Started

### Installation and Setup

1. First make sure that [https://nodejs.org/en/](node.js) is installed

2. Clone this repository and install its dependencies

    ~~~
    > git clone https://github.com/burchcATWIT/password_manager.git
    > cd password-manager
    > npm install
    ~~~

3. **Note**: Some devices may be incompatible with the fservents package dependencies contained in the package files of the password manager application.     As these are not critical packages for site functionality, they can be uninstalled if errors arise during initial installation or during runtime         through the following command:

     > npm uninstall fservents

### Running the Site


- Run "npm install" in the root directory
  - And in the backend directory

- Add the link to the database in index.js

#### Running the backend

- Make sure that your current directory is "backend"

- Run "node index.js"

#### Running the frontend

- Make sure that your current directory is root

- Run "npm start"

- Go to [http://localhost:3000](http://localhost:3000) and the site should be viewable.

# Other Files

## Add a single peice of data

- Run "node addonedata.js"

- Fill out the data as asked

## Add new random data

- Run "node randomdatapop.js"
