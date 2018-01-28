window.fbAsyncInit = function() {
    FB.init({
      appId      : '170160493603540',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.11'
    });
    FB.AppEvents.logPageView();   
      
  };

  function getAT(){
    FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
    document.getElementById('try').innerHTML = response.authResponse.accessToken;  
    window.location.href = "facebook.php?at="+response.authResponse.accessToken;
    }
});
  }


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
    FB.login(function(response) {
    if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ');
     FB.api('/me', function(response) {
       document.getElementById('try').innerHTML = response.name;
     });
    } else {
     console.log('User cancelled login or did not fully authorize.');
    }
});
    }

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
