class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = new ListNode(null, null);
        this.tail = new ListNode(null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * Helper method to remove a node from the list
     */
    removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    /**
     * Helper method to add node to the end (most recently used)
     */
    addToTail(node) {
        node.prev = this.tail.prev;
        node.next = this.tail;
        this.tail.prev.next = node;
        this.tail.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            // Remove from current position
            this.removeNode(node);
            // Add to end (most recently used)
            this.addToTail(node);
            return node.value;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
            // Update existing node
            const node = this.cache.get(key);
            node.value = value;
            this.removeNode(node);
            this.addToTail(node);
        } else {
            // Create new node
            const newNode = new ListNode(key, value);
            
            // Check if we need to remove LRU
            if (this.cache.size >= this.capacity) {
                // Remove least recently used (node after head)
                const lruNode = this.head.next;
                this.removeNode(lruNode);
                this.cache.delete(lruNode.key);
            }
            
            // Add new node
            this.addToTail(newNode);
            this.cache.set(key, newNode);
        }
    }
}