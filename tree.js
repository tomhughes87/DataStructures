class Node {
    constructor(value){
        this.value=value
        this.leftBranch=null
        this.rightBranch=null

    }
}

class tree {
    constructor(value){
        let newNodeToAdd= new Node(value)
        this.root=newNodeToAdd

        this.layers=0
        this.numOfItems=1
    }

    insert(value){
        const newNodeToInsert = new Node(value)
        let temp = this.root
        do{
            if (value < temp.value){
                if(temp.leftBranch===null) {
                    temp.leftBranch=newNodeToInsert
                    this.numOfItems++
                    break
                }
                else{temp=temp.leftBranch}
            }
            else{              
                if(temp.rightBranch===null) {
                    temp.rightBranch=newNodeToInsert
                    this.numOfItems++
                    break
                }
                else{temp=temp.rightBranch}
            }
        }
        while(true)
        return 
    }

}



let myTree = new tree(49)

// console.log(myTree.insert(67))
myTree.insert(67)
myTree.insert(1)
myTree.insert(3)
myTree.insert(32)
myTree.insert(61)
myTree.insert(-41)
myTree.insert(99)
myTree.insert(65)
myTree.insert(765)
myTree.insert(0)

console.log(myTree)