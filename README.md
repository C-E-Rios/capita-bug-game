# Notes
I've run out of time so the following are still outstanding:
  - Finish styling comparison section
  - Fix flicker of content on load. Ng-cloak not working on chrome?
  - Adjust webpack settings to reduce size of bundle and reduce load time (4mb? Sourcemaps!!)
  - Write tests

# Welcome to your task

We are going to set you some tasks that will really help us when it comes to assessing if you're fit for the role available. This is a totally fictional project made just for this purpose - nothing you do will be used for anything other than as a talking point and assessment of your abilities. It focuses on HTML, JavaScript and CSS. If you want to add AngularJS to anything, you are welcome to and this is fine, but our key aim is to understand your underlying skills. Use any task runners, css pre-processors and npm, bower packages as you see fit.

# The tasks

We've started a single web page for the `doodle:bug` game that is being built. If you have a look in the issues page you will see 4 open issues. We would like you to spend about 2-3 hours trying to resolve these issues as best you can. If you have gone over three hours, feel free continue or to list the actions that you would take to complete the task rather than spend longer. Please also note that we would like you to improve the quality and consistency of code as you go along. We will have a look at the changes to see all the changes you've made. If you get stuck we suggest you move on. We welcome any accompanying notes with what you send back. We know this is an artificial situation and you might want to explain something.

# Steps to get the project set up

The project is using [git](http://git-scm.com/) for version control. You will need to have [git installed locally on your machine](http://git-scm.com/downloads). Once this is set up, Bitbucket acts as your repository. You can run the following to set up a local folder, open that folder, initiate git on that folder and then clone the project. Make sure you use the correct path in the git remote add origin command, rather than just copy and paste - you can find it in the 'clone' option in the side menu too.

``` sh
$ git clone https://{your username}@bitbucket.org/ceb-front-end-admin/carlos-rios-interview-task.git
$ cd carlos-rios-interview-task
$ npm install
$ npm start # this will run http-server with application and show you the local URL to access the app from
```

``` sh
# Once you have made a change you can commit it and push it back to the repo using the following:

$ git add .
$ git commit -m "Explanation of your changes"
$ git pull --rebase origin master
$ git push -u origin master
```

**Please note:** You only need to use the `-u` the first time.

# Running tests

This project includes a `/spec/` folder and associated `test.html` file to assist with any unit testing (via the Jasmine framework) that you may wish to do as part of this exercise.

# Usefull tasks

``` sh
$ npm run jscs # will run code style check against `js` directory
```

# Other info

We only require support of the latest version of Chrome. Please commit regularly with clear and concise messages about what you've done. Once you have finished please let your consultant know and they will inform us. At that point we will remove your rights, assess the code and hopefully then see you face to face to discuss what you did and get you working with the team to do some more coding together.

Thank you for your time and good luck!
