#!/usr/bin/python3

import redis
import uuid
from typing import Union


class Cache:
    """Cache class for storing data in Redis."""

    def __init__(self):
        """Initialize Redis connection and flush the database."""
        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(self, data: Union[str, bytes, int, float]) -> str:
        """Store data in Redis using a random key.

        Args:
            data: The data to be stored, can be str, bytes, int, or float.

        Returns:
            A string representing the randomly generated key.
        """
        key = str(uuid.uuid4())
        self._redis.set(name=key, value=data)
        return key
