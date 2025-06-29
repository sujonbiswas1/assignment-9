const amount = document.getElementById('amount');
amount.style.display = "none"
const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click',()=>{
     const username = document.getElementById('username').value;
     const password = document.getElementById('password').value;
     if(username==''){
          alert('sorry enter your username')
     }
     else if(password==''){
          alert('sorry enter your password')
     }
     else{
          const login = document.getElementById('login');
          login.style.display = 'none';
          amount.style.display = 'block'

     }
     
})

// deposit section start here

let DepositBtn = document.getElementById('DepositBtn');
DepositBtn.addEventListener('click',(e)=>{
     e.preventDefault()
     const DepositInput =document.getElementById('DepositInput').value;
     const depositBalance =document.getElementById('depositBalance').innerHTML;
     if (DepositInput=='') {
          const message = document.getElementById('message');
          message.innerHTML = 'please enter your amount'
          return;
     }
     else{
          const DepositConver = parseFloat(DepositInput);
          const BalanceConver = parseFloat(depositBalance);
          const AllDeposit = DepositConver + BalanceConver;
          document.getElementById('depositBalance').innerHTML = AllDeposit.toFixed(2);
          const totalBalance = document.getElementById('totalBalance').innerHTML;
          const TotalConvert = parseFloat(totalBalance);
          const total = AllDeposit + TotalConvert;
          document.getElementById('totalBalance').innerHTML = total.toFixed(2);
           const message = document.getElementById('message');
          message.innerHTML = ''
          
     }
     
})

// deposit section end here

//witdraw section start here

let witdrawBtn = document.getElementById('witdrawBtn');
witdrawBtn.addEventListener('click',(e)=>{
     e.preventDefault()
     const witdrawInput =document.getElementById('witdrawInput').value;
     const widtrawBalance =document.getElementById('widtrawBalance').innerHTML;
     if (witdrawInput=='') {
          const message = document.getElementById('message1');
          message.innerHTML = 'please enter your amount'
          return;
          
     }
     else{
          const InputConver = parseFloat(witdrawInput);
          const BalanceConver = parseFloat(widtrawBalance);
          const AllDeposit = InputConver + BalanceConver;
          document.getElementById('widtrawBalance').innerHTML = AllDeposit.toFixed(2);

          const totalBalance = document.getElementById('totalBalance').innerHTML;
          const TotalConvert1 = parseFloat(totalBalance);
          const total1 = TotalConvert1-AllDeposit;
          document.getElementById('totalBalance').innerHTML = total1.toFixed(2);
           const message = document.getElementById('message1');
          message.innerHTML = ''

       
       
     }
   
})

//witdraw section end here

