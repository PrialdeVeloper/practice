window.fbAsyncInit = function() {
    FB.init({
      appId      : '180666716023704',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.11'
    });
    FB.AppEvents.logPageView();   
      
  };


    function getStat(){
       document.getElementById('try').innerHTML = 'Connected on Network';
    FB.getLoginStatus(function(response) {
      var res = response.status;
      switch(res){
        case 'connected':
        document.getElementById('try').innerHTML = 'Connected on Network';
        break;
        case 'not_authorized':
        document.getElementById('try').innerHTML = 'You have not logged in to the app';
        break;
        case 'unknown':
        document.getElementById('try').innerHTML = 'You have not logged in to the facebook';
        break;
      }
      
  });
    }
    function login(){
      FB.login(function(response){
        document.getElementById('try3').innerHTML = 'qwe';
      });
    }

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
