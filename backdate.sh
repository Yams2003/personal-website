#!/bin/bash

# Initial commit date
START_DATE="2022-03-01T10:00:00"

# Add all files
git add .

# Make the first commit with the old date
GIT_AUTHOR_DATE="$START_DATE" GIT_COMMITTER_DATE="$START_DATE" git commit -m "Initial commit"

# (Optional) Add more commits, one per file with incremental dates
i=1
for file in $(ls); do
  git add "$file"
  DATE=$(date -d "2022-03-01 +$i days" --iso-8601=seconds)
  GIT_AUTHOR_DATE="$DATE" GIT_COMMITTER_DATE="$DATE" git commit -m "Updated $file on $DATE"
  i=$((i + 1))
done
