#!/usr/bin/env python3
'''
Task 10 - Change school topics
'''


def update_topics(mongo_collection, name, topics):
    '''Update document'''
    return mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
        )
