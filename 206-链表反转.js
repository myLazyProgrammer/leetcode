var reverseList = function(head) {
    if(!head) return head
    let currentNode = head
    let arr = []
    while(currentNode){
        arr.push(currentNode)
        currentNode = currentNode.next
    }
    arr = arr.reverse()
    for(let i = 0; i < arr.length; i++){
        arr[i].next = arr[i+1] || null
    }
    return arr[0]
};