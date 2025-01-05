# Project Name
Azure Managed Identity



## Table of Contents
1. [About](#about)
2. [Getting Started](#getting-started)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Contact](#contact)


## About
This project intends to explain an overview of Azure Managed Identities, how to access Azure SQL database from Azure function app using Node.js program  

## Getting Started
### Prerequisites
### 1
- Azure Account with alid Subscription
  - Free Account Link: https://azure.microsoft.com/en-in/pricing/purchase-options/azure-account?icid=azurefreeaccount
- Microsoft Enta ID – User
  - Privileges for creating and managing Azure Function App, Azure SQL Database
### 1.1
- Visual Studio Code Installed on Local computer
  - https://code.visualstudio.com/download
  - Install Azure Functions extension in VS code
  - Install Azure Functions Core Tools in VS code
#### 1.2  
- Git Installed
#### 1.3
- Clone the repository to local
  - git clone

### Steps
### 1
- Azure SQL Database
  - Create Azure SQL Database from Azure portal
    - Database Name: <Your DB Server Name>   
    - Database Server Name: <Your DB Name>
 #### 2.1 
    - Create table & insert data
           CREATE TABLE Customers
          (
            CustomerId INT IDENTITY  PRIMARY KEY,
            FirstName NVARCHAR(100) NOT NULL,
            LastName NVARCHAR(100) NOT NULL,
            Email NVARCHAR(100) NOT NULL
          );
       - You can add more data using the below script just changing the values
          INSERT INTO [Customers]
          (
            [FirstName]
          , [LastName]
          , [Email]
          )
          VALUES
          (
           'YourFirstName'
           ,'YourLastName'
           ,'asuresqldb123dummy@gmail.com'
         );
### 2
- Azure Function APP
- Create Azure Function App from Azure portal
  - Function App Name: managedid-funcapp-demo
  - Follow the configuration setting as instructed in the demo
  - Add below environment variables
    - DB_SERVER_NAME:<Your DB Server Name> 
    - DB_NAME: <Your DB Name>
 #### 2.1
 - Clone the repository:
    - Use bash shell
      - git clone
      - 

## contact
Name: Arockiadoss Jesudoss
GitHub: @ynoelaanzi
Linkedin: www.linkedin.com/in/arockiadoss-4756a4145
YouTube: https://www.youtube.com/@IT-SkilL-MasteR

