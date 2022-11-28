exports.kajal= function(x1,x2,c){
//exports (used to export this file function to other file)
//calc is variable storing function (calc is used to call this function)
//first val=x1 ; second var =x2 ; c = choice of operator
    switch (c){
        case '+':
            return (x1+x2);break;
        case '-':
            return (x1-x2);break;
        case '/':
            return (x1/x2);break;
        case '*':
            return (x1*x2);break;
        default:
            console.log("Enter valid operator..");
    }
}
