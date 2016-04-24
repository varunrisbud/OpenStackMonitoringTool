#!/bin/bash

checkFinalDiskWriteRate="/usr/bin/java -cp /home/student/HealthMonitoring/HealthCheckers DiskWriteRateDaemon"
eval $checkFinalDiskWriteRate
