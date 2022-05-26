let l=1;
 let u=999;
 let mid=(l+u)/2;
 let final=null;
 let c=0;
 function middle1()
 {  
    if(c<=10) { 
        l=mid+1;
        mid=Math.trunc((l+u)/2);
        document.querySelector('#middle').innerHTML=mid;
        c++;
    }
    if(c===10)
    {
        alert('Click on the reveal button to reveal your number.');
        final=Math.trunc(mid+1);
        document.querySelector('#middle').innerHTML="";
    }
    if(c>10) {
        document.querySelector('#middle').innerHTML="";
    }
}
 function middle2(){
        if(c<=10) {
        u=mid-1; 
        mid=Math.trunc((l+u)/2); 
        document.querySelector('#middle').innerHTML=mid;
        c++;
    }
    if(c===10)
    {
        alert('Click on the reveal button to reveal your number.');
        final=Math.trunc(mid+1);
        document.querySelector('#middle').innerHTML="";
    }
    if(c>10) {
        document.querySelector('#middle').innerHTML=""; 
    }
 }
 function reveal(){
    document.querySelector('#final').innerHTML=final;
 }