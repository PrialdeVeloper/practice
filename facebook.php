<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript" src="facebook.js"></script>
</head>
<body>

<?php 
	if(isset($_GET['at'])){
		$access_token = $_GET['at'];
	}
?>


<div id="try" style="margin: 20% 45%; width: 220px;"></div>
<button onclick="getStat();">getStatus</button>
<button onclick="login();">login</button>
<button onclick="getAT();">get</button>
<div id="try2" style="margin: 40% 45%; width: 220px;"></div>
<div id="try3" style="margin: 50% 45%; width: 220px;"></div>


<?php 
	require_once("src\Facebook\autoload.php");
	$fb = new Facebook\Facebook([
  'app_id' => '170160493603540',
  'app_secret' => '55144507c8e5ab0ffc3ed7948fc90439',
  'default_graph_version' => 'v2.11',
  ]);


try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get('/me?fields=id,name,picture,gender,verified', $access_token);
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}

$user = $response->getGraphUser();

echo 'Name: ' . $user['name']."<br>";
echo 'id: ' . $user['id']."<br>";
echo 'gender: ' . $user['gender']."<br>";
echo 'pic:' . $user['picture']['url']."<br>";

// OR
// echo 'Name: ' . $user->getName();
    

	?>
</body>
</html>