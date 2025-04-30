#!/usr/bin/env python3
""" Coroutine that collects random numbers from async_generator """
from typing import List


async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Collect 10 random numbers asynchronously and return them."""
    return [i async for i in async_generator()]
