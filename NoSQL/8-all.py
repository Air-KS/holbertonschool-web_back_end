#!/usr/bin/env python3
'''
Task 8 - Return an empty list if no document in the collection
        mongo_collection will be the pymongo collection object
'''


def list_all(mongo_collection):
    '''Function to list all documents in a collection'''
    if not mongo_collection:
        return []
    documents = mongo_collection.find()
    return [post for post in documents]
