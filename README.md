# ITWEB-M2-Client

## Web.Api and SPA
### Usage:
Here are the links for the site:

The heroku page can be found here: https://itweb-m2-client.herokuapp.com/

The API is hosted at: https://itweb-m2-api.herokuapp.com/

The API repository can be found here: https://github.com/AN-ITWEB/ITWEB-M2-API
### Purpose:
To demonstrate fulfilment of the learning objectives:
- Explain the principles for using a MVC framework in a web server
- Design and implement a web site that include persistence of data in a database.
- Basic knowledge regarding hosting of web applications including cloud based hosting.
- Design and implement a REST based web-API
- Design and implement single-page applications with use of client-side MVC framework that communicate with a
Restful web-API
- Explain the theory behind and implement authorisation and authentication in a web app
### Technology requirements
The Web API must use Node as web server, Express as MVC framework and Mongo as database. It is
recommended to use Heroku as Cloud provider.
The single page Web-App should use Angular version 4 or higher as the client-side framework.
### Functional requirements
Develop a fitness Web App with user registration and login that uses Angular on the client side and a restful
Web API to access data on the server.
The user should be able to create workout programs similar to the one shown beneath. A workout program
is a collection of exercises (workout) that each have a name, description, number of sets and number of
repetitions or time.
#### Basic functionality:
- [x] New users can sign up with your web app (register)
- [x] Users can login and logout
- [x] Users don’t have to login to see all programs
- [x] User must login to create a new workout program
- [x] User must login to add new exercises to a workout program
- [x] User must login to log workout activity.
- [x] The user can create a new workout program
- [x] The user can add new exercises to a workout program
- [x] An exercise has a name a description, number of sets and number of repetitions or the time it
should last.
- [x] Workout programs is persisted in a database (MongoDb)
- [x] The user can log workout activity
- [x] The Web API must be accessible online (e.g. running on Heroku with the database on mLab).


Workout program example.

| Exercise        | Description           | Set  |Reps/time|
|-------------|:-------------:|-----:|-----:|
| Squat     | Stand with your feet spread shoulderwidth apart. Lower your body as far as you can by pushing your hips back and bending your knees. Pause, and then slowly push yourself back to the starting position. | 3 |    20    |
| Push ups      | Place your hands on the floor with legs straight out behind you resting on your toes. Bend your arms and slowly …      |   3 |    10     |
| Plank | Place your elbows on the floor shoulderwidth apart with legs stretched out behind you so only your elbows and toes are in contact with the ground. Use your abdominal muscles to keep …      |    1 |    30 sec       |





Delivery
Upload a ZIP file containing all your source code (or a path to your git repo), and in the comments, you can
type the url to your site running in the cloud (and a valid user name and password to test the app).
