//your JS code here. If required.
const age = document.querySelector('#age');
const name = document.querySelector('#name');

function submitHandler(e){
	let a = age.value.trim();
	let b = name.value.trim();
	e.preventDefault();
	if(a==='' || b===''){
		alert("Please enter valid details");
		return ;
	}
	 new Promise((resolve,reject)=>{
		setTimeout(()=>{
						if(Number(a)>18){
				resolve(`Welcome ${b}. You can vote.`)
			}
			else{
				reject(`Oh sorry ${b}. You aren't old enough.`)
			}
		},4000);
		
	}).then((data)=>{
	alert(data);
}).catch((err)=>{
	alert(err);
});
	
	
};


