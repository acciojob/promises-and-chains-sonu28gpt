//your JS code here. If required.
let age=document.getElementById('age');
let uname=document.getElementById('name');
let btn=document.getElementById('btn');
// console.log(name,name);
btn.addEventListener('click',(e)=>{

  e.preventDefault();
  // console.log(age.value);
  // console.log(uname.value);
	let a=age.value;

	a=+a;
	let b=uname.value;
  // console.log(a,b);
	if(!a || !b){
		return alert('Please enter valid details');
	}
	age.value='';
	uname.value='';
	let promise=new Promise((res,rej)=>{
		if(a>=18){
			res(`Welcome, ${b}. You can vote.`);
		}else{
			rej(`Oh sorry ${b}. You aren't old enough.`);
		}
	});
	promise
	.then((res)=>setTimeout(()=>alert(res),4000))
	.catch((err)=>setTimeout(()=>alert(err),4000));
})