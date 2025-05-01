#!/usr/bin/env python3
""" 9-insert_school """


def insert_school(mongo_collection, **kwargs):
    """Inserts a new document in a collection based on kwargs"""
    new_document = kwargs
    result = mongo_collection.insert_one(new_document)
    return result.inserted_id
