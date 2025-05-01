def update_topics(mongo_collection, name, topics):
    """
    Updates the topics of a school document based on the name.

    Parameters:
        mongo_collection: pymongo.collection.Collection - The MongoDB collection where the document will be updated.
        name (string): The name of the school to update.
        topics (list of strings): A list of topics to be updated in the school document.

    """
    mongo_collection.update_one(
        {"name": name},  # Filter by school name
        {"$set": {"topics": topics}}  # Set the new list of topics
    )
