#!/usr/bin/env python3
"""
This module contains a function that calculates the sum of a mixed list
of integers and floats.
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Returns the sum of a mixed list of integers and floats."""
    return sum(mxd_lst)
