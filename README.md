# Why Hosting The Back-end/Front-end seprately

## Making Changes To One Of Them.

    let's say our code base grows bigger and you want to change only one headline on
    the frontend, we are going to have to deploy them both together even though the backend
    didn't change.

## One of your frontends server crashes.

    say our application grows bigger (more clients) and we don't want to start over from scratch
    but to extend our code, so we create multiple frontends that represent different other services that are hosted on different servers and are connected to the same backend

    if the first frontend crashes, the second frontend will be intact and can interact with the backend.
    so users using the second service can still use it.

# File/Foldes Generated/Created

## Generated

    - all files/folders biggining with a dot are not to be changed.
    - The node_modules folder cannot be edited directly.

### backend files/folders

#### firebase files

**database.rules.json!** : system generated : the rules of read and write can be safely changed (if you know what you are doing)

**firebase.json!** : system generated : is not to be edited directly, it is modified when you require and intall a new service
like firebase storage for example

#### github files/folders

**nodes-modules folder** : system generated : not to be touched (unless you know what youre doing and you still have package.json to generate the folder again).

**package-lock.json** : system generated : not to be edited (unless you want to regenrate it using package.json)

**package.json!** : system generated : not to be edited at all.

### frontend files/folders

**The same applies to the frontend!**

## Generated files/folders

**All the other files/folders are created!**

## What you need to modify to test it localy

**Nothing!**

## Commands and the way to test locally.

### start the backend

    - open project in vscode
    - from the top panel choose Termina => New Terminal
    - write the command : cd backend
    - write the command : npm install -g firebase-tools (to install globally only once)
    - write the command : npm install (only the first time)  (you have to have nodejs installed)
    - write the command : firebase login (a window will open and login)
    - write the command : firebase init
    - choose the services : functions and database (using the space bar, up and down keys, and enter)
    - write the command : npm run localfirebase

### start the frontend

    - open a new terminal in vscode (you have two terminals now)
    - write the command : cd frontend
    - write the command : npm install (only the first time) (you have to have nodejs installed)
    - write the command : firebase login (a window will open and login)
    - write the command : firebase init
    - choose the services : hosting (using the space bar, up and down keys, and enter)
    - write the command : npm run start (this will open the interface in your browser)

## Commands and the way to deploy.

### deploy the backend

    - open project in vscode
    - from the top panel choose Terminal => New Terminal
    - write the command : cd backend
    - write the command : npm install (only the first time)  (you have to have nodejs installed)
    - write the command : firebase login (a window will open and login)
    - write the command : firebase init
    - choose the services : functions and database (using the space bar, up and down keys, and enter)
    - after installing write the command : npm run firebase

### deploy the frontend

    - open a new terminal in vscode (you have two terminals now)
    - write the command : cd frontend
    - write the command : npm install (only the first time) (you have to have nodejs installed)
    - write the command : firebase login (a window will open and login)
    - write the command : firebase init
    - choose the services : hosting (using the space bar, up and down keys, and enter)
    - write the command : firebase deploy

## To Delete

docRef.once('child_removed')

## APIs AND KEYS

**zipcodeapi**

    - Application Key : 79tbtMeAyJ2qGptnrRsstMOpHNNaIZxWJ6KvDsZcJBScIpryBllMiVDIo5Dac2F3
    - Client Key : js-XJLW32eQQYjxFEKAWSbZaOMrX0TNI3XRtA3N9AF5GUGBvbnt1OZtWCICR3ZrdbB4
