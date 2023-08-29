#!/usr/bin/env python3
'''
2. Measure Runtime
'''
import time
import asyncio

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    '''
        Measures the total runtime to execute async_comprehension
        four times in parallel.
    '''
    startTime = time.time()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    endTime = time.time()
    return endTime - startTime
