def schools_by_topic(mongo_collection, topic):
    """
    Returns a list of schools having a specific topic.

    Parameters:
        mongo_collection: pymongo.collection.Collection - The MongoDB collection to query.
        topic (string): The topic to search for.

    Returns:
        list: A list of documents (schools) containing the specified topic in the 'topics' field.
    """
    return mongo_collection.find({"topics": topic})
