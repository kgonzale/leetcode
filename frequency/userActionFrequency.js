const logs = [
    {user: 2, action: 'A'},
    {user: 1, action: 'A'},
    {user: 2, action: 'B'},
    {user: 1, action: 'B'},
    {user: 1, action: 'C'},
    {user: 3, action: 'C'},
    {user: 1, action: 'D'},
  ];
   
  
  function userError() {
    let userAction = {}
    
    for(let i = 0; i < logs.length; i++){
      console.log(userAction[logs[i].user], logs[i].user)
      
      if(!(userAction[logs[i].user])) {
          userAction[logs[i].user] = logs[i].action 
      } else {
        userAction[logs[i].user] += logs[i].action
      }
     }
     
     
     let ids = []
     
     for(const [key, value] of Object.entries(userAction)) {
       if(value.includes("ABC")) {
         ids.push(key)
       }
     }
  
  
      return ids;   
    }
  
  
  userError()
  
  