#!/usr/bin/env python3
'''
0. The basic of async
'''
import random
import asyncio


async def wait_random(max_delai: int = 10) -> float:
    '''
    Waits for a random delay between 0 and max_delay, then returns that delay.
    '''
    randomFloat = random.uniform(0, max_delai)
    await asyncio.sleep(randomFloat)
    return randomFloat
