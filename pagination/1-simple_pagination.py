#!/usr/bin/env python3
'''
Task 1 - Pagination
'''

import csv
from typing import List, Tuple


class Server:
    '''
    Server class to paginate a database of popular baby names.
    '''
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
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
        '''get page

        Args:
            page (int, optional): number of page. Defaults to 1
            page_size (int, optional): number of row in page. Defaults to 10

        Returns:
            List[List]: List of dataset rows by range
        '''
        assert isinstance(page, int) and\
            page > 0, "Page must be an integer greater than 0"
        assert isinstance(page_size, int) \
            and page_size > 0, "Page size must be an integer greater than 0"

        dataset = self.dataset()
        startIndex, endIndex = self.index_range(page, page_size)

        if startIndex >= len(dataset) or startIndex < 0:
            return []
        return dataset[startIndex:endIndex]
