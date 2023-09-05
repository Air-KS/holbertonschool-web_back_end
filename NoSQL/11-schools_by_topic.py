#!usr/bin/env python3
'''
Task 11 - Function that returns the list of school
'''


def schools_by_topic(mongo_collection, topic):
    '''Find by specific value'''
    return mongo_collection.find({"topics":  {"$in": [topic]}})
