class Node {
    constructor(value){
        this.value=value
        this.leftBranch=null
        this.rightBranch=null
    }
}

class tree {
    constructor(){
        this.root=null
        this.numOfItems=0
    }

    insert(value){
        const newNodeToInsert = new Node(value)
        if (this.root===null){
            this.root=newNodeToInsert
            this.numOfItems++
            return this
        }

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

    contains(value){
        let temp=this.root

        do{
            if(temp.value===value)return true
            else{
                if(value< temp.value){

                    if (!temp.leftBranch) return false
                    else{
                        temp=temp.leftBranch
                    }
                }
                else{
                    if (!temp.rightBranch) return false
                    else{
                        temp=temp.rightBranch
                    }
                }
            }
        }
        while(true)   
    }

    min(){
        console.log("min value running..")
        let temp=this.root

        do{   
            if(temp.leftBranch===null){
                return temp.value
            }
            else{
                temp=temp.leftBranch
            }
        }
        while(true)
    }

    length(){
        return this.length
    }
}



let myTree = new tree()


myTree.insert(67)
myTree.insert(1)
myTree.insert(3)
myTree.insert(32)
myTree.insert(61)
// myTree.insert(-41)
myTree.insert(99)
myTree.insert(65)
myTree.insert(765)
// myTree.insert(0)
console.log("length:",myTree.length())


console.log(myTree)

console.log(myTree.contains(1) ,"< should be true")//true
console.log(myTree.contains(3333) ,"< should be false")//false
console.log(myTree.contains(0) ,"< should be true")

console.log(myTree.min())

// doesnt handle doubles, could with a counter for nodes... or just return false on insert