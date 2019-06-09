#!/bin/bash

if [ $# -ne 11 ]
then
  echo
  echo "     Usage: ${0} <URL> <TOKEN> <USER_ID> <DATE> <ODO_READING> <ODO_UNITS> <FUEL_AMT> <FUEL_UNITS> <PRICE> <PRICE_UNITS> <COMMENT>"
  echo
  exit 1
fi

URL=${1}
TOKEN=${2}
USER_ID=${3}
DATE=${4}
ODOREAD=${5}
ODOUNIT=${6}
FUELAMT=${7}
FUELUN=${8}
PRICE=${9}
PRICEUNIT=${10}
COMMENT=${11}

#echo "URL = ${URL}"
#echo "TOKEN = ${TOKEN}"
#echo "USER_ID = ${USER_ID}"
#echo "DATE = ${DATE}"
#echo "ODOREAD = ${ODOREAD}"
#echo "ODOUNIT = ${ODOUNIT}"
#echo "FUELAMT = ${FUELAMT}"
#echo "FUELUN = ${FUELUN}"
#echo "PRICE = ${PRICE}"
#echo "PRICEUNIT = ${PRICEUNIT}"
#echo "COMMENT = ${COMMENT}"
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
      "fuel_amount": "'"${FUELAMT}"'",
      "fuel_units": "'"${FUELUN}"'",
      "price": "'"${PRICE}"'",
      "price_units": "'"${PRICEUNIT}"'",
      "comment": "'"${COMMENT}"'"
    }
  }'

echo
