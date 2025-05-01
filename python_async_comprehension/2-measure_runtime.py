#!/usr/bin/env python3
"""
This module contains a coroutine that measures the total runtime of executing
four parallel asynchronous comprehensions.
"""

import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Execute 'async_comprehension' four times in parallel
    using asyncio.gather and measure
    the total runtime. Returns the elapsed runtime in seconds.
    """
    start_time = time.perf_counter()
    tasks = [async_comprehension() for _ in range(4)]
    await asyncio.gather(*tasks)
    end_time = time.perf_counter()
    return end_time - start_time

if __name__ == "__main__":
    async def main():
        runtime = await measure_runtime()
        print(f"Total runtime: {runtime}")

    asyncio.run(main())
