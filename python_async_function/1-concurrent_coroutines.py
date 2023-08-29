#!/usr/bin/env python3
"""
1. Let's execute multiple coroutines at the same time with async
"""
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> list:
    '''
        Runs n coroutines waiting up to max_delay
        and returns the list of delays
    '''
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return delays
