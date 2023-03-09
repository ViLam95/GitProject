function ChangeMoney() {
    let money=document.getElementById('Amount').value;
    let from=document.getElementById('From').value;
    let to=document.getElementById('To').value;
    if( from===to ){
        alert( money+from );
    }
    else {
        if( from==='VND') {
            alert (money / 23000 + to);
        }
        else {
            alert (money * 23000 + to);
        }
    }
}

