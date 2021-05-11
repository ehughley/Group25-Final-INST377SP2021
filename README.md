README
# Project Title
War Facts

## Description
There are a number of sources on the internet where users can find information on war related facts. However, there is a lack of organized data regarding war statistics across the globe. War Facts tackles this information gap by creating a timeline of global war statistics from years 1823–2003. 
The timeline is organized in chronological order where users can search for a specific country and receive filtered results. For example, searching for “Spain” will display a timeline of all the wars Spain has participated in 1823–2003 organized in chronological order.
This can allow students, teachers, historians, or other individuals interested in the history of global conflicts to gather information in an efficient manner.

## Heroku Link
https://stark-citadel-50604.herokuapp.com

## Target Browsers and Description
Safari: MacOS (11.2.3), iOS (14.5.1), and iPadOS 14.5.1
Chrome: Windows OS (10.0.19042.964), AndroidOS (11), Linux OS (5.12.1), MacOS (11.2.3), iOS (14.5.1), and iPadOS 14.5.1
Firefox: Windows OS (10.0.19042.964), AndroidOS (11), Linux OS (5.12.1), MacOS (11.2.3), iOS (14.5.1), and iPadOS 14.5.1


# DEVELOPER MANUAL

## How to install your application and all dependencies?
Use Github Desktop or Terminal to clone this repository
Use VSCode or Terminal to open the repository 
Run the code “npm install” in the terminal window 
You should now be able to use the application

## How to run your application on a server?
Use VSCode or terminal to open the repository
Run the code “npm start” in the terminal window and make sure there is no errors
Go to the url “http://localhost:3000/” on your web browser

## How to run any tests you have written for your software?
Analyze the output of each search result and identify areas of concern. Use the webpage inspection tool to isolate the specific areas that contain a bug. One bug that we encountered was the inability for the page to reset the search results. We identified the softwares behavior by searching two values and analyzing the behavior. We resolved this issue by addressing the code and updating the JavaScript to operate how we wanted it to.

## The API for your server application - all GET, POST, PUT, etc endpoints, and what they each do.
The main endpoint this webpage utilizes is a GET request. The data within this request was pulled from a custom Sequelize query which provided the necessary information for the application. 
## A clear set of expectations around known bugs and a road-map for future development.
Currently, there are no known bugs in the application. One development that could potentially be added in the future is navigation to a wikipedia page or another external document so the user can get more in depth knowledge on the wars they have searched. The application could also utilize different filters such as date/time, location, battle deaths, etc. These filters would expand the usefulness and capabilities of the application. 
