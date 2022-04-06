const num=parseInt(prompt("Enter the number :"));
let n1=0,n2=1,next;
console.log("fibonacci series :");
for (let i=1;i<=num;i++)
{
    console.log(n1);
    console.log(n1);
    next=n1+n2;
   while(next<=num)
   {
       console.log(next);
       n1=n2;
       n2=next;
       next=n1+n2;
   }
}