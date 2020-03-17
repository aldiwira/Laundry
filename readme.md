# :necktie: De Laundry

Web Service

https://delaundry-proyek.herokuapp.com/

## Setup

- Copy File `config.json.example` to `config.json`
- Edit Like :

```json
{
  "development": {
    "username": ":your-username:",
    "password": ":your-password:",
    "database": ":your-db-name:",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- Creating Database with command :

```shell script
$ node_modules/.bin/sequelize db:create
```

- Migrating Database with command :

```shell script
$ node_modules/.bin/sequelize db:migrate
```

- Seeding Database with command :

```shell script
$ node_modules/.bin/sequelize db:seed:all
```

- Rollback Setup

```shell script
$ node_modules/.bin/sequelize db:drop
$ node_modules/.bin/sequelize db:migrate:undo:all
$ node_modules/.bin/sequelize db:seed:undo:all
```

## Contributors

- :boy: [@aldiwira](https://github.com/aldiwira)
- :boy: [@febrian]()
- :boy: [@hattamaulana](https://github.com/hattamaulana)
