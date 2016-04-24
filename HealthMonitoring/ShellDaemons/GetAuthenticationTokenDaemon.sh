#!/bin/bash

response=$(curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: 9539ae22-5e68-43c6-4763-5dbcc01a6812" -d '{"auth": {"tenantName": "admin","passwordCredentials": {"username": "admin","password": "keystoneuseradmin"}}}' "http://130.65.159.58:5000/v2.0/tokens" | /home/student/jq .access.token.id)
echo "Authentication Token : $response"
