#!/usr/bin/env python3
"""
This module defines an asynchronous generator function that yields 10
random floating-point numbers between 0 and 10, with a 1-second delay
between each. It demonstrates the use of `async def` and `yield` for
asynchronous programming.
"""

import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """Asynchronously generates 10 random numbers between 0 and 10."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
