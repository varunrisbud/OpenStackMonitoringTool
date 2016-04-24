#!/bin/bash

checkKeystoneStatus="/usr/bin/java -cp /home/student/HealthMonitoring/ServiceCheckers GetKeystoneAPIStatus"
eval $checkKeystoneStatus
