user inputs their note into form input
user hits save button
Save button runs javascript code from an event handler on submit event
Page is prevented from being refreshed
New note gets created within the JS code and pushed to note array
Notes are then updated
New note is then sent to the server via POST call
POST call returns 201 status