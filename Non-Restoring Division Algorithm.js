// Non Restoring Division Algorithm

function add(varA, varM) {
    let carry = 0;
    var sumArr = "";

    for (i = varA.length - 1; i >=0; i--) {
        var temp = Number(varA[i]) + Number(varM[i]) + carry;
        // console.log("temp: ", temp);
        if (temp > 1) {
            var currentval = Number(temp % 2);
            sumArr += currentval.toString();
            carry = 1;
        } else {
            sumArr += temp.toString();
            carry = 0;
        }
    }
    sumArr.split('').reverse().join('');
    return sumArr.split('').reverse().join('');
    }

function two_compliment(m){
  var M = '';
  for (i=0 ;i < m.length;i++){
      var temp = (Number(m[i]) + 1) % 2;
      M += temp.toString() ;
  }
  M = add(M,'0000000000000001');
  return M;
}
// two_compliment('1111')


function binaryToDecimal(binary){
  var binary1 = binary;
  var decimal = 0;
  var i = 0;
  var n = 0;

  while (binary !== 0){
    var dec = binary % 10;
    var a = Math.pow(2, i);
    decimal = decimal + dec * a;
    binary = binary / 10 ;
    // binary = Math.floor()
    binary = Math.floor(binary);
    i += 1;
  }
  return decimal
  
}
// binaryToDecimal('1111')


function dec_to_bin(decimalNum){
  var bitStr = "";
  // console.log(typeof(decimalNum));
    while (decimalNum > 0) {
        var num = decimalNum;
        var b = num % 2;
        bitStr += b;
        num = parseInt(num / 2);
        decimalNum = parseInt(decimalNum / 2);
    }
    return bitStr.split('').reverse().join('');
}
// dec_to_bin(7)


function nonRestoringDivision(Q, M, A){  
    var count = M.length;
    var comp_M = two_compliment(M );
    var flag = 'successful';

    console.log("\nInitial Values :");
    console.log("A : ",A);
    console.log("Q : ",Q);
    console.log("M : ",M);

    while (count != 0){
      console.log("\n")
      console.log("Step : ",M.length - count + 1);
      A = A.slice(1,) ;
      A = A + Q[0];

      if (flag == "successful"){
        A = add(A, comp_M);
        console.log("--> Left Shift and Subtract : ");
      }
      else {
        A = add(A,M);
        console.log("--> Left Shift and Add : ");
      }
      console.log("A : ", A);
      console.log("Q : ",Q.slice(1,)+"_");

      if (A[0] == "1"){
        Q = Q.slice(1,) ;
        Q = Q + '0';
        console.log('Carry : 0 => Qo remains same' )

        flag = "unsuccessful"
        console.log("A : ",A);
        console.log("Q : ",Q);
        console.log("\nAC = AC + M in next step");
      }
      else{
        Q = Q.slice(1, ); 
        Q = Q + '1';
        console.log('Carry : 1 => Qo changed' )

        flag = "successful"
        console.log("A : ",A);
        console.log("Q : ",Q);
        console.log("\nAC = AC - M in next step");

      }
      count -= 1;
      console.log("count : ",count);
    }

  if (dd < '0' && dr < '0'){
        console.log("Quotient in Decimal : ",binaryToDecimal(parseInt( Q )));
        console.log("Remainder in Decimal :",binaryToDecimal(parseInt(A)));
        console.log("Quotient (Q) :",Q);
        console.log("Remainder(A) :",A);

  }
  else if (dd < '0' || dr < '0'){
      console.log("Quotient (Q) :",Q);
      console.log("Remainder (A) : ",A);
      console.log('Quotient(Q) in Decimal : -',binaryToDecimal(parseInt(Q))); 
      console.log('Remainder in Decimal : ',binaryToDecimal(parseInt(A)));
  }
  else{
    if (A[0] == "1"){
      A = two_compliment(A);
      console.log("Quotient(Q) : ",Q);
      console.log("Remainder(R) : ",A);
      console.log("Quotient in Decimal : ",binaryToDecimal(parseInt(Q)));
      console.log("Remainder in Decimal : ",binaryToDecimal(parseInt(A)));
      
    }
    else if (A[0] == "0"){
      // A = two_compliment(A);
      console.log("Quotient(Q) : ",Q);
      console.log("Remainder(R) : ",A);
      console.log("Quotient in Decimal : ",binaryToDecimal(parseInt(Q)));
      console.log("Remainder in Decimal : ",binaryToDecimal(parseInt(A)));   
    }
  }
}

  var Q = parseInt(prompt("Enter Dividend :"));
  var M = parseInt(prompt("Enter Divisor :"));
  var A = 0;

  var dd = Q;
  var dr = M ;

  if (A == 0 || A > 0){
      console.log("A = ",A);
      A = dec_to_bin(A);
      console.log(A);
      length_A = A.length;
      for (i = 0; i < 16 - length_A;i++){
        A = '0' + A;
      }
      console.log("A = ",A);
  }
  else{
     console.log("A = ",A);
      A = dec_to_bin(A.toString);
      for (i = 0; i < 16 - A.length;i++){
        A = '0' + A;
      }
      console.log("A = ",A);
  }

if (Q == 0 || Q > 0){
    console.log("Q = ",Q);
    Q = dec_to_bin(Q); //--> bin converter
    length_Q = Q.length;
    for (i = 0; i < 16 - length_Q ; i++){
      Q = '0' + Q;
    }
    // console.log(two_compliment);
    console.log("Q = ",Q);
}

else{
    Q = -Q;
    console.log("Q = -",Q);
    Q = dec_to_bin(Q); //--> bin converter
    length_Q = Q.length;
    for (i = 0 ; i <16 - length_Q;i++){
      Q = '0' + Q ;
    }
    console.log(two_compliment(Q));
}

if (M ==  0 || M > 0){
    console.log("M = ",M);
    M = dec_to_bin(M); //-->bin converter
    length_M = M.length;
    for (i = 0; i < 16 - length_M;i++){
      M = '0' + M;
    }
    // console.log(two_compliment);
    console.log("M = ",M);
}

else{
    M = -M;
    console.log("M = -",M);
    M = dec_to_bin(M); //-->bin converter
    length_M = M.length;
    for (i = 0 ; i < 16 - length_M;i++){
      M = '0' + M ;
    }
    console.log(two_compliment(M));
}
nonRestoringDivision(Q,M,A);