var removeNthFromEnd = function(head, n) {
    let prevNode = null
    let targetNode = head
    let currentNode = head
    let num = 0
    while(currentNode){
        if(num >= n){
            prevNode = targetNode
            targetNode = targetNode.next
        }
        num++
        currentNode = currentNode.next
    }
 
     if(prevNode){
         prevNode.next = targetNode.next
     }else{
         return targetNode.next
     }
 
 
    return head
 };