for(let i = 1; i <= 100; i++) {
    if(i % 2== 0 & i % 5 == 0)  {
        // alert("Arriegua")
        document.write(`Numero ${i} - Arriegua <br>`);
    }
    else if (i % 2 == 0)  {
        // alert("Arri")
        document.write(`Numero ${i} - Arri <br>`);

    }
    else if (i % 5 == 0) {
        // alert("Egua")
        document.write(`Numero ${i} - Egua <br>`);
    }

    else {
        // alert(i)
        document.write(i + `<br>`);
    }
}