class Node {
    constructor(value) {
        this.value=value
        this.next=null
        this.prev=null
    }
}

class DoublyLinkedList{
    constructor(value){
        let newNode= new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    unshift(value){
        console.log("unshifting",value)
        
        let newNodeToUnshift = new Node(value)
        // handle zero
        if (this.length===0) {
            this.head=newNodeToUnshift
            this.tail=newNodeToUnshift
            return 
        }
        else{
            this.head.prev=newNodeToUnshift
            newNodeToUnshift.next = this.head
            
            this.head = newNodeToUnshift
        }
        
        this.length++
    }

    shift(){
        
        if (this.length===0) return false            
        
        else if (this.length===1) {
            return false            
        }

        else{            
            let tempNewHead = this.head.next
            this.head.value=null
            this.head.prev=null
            this.head.next=null
    
            this.head=tempNewHead
            this.head.prev=null
            
        }
        
        this.length--
    }

    push(value){
        if (!value) return false
        
        let newNodeToPush = new Node(value)

        if (this.length===0) {
            this.head=newNodeToPush
            this.tail=newNodeToPush
        }
        else{
            this.tail.next= newNodeToPush
            newNodeToPush.prev=this.tail
            this.tail=newNodeToPush
        }
            
            this.length++

        return true
    }

    pop(){
        let temp = this.tail
        this.tail = this.tail.prev 

        // handle len=0
        
        temp.value=null
        temp.next=null
        temp.prev=null
        temp=null

        this.tail.next=null

        this.length--
        return true
    }

    remove(index){
        let temp = this.get(index)

        console.log(temp.value)

        let prevNode = temp.prev 
        let nextNode = temp.next

        prevNode.next=nextNode
        nextNode.prev=prevNode

        this.length--
    }

    set(index,value){
        let nodeToUpdate = this.get(index)
        nodeToUpdate.value=value
    }

    get(index){
        console.log("get() running")
        let temp = this.head
        let next = this.head.next

        for (let i = 0; i < index; i++) {
            temp = next
            next = temp.next
        }
        console.log("got",temp.value,"from refence:",index)
        return temp
    }

    reverse(){
        console.log("reversing list...")
        let temp = this.tail
        this.head=this.tail
        this.tail=temp         

        for (let i = 0; i < this.length; i++) {
            const tempPrev = temp.prev
            const tempNext = temp.next

            // switch the values
            temp.next=tempPrev
            temp.prev=tempNext
            
            // move temp to next node
            temp=temp.next
        }

    }

    printAll(){
        console.log("\nPrinting entire list...")
        let temp = this.head
        for (let i = 0; i < this.length; i++) {
            console.log(temp.value)
            temp=temp.next            
        }
        console.log("")
    }
}




// // ///////////////////////////////
console.log("running Doubly Linked List Script:")

let DLL = new DoublyLinkedList("d")

// console.log(DLL)

// DLL.unshift("c")

// DLL.unshift("b")
// 
// DLL.unshift("a")

DLL.shift()

// DLL.get(2)
// DLL.get(3)
// DLL.get(0)

// DLL.set(3,"balls")
// DLL.set(0,"bugger")

// DLL.remove(1)


// DLL.unshift()

// console.log(DLL.push(),DLL.push("df"))


// DLL.push("df")
// DLL.push("dfdsa")
// DLL.push("dfadadas")
// console.log(DLL.length())


// DLL.pop()

// DLL.pop()
// DLL.pop()



// console.log("length:",DLL.length)
// console.log(DLL.head)
// console.log(DLL.tail)

DLL.printAll()



// DLL.reverse()

// DLL.printAll()

