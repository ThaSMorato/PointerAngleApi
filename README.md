# PointerAngleApi

A simple api that returns the minimal angle between the pointers of a clock
I used Postgress as db, if you want to use another db, change the config/database.js 
For more config changes, src/models/index.js is the file you need to change
For more information about the Orm, check the [sequelize docs](https://sequelize.org/master/)

# .env

Please, dont forget to create a .env file and add the variables that is in the .env.example

# Start

```
  yarn start
```

then the URL is [/v{n}/rest/clock/:hour/?:minute]()
