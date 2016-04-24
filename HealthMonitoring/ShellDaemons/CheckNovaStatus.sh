#!/bin/bash

checkNovaStatus="/usr/bin/java -cp /home/student/HealthMonitoring/ServiceCheckers GetNovaAPIStatus"
eval $checkNovaStatus
