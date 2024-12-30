#!/bin/bash

# Find and replace color imports in all JS/JSX files
find /Users/edensitkovetsky/edennnnn/nh-energy/src -type f \( -name "*.js" -o -name "*.jsx" \) -print0 | xargs -0 sed -i '' 's/import { colors } from '"'"'..\/styles\/colors'"'"';/import { lightTheme } from '"'"'..\/styles\/theme'"'"';/g'

find /Users/edensitkovetsky/edennnnn/nh-energy/src -type f \( -name "*.js" -o -name "*.jsx" \) -print0 | xargs -0 sed -i '' 's/import colorData from '"'"'..\/styles\/colors'"'"';/import { lightTheme } from '"'"'..\/styles\/theme'"'"';/g'

# Replace color references
find /Users/edensitkovetsky/edennnnn/nh-energy/src -type f \( -name "*.js" -o -name "*.jsx" \) -print0 | xargs -0 sed -i '' 's/colors\./lightTheme\./g'
