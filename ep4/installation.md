# installation guidelines:

npm init -y

# global install:

npm i -D typescript

# create tsconfig:

npx tsc --init

# to create declaration and map files:

npx tsc

# to run manually:

node dist/filename.js

# update script:

go to package.json and find the script block, then edit accordingly:
"scripts": {
    "start": "node dist/index.js",
    "dev": "npx tsc"
  },