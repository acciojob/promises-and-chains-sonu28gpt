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
		return alert('insert all fields are required');
	}
	age.value='';
	uname.value='';
	return new Promise((res,rej)=>{
		if(a>=18){
			setTimeout(()=>{
				res(alert(`Welcome, ${b}. You can vote.`))
			},4000)
		}else{
			setTimeout(()=>{
			rej(alert(`Oh sorry ${b}. You aren't old enough.`));
			},4000);
				
		}
	});
})