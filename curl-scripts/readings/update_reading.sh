#!/bin/bash

if [ $# -ne 6 ]
then
  echo
  echo "     Usage: ${0} <URL> <TOKEN> <ID> <PRICE> <PRICE_UNITS> <COMMENT>"
  echo
  exit 1
fi

URL=${1}
TOKEN=${2}
ID=${3}
PRICE=${4}
PRICEUNIT=${5}
COMMENT=${6}

#echo ${URL}
#echo ${TOKEN}
#echo ${ID}
#echo ${PRICE}
#echo ${PRICEUNIT}
#echo ${COMMENT}
#exit 1

curl "${URL}/readings/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "reading": {
      "price": "'"${PRICE}"'",
      "price_units": "'"${PRICEUNIT}"'",
      "comment": "'"${COMMENT}"'"
    }
  }'

echo
