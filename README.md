create .env file in global source
add code between hastags
########################################################################################
HOST=127.0.0.1
PORT=3737
NODE_ENV=development
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=jKTLSj6Sx91lm2HTpReZYuHmxOLRnx1o
DB_CONNECTION=sqlite
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=adonis
SESSION_DRIVER=cookie
HASH_DRIVER=bcrypt
API_GOA_HOST=https://pokeapi.co/api/v2
#######################################################################################

npm install --save
npm run dev/npm run start
