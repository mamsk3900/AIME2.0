# AIME 2.0 Pipeline

## Overview
This document outlines the pipeline of files and components that are rendered in the AIME 2.0 React.js App

## Table of Contents
- [AIME 2.0 Pipeline](#aime-20-pipeline)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [1. App.js](#1-appjs)
  - [2. Home.js](#2-homejs)
  - [3. Nodepage.js](#3-nodepagejs)
  - [4. BOM.js](#4-bomjs)
  - [5. IPMI.js](#5-ipmijs)
- [$\\color{Bittersweet}{Components}$](#colorbittersweetcomponents)
    - [1. AppBar.js](#1-appbarjs)
  - [2. DataTable.js](#2-datatablejs)
  - [3. NodePageAppBar.js:](#3-nodepageappbarjs)
  - [4. AccordionExpanded.js:](#4-accordionexpandedjs)
  - [Conclusion](#conclusion)

## 1. App.js
- **Router**:
  - In here I'm creating the structure for navigation between pages, deliminated by an id, which is the A# of the node

## 2. Home.js
- **useEffect**:
  - This creates the rows and columns for the DataTable that is within the Home.js rendered element
- **renderCell**:
  - This creates links for the first element of each row, which is the A#. This allows for links to unique nodepages to be created.
- **Returned element**:
  - The AppBar component which will be covered later
  - The DataTable component that will also be covered later

## 3. Nodepage.js
- **clockUpdate()**:
  - This creates a datespan element which will be updated every second to contain the current date and time
- **addToPaperContents(timeOfLog)**:
  - Accesses the contents of a Paper mui component and updates it with the most recent lof and the date and time of the log
- **getNodeHash()**:
  - There is probably a more effecient way of doing this but it finds the A# of the current node by looking at the url and taking the id.
- **createData()**:
  - A function designed to return the data used for the AccordionExpanded components in the proper format
- **useEffect()**:
  - Store the A# in local storage to pull on different pages like BOM and IPMI
  - Create the rows and columns for the Datatable in the Accordions

## 4. BOM.js
- **useEffect()**:
  - create the rows (This is not currently working correctly)
- **The Goal**:
  - Create an instance of the class SingleNode which contains all other classes. These child classes are then used to populate the accordions of the BOM page. 
>[!WARNING] 
> #### This is currently not working properly because I do not have the information to instantiate the class

## 5. IPMI.js
- **useEffect()**:
  - Choose a hosting provider (e.g., Vercel, Netlify, AWS, etc.).
- **Deploy Application**:
  - Follow the specific deployment steps for your hosting provider.
>[!WARNING]
> #### this is currently not implemented as I do not have the information to populate the IMPI page

# $\color{Bittersweet}{Components}$
### 1. AppBar.js 
- **handleButtonClicks(element)**:
  - pretty obvious, opens the page in a new tab, unless it is the current tab in which case it doesn't.
- **Returned Element**:
  - An mui component that mimics the functionality of a Navbar, but retains all of the features of an mui component

## 2. DataTable.js
- **getBackgroundColor()**:
  - apply a specified color as the 'primary' color.
>[!TIP] 
> #### this will be really useful for the dark mode.
- **StyledDataGrid**:
  - Uses mui syntax to specify unique css attributes
- **Returned Element**:
  - An mui component which prints a highly interactive data table which offers lots of functionality through mui

## 3. NodePageAppBar.js:
- **useEffect()**:
  - changes the urls to be reflective of the unique id (The A#)
- **Returned Element**:
  - It is a slight variation on the regular AppBar. I had the intent to make the Appbar be modular to specify between pages but I figured this was used more so I'd just make two. This might change but I had a reason.

## 4. AccordionExpanded.js:
- **Return Element**:
  - It is an implementation of an mui component which is an accordion div that is opened by default.

## Conclusion
This pipeline provides a comprehensive overview of the flow between files and functions for the AIME 2.0 website. This is kind of my first time trying to make documentation like this so it is subject to change as I learn new and helpful skills for documenting and make changes to the files.
