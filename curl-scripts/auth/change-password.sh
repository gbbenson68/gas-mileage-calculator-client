#!/bin/bash

if [ $# -ne 2 ]
then
  echo
  echo "     Usage: ${0} <URL> <TOKEN>"
  echo
  exit 1
fi

URL=${1}
TOKEN=${2}

echo -n "Enter old password: "
stty -echo
read OLDPASS
stty echo
echo

echo -n "Enter new password: "
stty -echo
read NEWPASS
stty echo
echo
#echo ${TOKEN}
#echo ${OLDPASS}
#echo ${NEWPASS}

curl "${URL}/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPASS}"'",
      "new": "'"${NEWPASS}"'"
    }
  }'

echo
