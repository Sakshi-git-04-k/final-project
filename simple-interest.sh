#!/bin/bash

# Simple Interest Calculator Script
# Formula: SI = (P * R * T) / 100
# Where:
#   P = Principal amount
#   R = Rate of interest per annum
#   T = Time period in years
#   SI = Simple Interest

echo "================================"
echo "   Simple Interest Calculator   "
echo "================================"

# Get principal amount
echo -n "Enter the Principal amount (P): "
read principal

# Validate principal input
if ! [[ "$principal" =~ ^[0-9]+\.?[0-9]*$ ]]; then
    echo "Error: Principal must be a valid number"
    exit 1
fi

# Get rate of interest
echo -n "Enter the Rate of interest per annum (R) in %: "
read rate

# Validate rate input
if ! [[ "$rate" =~ ^[0-9]+\.?[0-9]*$ ]]; then
    echo "Error: Rate must be a valid number"
    exit 1
fi

# Get time period
echo -n "Enter the Time period (T) in years: "
read time

# Validate time input
if ! [[ "$time" =~ ^[0-9]+\.?[0-9]*$ ]]; then
    echo "Error: Time must be a valid number"
    exit 1
fi

# Calculate simple interest
si=$(echo "scale=2; ($principal * $rate * $time) / 100" | bc)

# Calculate amount (Principal + Interest)
amount=$(echo "scale=2; $principal + $si" | bc)

# Display results
echo ""
echo "================================"
echo "           Results             "
echo "================================"
echo "Principal Amount (P): $principal"
echo "Rate of Interest (R): $rate%"
echo "Time Period (T): $time years"
echo "Simple Interest (SI): $si"
echo "Total Amount: $amount"
echo "================================"
