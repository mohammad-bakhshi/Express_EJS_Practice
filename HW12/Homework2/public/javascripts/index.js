$(document).ready(function () {
    

    $("#register").click(function () {
        if ($('#username').val()===''||$('#password').val()===''||$('#email').val()==='') {
            alert('username,password or email is empty');
        }
        else{
          let data={
              username:$('#username').val(),
              password:$('#password').val(),
              email:$('#email').val()
            }
          $.ajax({
              type: "POST",
              url: "/register/info",
              contentType: "application/json",
              data:JSON.stringify(data),
              success: function(response) {
                  if (response==='pass') {
                      
                  }
                  else{
                      alert('fail');
                  }
              },
              error:function(err)
              {
                  console.log(err);
              }
          });
        }
    });

  });

  
  