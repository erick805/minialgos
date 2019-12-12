/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached it's capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Example:

LRUCache cache = new LRUCache(2 // capacity);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/

// hashtable approach

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this._cache = new Map();
  }

  get(key) {
    if (!this._cache.has(key)) return -1;

    const v = this._cache.get(key);
    // delete and set removes key and puts the key as most recently used
    this._cache.delete(key);
    this._cache.set(key, v);
    return this._cache.get(key);
  }

  put(key, value) {
    if (this._cache.has(key)) this._cache.delete(key);

    this._cache.set(key, value);

    if (this._cache.size > this.capacity) {
      // keys().next().value returns the first item's key in hashtable - or least recently used
      this._cache.delete(this._cache.keys().next().value);
    }
  }
}
