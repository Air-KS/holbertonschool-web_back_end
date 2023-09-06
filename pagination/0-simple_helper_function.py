#!/usr/bin/env python3
'''
Task 0 - Return a tuple of size two containing a start index and an end index
'''

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    '''

    '''
    # Calculate Start and End index
    startIndex = (page - 1) * page_size
    endIndex = startIndex + page_size
    return (startIndex, endIndex)
