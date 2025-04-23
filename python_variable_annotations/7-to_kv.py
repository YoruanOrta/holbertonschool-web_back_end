#!/usr/bin/env python3
"""
This module contains a function to_kv that takes a string k and a value v
(either int or float) and returns a tuple. The tuple contains the string k
and the square of v as a float.
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Takes a string k and a value v (either int or float) and returns a tuple.
    """
    return (k, float(v ** 2))
