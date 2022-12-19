function Numbers(numA, numB) {
    var randomNumber = Math.floor(Math.random() * (100) + 1);
    console.log("Il numero generato randomicamente è " + randomNumber);
    console.log("Il numero A è " + numA);
    console.log("Il numero B è " + numB);
    var diffA = Math.abs(numA - randomNumber);
    console.log("La differenza tra il numero A ed il numero generato randomicamente è di " + diffA);
    var diffB = Math.abs(numB - randomNumber);
    console.log("La differenza tra il numero B ed il numero generato randomicamente è di " + diffB);
    if (randomNumber == numA) {
        console.log("Numbero A è uguale al numero Random");
    }
    else if (randomNumber == numB) {
        console.log("Numbero B è uguale al numero Random");
    }
    else {
        if (diffA < diffB) {
            console.log("Il numbero A è più vicino al numero generato randomicamente");
        }
        else if (diffA > diffB) {
            console.log("Il numbero B è più vicino al numero generato randomicamente");
        }
        else if (diffA == diffB) {
            console.log("I numeri sono ad uguale distanza dal numero generato randomicamente");
        }
    }
}
Numbers(40, 60);
