/* -----------------------------------------------------------
  Binary Tree
  A binary tree is a tree data structure where each node has at most two children, 
  referred to as the left child and the right child. The tree must be balanced, but
  fundamentally does not have any other rules for how the data is stored.


----------------------------------------------------------- */


class Node{
    /**
     * 
     * @param {*} data 
     * 
     * Creates a Node Object to be used in the binary tree
     * 
     */
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

//Our BinaryTree Data structure
class BinaryTree{
    /**
     * 
     * @param {*} rootNode - a Node object
     * 
     * A node object is not required to instantiate the binary tree. 
     * once the tree is instantiated, the add insert function will 
     * delegate a root node.
     * 
     * Publix Methods:
     */
    constructor(rootNode = null) {
        this.root = rootNode;
    }

    insert(data) {
        const newNode = new Node(data)
        
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.#insertNode(this.root, newNode);
            
        }
    }

    #insertNode(nodeRoot, newNode) {

        /* -----------------------------------------------------------
        This is a private utility method to make the class work. 
        Since this is just a binary tree, insertion order doesn't matter,
          but we need to make sure that there is balance.

        ----------------------------------------------------------- */
        const queue = [nodeRoot]; //Start a queue to manage the insertions

        while (queue.length > 0) {
        const current = queue.shift(); // Get a node from the front of the queue

            if (current.left === null) {
            //if a node doesn't exist on the left side, then we're adding our new node, if it does...
            current.left = newNode;
            break;
            } else {
            //then we are pushing it into the queue to be analyzed later, and moving on to check the right side..
            queue.push(current.left);
        }

            if (current.right === null) {
            //if a node doesn't exist on the right side, we set our node as the right node, if it does
            current.right = newNode;
            break;
            } else {
            //we push the right node into the queue to analyze it later.
            queue.push(current.right);
        }
           //LOOP to Top
        }

    }
    //find
    find(data) {
        if (this.root !== null) {
            const queue = [this.root]

            while (queue.length > 0) {
                const currentNode = queue.shift()
                if (currentNode.data === data) {
                    return `Found the Node: ${currentNode}`
                }
                if (currentNode.left !== null) {
                    queue.push(currentNode.left);
                }
                if (currentNode.right !== null) {
                    queue.push(currentNode.right)
                }
            }
            return `Cannot find ${data}`;
        }
        return `Root Is Null`
        
    }
    //traversal
    traverse(node) {
        if (node !== null) {
            this.traverse(node.left);
            console.log(`Data: ${node.data} `);
            this.traverse(node.right);
        }
    }


}
  

//Execution
const rootNode = new Node(75)
const tree = new BinaryTree(rootNode)

tree.insert(50)
tree.insert(200)
tree.insert(20)
tree.insert(100)
tree.insert(1)
tree.insert(4)

console.log("Traversing Example -----------------------------------------")
tree.traverse(tree.root)
console.log("  ")
console.log("  ")

console.log("Finding Example -----------------------------------------")
console.log("Found")
console.log(tree.find(100))
console.log("  ")
console.log("  ")
console.log("Not Found")
console.log(tree.find("dan"))
console.log("  ")
console.log("  ")


console.log("Full Binary Tree -----------------------------------------")
console.log(tree)
//End of the Binary Tree Example