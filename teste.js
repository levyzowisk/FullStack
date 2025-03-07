const div3 = 'é divisivel por 3';
const div5 = 'é divisivel por 5';
let result
for (let i = 1; i <= 100; i++) {
        
        

        if(i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} ${div3} ${div5}`);  
        }

        else if(i % 3 === 0) {
            console.log(`${i} ${div3}`);
        } else if ( i % 5 === 0) {
            console.log(`${i} ${div5}`);
        }
        else {
        console.log(i);

        }



    }

    