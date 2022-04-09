// This user will be created in the db specified by environment
// variable MONGO_INITDB_DATABASE
db.createUser({
  user: 'echizen',
  pwd: 'password',
  roles: [
    {
      role: 'readWrite',
      db: 'nginx-node-mongo-docker-example',
    },
  ],
})
