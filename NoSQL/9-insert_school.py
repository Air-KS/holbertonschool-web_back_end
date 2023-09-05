#!/usr/bin/env python3
'''
Task 9 - Returns the new _id
'''


def insert_school(mongo_collection, **kwargs):
    '''Insert a documents into a collection'''
    data = mongo_collection.insert_one(kwargs)
    return data.inserted_id
