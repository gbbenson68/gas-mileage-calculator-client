#!/bin/bash


if [ $# -ne 9 ]
then
  echo
  echo "     Usage: ${0} <URL> <TOKEN> <USER_ID> <DATE> <ODO_READING> <ODO_UNITS> <PRICE> <PRICE_UNITS> <COMMENT>"
  echo
  exit 1
fi

URL=${1}
TOKEN=${2}
USER_ID=${3}
DATE=${4}
ODOREAD=${5}
ODOUNIT=${6}
PRICE=${7}
PRICEUNIT=${8}
COMMENT=${9}

#echo ${URL}
#echo ${TOKEN}
#echo ${USER_ID}
#echo ${DATE}
#echo ${ODOREAD}
#echo ${ODOUNIT}
#echo ${PRICE}
#echo ${PRICEUNIT}
#echo ${COMMENT}
#exit 1

curl "${URL}/readings" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "reading": {
      "user_id": "'"${USER_ID}"'",
      "transaction_date": "'"${DATE}"'",
      "odometer_reading": "'"${ODOREAD}"'",
      "odometer_units": "'"${ODOUNIT}"'",
      "price": "'"${PRICE}"'",
      "price_units": "'"${PRICEUNIT}"'",
      "comment": "'"${COMMENT}"'"
    }
  }'

echo
