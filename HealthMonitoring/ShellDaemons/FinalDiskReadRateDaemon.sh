#!/bin/bash

checkFinalDiskReadRate="/usr/bin/java -cp /home/student/HealthMonitoring/HealthCheckers DiskReadRateDaemon"
eval $checkFinalDiskReadRate
