let inputs = [1,'turing',{x : 2},[3,4],{y: 5}];
for(let i = 0;i < inputs.length;i++){
    if(inputs[i] === 'turing') inputs.splice(i,1);
    else console.log(inputs[i])
}