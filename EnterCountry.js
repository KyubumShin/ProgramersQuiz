function solution(n, times) {
    times.sort((a,b)=>a-b);
    let left = 0;
    let right = n * times[times.length-1];
    let answer = right;
    while(left <= right){
        let count = 0;
        let checker = times.length;
        let mid = Math.floor((left+right)/2);
        for(let i = 0; i<checker;i++){
            count = count + Math.floor(mid/times[i]);
            if(count >= n){
                answer = mid;
                return;
            }
        }
        if(count >= n){
            right = mid-1;
        }else{
            left = mid+1;
        }
    }
    return answer;
}
