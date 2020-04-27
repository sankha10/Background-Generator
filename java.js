var database=[
	{
		username:"Sankha",
		password:"lionelMessi"

   },
   {
        username:"Amit",
		password:"sankha"

   }
];
var newsfeed=[
	{timeline:"Im not feeling well"}
];
var username=prompt("Enter your username");
var password=prompt("Enter your password");
function check(username,password)
{
for (var i=0;i<=database.length;i++) {
		
	if(username==database[i].username || password==database[i].password)
	{
		return true;
	}
	else{
		return false;
	}
}	
}
function signin(username,password)
{
	if(check(username,password))
	{
		console.log(newsfeed);
	}
	else
		alert("Please try again");
}
signin(username,password);