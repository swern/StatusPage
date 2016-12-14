# StatusPage
JS status page

The status page allows a user to see events with their title, description, and urgency on a one page app, which also has the option to add new events into the list. 

Events are currently displayed by when they were added to the list.

##MongoDB
Create a DB in Mongodb and add in some sample data to the style of ({title: "title1", description: "description", status: "status"}).

This will allow you to ensure that the connection is properly working between the app and the database.

Ensure you update the url in the server.js file to reflect the name you have given to the database you are connecting to.

##App
Do an npm install in the Status Page folder and the client folder to ensure you have all the correct dependencies for your the app.

run the server.js file with node from the terminal.
It should come back with a message saying: 'Example app listening at http://:::3000'

Open up a new tab in the terminal and run webpack from the client folder with the command webpack -w.
This should continue to run in this window and dynamically update as changes are made to the code.

Finally, to use the app open your browser and type: 'http://localhost:3000/' into the url to access the app.

From here you will see the sample data you added in mongodb appear under an 'events' title.

You also have the option to add new events by giving a title, description, and choosing whether the event is critical or non-critical.

Any changes you make will be persisted in the database.


##Planned next steps

1. Host app on Heroku
2. Add 'delete'/'edit' buttons to remove and edit events.
3. Create an RSS Feed for the page.
4. Change the events colour dependent upon whether it is critical or non-critical.
5. Add a 'last updated' tag to each event element.
