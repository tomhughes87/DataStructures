class node {
    constructor(value){
        this.prev = null;
        this.value = value
    }
}

class stack {
    constructor(value){
        let newNode = new node(value)
        this.top = newNode
        this.length = 1
    }

    push(value){
        let newNode = new node(value)
        if(this.length===0){
            this.top=newNode    
        }
        else{
            newNode.prev=this.top
            this.top=newNode
        }
        this.length++
        return this
    }

    pop(){
        if(this.length===0)return false
        else if(this.length===1){
            this.top = null
            this.length--
        }
        else{
            let temp = this.top.prev
            this.top.value = null
            this.top.next = null

            this.top = temp

            this.length--
        }
    }

    printAll(){
        let temp = this.top
        for (let i = 0; i < this.length; i++) {
            console.log(temp.value)
            temp = temp.prev
        }
    }
}

const myStack = new stack("a - apple")

console.log(myStack)

myStack.push("b - banana")
myStack.push("c - cat")
myStack.push("d - dog")
myStack.push("e - egg")

console.log(myStack)

myStack.printAll()

myStack.pop()

// console.log(myStack)

myStack.printAll()

myStack.pop()

myStack.pop()

myStack.pop()

myStack.pop()


myStack.pop()

console.log("")

myStack.push("b - banana")



myStack.printAll()
