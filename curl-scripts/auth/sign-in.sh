#!/bin/bash

if [ $# -ne 2 ]
then
  echo
  echo "     Usage: ${0} <URL> <EMAIL>"
  echo
  exit 1
fi

URL=${1}
EMAIL=${2}
echo -n "Enter password: "
stty -echo
read PASSWORD
stty echo
echo

#echo ${URL}
#echo ${EMAIL}
#echo ${PASSWORD}

curl "${URL}/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
