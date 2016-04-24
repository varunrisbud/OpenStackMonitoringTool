#!/bin/bash

checkGlanceStatus="/usr/bin/java -cp /home/student/HealthMonitoring/ServiceCheckers GetGlanceAPIStatus"
eval $checkGlanceStatus
