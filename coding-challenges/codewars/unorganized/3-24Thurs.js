//****THURSDAY 3.24 - start: kyu6: 9.2%, 88kata, 139 honor    -**TOP 100 OF CLAN= 507honor

//Descending Order
function descendingOrder(n) {
  //INPUT (145263)
  let arr = n.toString().split(""); //TURN INPUT INTO A STRING... TURN STRING INTO ARRAY OF EACH NUMBER     => ['1','4','5,'...]
  arr = arr.sort((a, b) => b - a); //SORT ARRAY OF NUMBERS FROM HIGH TO LOW                                => ['6','5','4,'3','2','1']
  return Number(arr.join("")); // RETURN THE STRING AS A NUMBER JOINED TOGETHER W/ NO COMMAS           => 654321
}
console.log(descendingOrder(145263));

//List Filtering
//  ????    ** I FORFEITED
function filter_list(l) {
  return l.filter(function (v) {
    return typeof v == "number";
  });
}

or;
function filter_list(l) {
  return l.filter((v) => typeof v == "number");
}

//REVERSED STRING
function solution(str) {
  return str.split("").reverse().join("");
}
console.log(solution("world"));
console.log(solution("WoRd"));
