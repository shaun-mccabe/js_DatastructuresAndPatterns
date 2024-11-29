/* -----------------------------------------------------------
  Binary Search Tree
  A binary search tree is a tree data structure where each node has at most two children, 
  referred to as the left child and the right child. The Binary Search Tree differs 
  from a binary tree in that it has the added rule of everything on left side of the tree 
  must be less than the right side of the tree.

----------------------------------------------------------- */

class Node{
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

//Our Binary Search Tree Data structure
class BinarySearchTree{
    constructor(rootNode = null) {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data)
        
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
            
        }
    }

    insertNode(nodeRoot, newNode) {
        
        if (newNode.data < nodeRoot.data) {
            if (nodeRoot.left === null) {
                nodeRoot.left = newNode
            } else {
                this.insertNode(nodeRoot.left, newNode)
            }
        } else if (newNode.data > nodeRoot.data){
            if (nodeRoot.right === null) {
                nodeRoot.right = newNode
            } else {
                this.insertNode(nodeRoot.right, newNode)
            }
            
        } else {
            console.log(`Duplicate value Detected(Node Value: ${newNode.data}), and not added to the tree.`)
        }

    }
    
    //traversal
    inOrderTraverse(node) {
        if (node !== null) {
            this.inOrderTraverse(node.left);
            console.log(`Data: ${node.data} `);
            this.inOrderTraverse(node.right);
        }
    }
}
  

//Execution
const tree = new BinarySearchTree()

tree.insert(50)
tree.insert(200)
tree.insert(20)
tree.insert(100)
tree.insert(100)
tree.insert(1)
tree.insert(4)

tree.inOrderTraverse(tree.root)

console.log(tree)
//End of the Binary Tree Example