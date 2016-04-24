#!/bin/bash

checkWriteRate="sync; dd if=/dev/zero of=/home/student/tempfile bs=1M count=1024 2> /var/log/TempDiskWriteRate.log; sync"
eval $checkWriteRate

