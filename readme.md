# Scranimals

---

# Project Summary

This is my final group project created during my time at Northcoders, we were challenged to create an online application using a minimum of two new tech stacks. We were set up in our groups and taught to work in an 'agile' working environment using best industry practices in order to complete the project.

My group decided to build a food diary/tamagotchi style mobile only application using react-native and expo go for the front end and Google firebase for the back-end server side of the project. This was after Vue.js and MongoDB were spiked and ruled out for being less applicable to the kind of product we wanted to create.

The key sections that I was personally responsible for was setting up the database and ensuring that all connections and functions were working correctly, spiking and teaching other team mates how to utilise react-native to it's maximum capabilities as well as expo go and helping to design and implement the water and step tracker as well as implementing expo notification in order to enable push notifications (currently only able to send manually).

React-native was chosen as we wanted to create an application that was accessible to both android and apple users.

# Copying the repo

---

Please follow the instructions below in order to clone your own copy of the repository:

- Click on the FORK button in the top right hand corner of the page, then select your username, this should create a copy of the repository in your online github storage.
- Next on your OWN online version of the repo, click on the CODE button highlighted in GREEN, copy the URL provided. (It should look something like this https://github.com/<your username here>/scranimals_test)
- You should now be able to to CLONE the repo using your CLI, type the following in order to do so: git clone https://github.com/<your username here>/nc_news_online.git -There will be a message like this if successful:

```http
Cloning into 'be-nc-games'...
remote: Enumerating objects: 642, done.
remote: Counting objects: 100% (123/123), done.
remote: Compressing objects: 100% (31/31), done.
remote: Total 642 (delta 99), reused 91 (delta 90), pack-reused 519
Receiving objects: 100% (642/642), 296.55 KiB | 4.01 MiB/s, done.
Resolving deltas: 100% (310/310), done.
```

- Ensure npm is initialised using the command npm init -y

- You will then need to run npm i in the root directory of the repo in the terminal in order to install all dependencies in order to run the app.

# Please note you will not have access to the application's database without the firebase.js file and API key that is available upon request.

In the project directory, you can run:

`npm start` or `expo start`
Runs the app in the development mode.
Use the link that appears in your CLI in order to access it online, you can also install expo go onto a mobile

The page will reload when you make changes.
You may also see any lint errors in the console.

NOTE: Minimum required versions of N"ode.js": "v17.1.0", "expo": ">=44.0.0-0 <45.0.0",
"firebase": "^9.6.5", "jest": "^27.4.7", "react-native": "0.64.3", "expo-notifications": "~0.14.0", "react-native-popover-view": "^4.1.0"
