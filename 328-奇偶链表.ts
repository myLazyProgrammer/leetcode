var oddEvenList = function(head) {
    if(!head) return head
    let _evenNode = head.next
    let evenNode = head.next
    let oddNode = head
    let num = 1

    while(oddNode.next && evenNode.next){
        oddNode.next = oddNode.next.next
        oddNode = oddNode.next
        evenNode.next = evenNode.next.next
        evenNode = evenNode.next
    }
    oddNode.next = _evenNode

    return head
};