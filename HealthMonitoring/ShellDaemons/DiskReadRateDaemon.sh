#!/bin/bash
clearCache="sudo echo 3 > /proc/sys/vm/drop_caches"
checkDiskReadRate="dd if=/home/student/anotherTempFile of=/dev/null bs=1M count=1024 2> /var/log/TempDiskReadRate.log"
eval $clearCache
eval $checkDiskReadRate
