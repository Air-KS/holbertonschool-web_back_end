#!/usr/bin/env python3
'''
    asynchronous coroutine that takes in an integer argument
    (max_delay, with a default value of 10) named wait_random that
    waits for a random delay between 0 and max_delay
    (included and float value) seconds and eventually returns it.
'''

import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    '''
    Waits for a random delay between 0 and max_delay, then returns that delay.
    '''
    randomDelay = random.uniform(0, max_delay)
    await asyncio.sleep(randomDelay)
    return randomDelay
