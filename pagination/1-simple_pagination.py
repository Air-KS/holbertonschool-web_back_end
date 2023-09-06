#!/usr/bin/env python3
'''
Task 1 - Pagination
'''

import csv
import math
from typing import List
from typing import Tuple


class Server:
    '''
    Server class to paginate a database of popular baby names.
    '''
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        ''' '''
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def index_range(page: int, page_size: int) -> Tuple[int, int]:
        '''
        Return a tuple of size two containing a start index and an end index
        '''
        # Calculate Start and End index
        startIndex = (page - 1) * page_size
        endIndex = startIndex + page_size
        return (startIndex, endIndex)

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        ''' get page

        Args:
            page (int, optional): number of page. Defaults to 1.
            page_size (int, optional): number of row in page. Defaults to 10.

        Returns:
            List[List]: List of dataset rows by range
        '''
        assert type(page) is int and type(page_size) is int
        assert page > 0 and page_size > 0
        dataset = self.dataset()
        start, end = self.index_range(page, page_size)
        if end > len(dataset):
            return []
        return [list(dataset[row]) for row in range(start, end)]
