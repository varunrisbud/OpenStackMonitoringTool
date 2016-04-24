#!/bin/bash

checkNeutronStatus="/usr/bin/java -cp /home/student/HealthMonitoring/ServiceCheckers GetNeutronAPIStatus"
eval $checkNeutronStatus
