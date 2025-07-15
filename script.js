function validateForm(){
  const result = {
        
    };
const fullName = document.getElementById("full-name");
    const email = document.getElementById("email");
    const orderNo = document.getElementById("order-no");
    const productCode = document.getElementById("product-code");
    const quantity = document.getElementById("quantity");
    const complaintCheckboxes = document.querySelectorAll('#complaints-group input[type="checkbox"]');
    const complaintDescription = document.getElementById("complaint-description").value.trim();
    const solutionRadios = document.querySelectorAll('#solutions-group input[type="radio"]');
    const solutionDescription = document.getElementById("solution-description").value.trim();
 if(fullName.value.trim()!==""){
    result['full-name']=true;
    
  }else{
    result['full-name']=false;
    
  }
fullName.addEventListener('change',()=>{
  if(fullName.value.trim()!==""){
    
    fullName.style.borderColor="green"
  }else{
    
    fullName.style.borderColor="red";
  }
})
const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
email.addEventListener('change',()=>{
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
  if(validEmail){
    email.style.borderColor="green";
  }else{
    email.style.borderColor="red";
  }
});



result['email']=isValidEmail;


/^2024\d{6}$/.test(orderNo.value.trim())?result['order-no']=true:result['order-no']=false;

orderNo.addEventListener('change',()=>{
let regex = /^2024\d{6}$/
if(regex.test(orderNo.value.trim())){
  orderNo.style.borderColor="green"
}else{
  orderNo.style.borderColor="red"
}
});

/^[A-Za-z]{2}\d{2}-[A-Za-z]{1}\d{3}-[A-Za-z]{2}\d{1}$/.test(productCode.value.trim())?result['product-code']=true:result['product-code']=false;

productCode.addEventListener('change',()=>{
  let regex = /^[A-Za-z]{2}\d{2}-[A-Za-z]{1}\d{3}-[A-Za-z]{2}\d{1}$/;

  if(regex.test(productCode.value.trim())){
    
    productCode.style.borderColor="green"
  }else{
    
    productCode.style.borderColor="red";
  }
})

Number.isInteger(Number(quantity.value.trim()))&&Number(quantity.value.trim()>0)?result['quantity']=true:result['quantity']=false;

quantity.addEventListener('change',()=>{
  if(Number.isInteger(Number(quantity.value.trim()))&&Number(quantity.value.trim()>0)){
    quantity.style.borderColor="green";
  }else{
    quantity.style.borderColor ="red"
  }
})


let camp = document.getElementById('complaints-group')

const chkcp = Array.from(complaintCheckboxes).filter(cb=>cb.checked);

Array.from(complaintCheckboxes).forEach((i)=>{
  let count = 0;
  i.addEventListener('change',(e)=>{
    if(e.target.checked){
      count++;
      
    }else{
      count--;
    }
    if(count>0){
      camp.style.borderColor="green"
    }else{
      camp.style.borderColor="red";
    }
  })
});

chkcp.length>0?result['complaints-group']=true:result['complaints-group']=false;

const otherchk = document.getElementById('other-complaint').checked;

if((otherchk&&complaintDescription.length>=20)||!otherchk){
  result['complaint-description']=true;
}else{
  result['complaint-description']=false;
}

const cd = document.getElementById("complaint-description");
cd.addEventListener('change',()=>{

  if(cd.value.trim().length>=20&&otherchk){
    cd.style.borderColor="green";
  }else{
    cd.style.borderColor="red";
  }

});


const sg = Array.from(solutionRadios).find(c=>c.checked);
sg?result['solutions-group']=true:result['solutions-group']=false;
const saga = document.getElementById('solutions-group')
Array.from(solutionRadios).forEach((i)=>{
  let count = 0;
  i.addEventListener('change',(e)=>{
    if(e.target.checked){
      count++;
      
    }else{
      count--;
    }
    if(count>0){
      saga.style.borderColor="green"
    }else{
      saga.style.borderColor="red";
    }
  })
});

const othersol = document.getElementById('other-solution').checked;
if((othersol&&solutionDescription.length>=20)||!othersol){
  result['solution-description']=true;
}else{
  result['solution-description']=false;
}

const sd = document.getElementById("solution-description");
sd.addEventListener('change',()=>{

  if(sd.value.trim().length>=20&&othersol){
    sd.style.borderColor="green";
  }else{
    sd.style.borderColor="red";
  }

});


return result;

}

function isValid(ff) {
  let res = ff;
  let count =0;
  let flag =false;
  for(let x in res){
    
    if(res[x]==true){
      count++;
    }
  }

  if(count==9){
    flag = true;
  }

  console.log(flag,count)
  return flag
}


let fm = document.getElementById('form');
fm.addEventListener('submit',(e)=>{
  e.preventDefault();
  validateForm();
let f =isValid(validateForm())
if(f){
    window.alert('Yes you did it')
}else{
    window.alert("you missed the fields")
}
});
