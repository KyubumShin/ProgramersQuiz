function solution(array, commands) {
    var answer = [];
    commands.forEach(element =>{
        let thisElement = cutArray(array,element[0],element[1],element[2]);
        answer.push(thisElement);
    })
    return answer;
}

function cutArray(array, i, j, k){
    let cutedArray = array.slice(i-1,j);;
    cutedArray.sort(function(a,b){
        return a-b;
    })
    console.log(cutedArray);
    return cutedArray[k-1];
}