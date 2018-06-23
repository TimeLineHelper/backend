# Title:  Track It
**Version**: 1.1.0 
***

## Table of Content
* Team-Members
* Overview
* Getting Started
* User Stories
* [Deployed Appliation](https://)
***

## Team Members
* [Ixius Procopios](https://github.com/ixnp)
* [Cody Green](https://github.com/codyjgreen) 
* [Alicia Lycan](https://github.com/alicialycan)
* [Darcy Knore](https://github.com/dknore)
***

## Overview
A full-stack web application that allows the user to sign in securely with Google, create a Timeline to track an event, and add important dates, tasks, and milestones to the event. 
***

## Getting Started
Begin by ensuring the following are in place:
* Download application repo and execute the following command in terminal:
  - npm install<br>
* Create .env file with which includes the following:<br>
      PORT=3000<br>
      MONDODB_URI='Database pointer here'<br>
      GOOGLE_CLIENT_ID='Google Client ID here'<br>
      GOOGLE_CLIENT_SECRET='Google Client Secret here<br>
      CLIENT_URL=http://localhost:3000<br>
      API_URL=http://localhost:3000<br>
  

Basic application functionality:<br>
### <u>CREATE</u>
<b>Create Timeline</b><br>
Type =  POST <br>
Route: ```/```<br>
Requires:

* Event Name
* Start Date
* End Date<br>
```
Ex:
{
  name: 'Run a Marathon',
  begin: Date(),
  end: Date(),
}
```
<b>Create Event Item</b><br>
Type =  POST <br>
Route: ```/```<br>
Requires:
* Item Name
* Description
* Date 
```
Ex:
{
  name: '',
  description: '', 
  date: Date(),
}
```
### <u>READ</u>
Type =  GET <br>
Route: ```/```<br>
Requires:
* ?
* ?

### <u>UPDATE</u>
Type =  PUT <br>
Route: ```/update```<br>
Requires:
* ?
* ?<br>
Ex:
```
{ 

}
```
### <u>DELETE</u>
Type =  DELETE <br>
Route: ```/remove```<br>
Requires:
* Token?
* Event Item ID?
***

## User Stories

### User

*  As a user, I want to Sign Up / Login in to my account securely
*  As a user, I want to be able to able to Add, Edit, or Delete an Event
*  As a user, I want to be able to able to Add, Edit, or Delete important dates, tasks, and milestones within an Event
*  As a user, I want to see a visual display of my Timeline Event
*  As a user, I want my Timeline Events to persist between each login

### Developer
 * As a developer, I want to create an application that is easy to read and uses REST'ful architecture
 * As a developer, I want to create an application that allows the user to Login securely
 * As a developer, I want to create an application that allows the user to perform meaningful CRUD operations to manage their Timeline Events
 * As a developer, I want to create an application that allows the user to save content to a database
***

## Deployed Application
https://timeline-helper.herokuapp.com

