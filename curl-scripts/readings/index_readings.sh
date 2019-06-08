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

#echo ${URL}
#echo ${TOKEN}
#exit 1

curl "${URL}/readings" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
