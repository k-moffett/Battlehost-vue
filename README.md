# Battlehost
Battlehost is a game manager created to assist tabletop gamers track some of the more tedious aspects of their games.Create a battle room for your game and invite your opponent. Each of you can add rules to keep track of points, and even create profiles for units in game to keep track of their abilities. Any changes made will be visible to you and your opponent in realtime.

# Technologies Used
This is a Vue JS application built using express, sequalize, postgres, and webpack. Currently hot module reloading is enable in the dev environment and pm2 is used as well to allow the server the same functionality so you don't need to build your bundle and swap out the files you are serving each time in order to view a change while the client and server are runnint simultaneously.