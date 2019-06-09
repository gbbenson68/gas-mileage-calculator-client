#!/bin/bash

if [ $# -ne 3 ]
then
  echo
  echo "     Usage: ${0} <URL> <TOKEN> <ID>"
  echo
  exit 1
fi

URL=${1}
TOKEN=${2}
ID=${3}

#echo ${URL}
#echo ${TOKEN}
#echo ${ID}
#exit 1

curl "${URL}/readings/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
