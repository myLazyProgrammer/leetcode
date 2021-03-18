var reverseList = function(head) {
    let arr = []
    let currentNode = head
    if(!head){
        return head
    }

    while(currentNode){
        arr.unshift(currentNode)
        currentNode = currentNode.next
    }
    for(let i = 0; i < (arr.length-1); i++){
        if(arr[i+1]){
            arr[i+1].next = null
        }
        arr[i].next = arr[i+1] || null
    }

    return arr[0]
};