#!/usr/bin/env python3
"""Function that lists all documents in a MongoDB collection"""

def list_all(mongo_collection):
    """
    Lists all documents in a collection.

    Args:
        mongo_collection: pymongo collection object

    Returns:
        A list of documents in the collection.
        Returns an empty list if no document is found.
    """
    return list(mongo_collection.find())
