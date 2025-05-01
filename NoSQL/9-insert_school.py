def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document in the collection based on kwargs.

    Parameters:
        mongo_collection: pymongo.collection.Collection - The MongoDB collection where the document will be inserted.
        **kwargs: Arbitrary keyword arguments representing the fields and values of the new document.

    Returns:
        The _id of the newly inserted document.
    """
    result = mongo_collection.insert_one(kwargs)  # Insert the document
    return result.inserted_id  # Return the inserted document's _id
