#!/bin/bash

if [ $# -ne 11 ]
then
  echo
  echo "     Usage: ${0} <URL> <TOKEN> <ID> <DATE> <ODO_READING> <ODO_UNITS> <FUEL_AMT> <FUEL_UNITS> <PRICE> <PRICE_UNITS> <COMMENT>"
  echo
  exit 1
fi

URL=${1}
TOKEN=${2}
ID=${3}
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
#echo "DATE = ${DATE}"
#echo "ID = ${ID}"
#echo "ODOREAD = ${ODOREAD}"
#echo "ODOUNIT = ${ODOUNIT}"
#echo "FUELAMT = ${FUELAMT}"
#echo "FUELUN = ${FUELUN}"
#echo "PRICE = ${PRICE}"
#echo "PRICEUNIT = ${PRICEUNIT}"
#echo "COMMENT = ${COMMENT}"
#exit 1

curl "${URL}/readings/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "reading": {
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
