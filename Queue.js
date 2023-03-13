
class node {
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Queue {
    constructor(value){
        let newNode = new node(value)
        this.first = newNode
        this.last = newNode
        this.length=1
    }

    enqueue(value){
        let newNodeToPush  = new node(value)
        if(this.length===0){
            this.first = newNode
            this.last = newNode
        }
        else{
            newNodeToPush.next=this.last
            this.last=newNodeToPush
        }
            this.length++
    }

    dequeue(){
        if(this.length===0)return undefined
        else if(this.length===1){
            this.last=null    
            this.first=null
        }
        else{
            this.last=this.last.next
            this.length--
        }
    }

    printList(){
        let temp=this.last
        for (let i = 0; i < this.length; i++) {
            console.log(temp.value)
            temp=temp.next
        }
    }
}

let q = new Queue("hello")
q.enqueue("sad")
q.enqueue("happy")
q.enqueue("dog")

q.enqueue("cat")
// q.dequeue()
console.log(q)

q.printList()


