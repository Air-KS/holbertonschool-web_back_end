#!/usr/bin/python3
""" Module for BasicCache
"""
from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """ BasicCache class that inherits from BaseCaching
        and is a caching system without limit.
    """

    def put(self, key, item):
        """ Assign the item value for the key key in self.cache_data.
            If key or item is None, does nothing.
        """
        if key is not None and item is not None:
            self.cache_data[key] = item

    def get(self, key):
        """ Return the value linked to key in self.cache_data.
            If key is None or key doesn’t exist in self.cache_data.
        """
        if key is None or key not in self.cache_data:
            return None
        return self.cache_data.get(key)
