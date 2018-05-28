/*var mysql = require('mysql');
 var Customer_seller={
     addCustomer_seller:function(id,Customer_seller){ 
var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'expen_seive'
    }
);
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});
 
// Begin transaction 
connection.beginTransaction(function(err) {
  if (err) { throw err; }
 connection.query('select fk_entity_id,fk_grp_id from ac_master where account_id=?',id,function(err, rows) {
    if (err) { 
      connection.rollback(function() {
        throw err;
      });
    }
    else{
        var r = rows;
    }

 var a=r.toString().split(",");
 var r1=a[0].substring(a[0].indexOf(":") + 1);
 var r2=a[1].substring(a[1].indexOf(":") + 1);
console.log(r+a+r1+r2);
 if(r2==1)
 {
connection.query('select name from customer where cs_id=?', r1, function(err, result) {
      if (err) { 
        connection.rollback(function() {
          throw err;
        });
      }  

       connection.commit(function(err) {
        if (err) { 
          connection.rollback(function() {
            throw err;
          });
        }
        console.log('Transaction Complete.');
        connection.end();
      });
      });
 }
 else if(r2==2)
 {
connection.query('select name from seller where seller-id=?', r1, function(err, result) {
      if (err) { 
        connection.rollback(function() {
          throw err;
        });
      }  
      
       connection.commit(function(err) {
        if (err) { 
          connection.rollback(function() {
            throw err;
          });
        }
        console.log('Transaction Complete.');
        connection.end();
      });
      });

 } 
 else if(r2==3)
 {
     connection.query('select name from bank where account_no=?', r1, function(err, result) {
      if (err) { 
        connection.rollback(function() {
          throw err;
        });
      }  
      
       connection.commit(function(err) {
        if (err) { 
          connection.rollback(function() {
            throw err;
          });
        }
        console.log('Transaction Complete.');
        connection.end();
      });
      });

 } 
 else
 {
     connection.query('select name from ac_entity where entity_id=?', r1, function(err, result) {
      if (err) { 
        connection.rollback(function() {
          throw err;
        });
      }  
      
       connection.commit(function(err) {
        if (err) { 
          connection.rollback(function() {
            throw err;
          });
        }
        console.log('Transaction Complete.');
        connection.end();
      });
      });

 }
    
  });
});
 }
  }
module.exports=Customer_seller;
// End transaction  */