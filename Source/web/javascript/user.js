create : function (user)
{
	var request = new SNDK.ajax.request ("/", "cmd=Ajax;cmd.function=SorentoLib.User.New", "data", "POST", false);			
	request.send (user);
	
	return request.respons ();		
},

load : function (id)
{
	var request = new SNDK.ajax.request ("/", "cmd=Ajax;cmd.function=SorentoLib.User.Load", "data", "POST", false);	
	
	var content = new Array ();
	content["id"] = id;
				
	request.send (content);
	
	return request.respons ();
},

save : function (user)
{
	var request = new SNDK.ajax.request ("/", "cmd=Ajax;cmd.function=SorentoLib.User.Save", "data", "POST", false);				
	request.send (user);		
	
	return true;
},

remove : function (id)
{
	var request = new SNDK.ajax.request ("/", "cmd=Ajax;cmd.function=SorentoLib.User.Delete", "data", "POST", false);	
	
	var content = new Array ();
	content["id"] = id;
	
	request.send (content);				
	
	return true;
},

list : function ()
{
	var request = new SNDK.ajax.request ("/", "cmd=Ajax;cmd.function=SorentoLib.User.List", "data", "POST", false);	
		
	request.send ();
											
	return request.respons ()["users"];
},

isUsernameInUse : function (username, id)
{
	var request = new SNDK.ajax.request ("/", "cmd=Ajax;cmd.function=SorentoLib.User.IsUsernameInUse", "data", "POST", false);	

	var content = new Array ();	
	content['username'] = username;		
	if (id != null)
	{
		content['id'] = id;
	}
	
	request.send (content);

	if (request.respons ()["result"] == "true")
	{
		return true;
	}			

	return false;
},

isEmailInUse : function (email, id)
{
	var request = new SNDK.ajax.request ("/", "cmd=Ajax;cmd.function=SorentoLib.User.IsEmailInUse", "data", "POST", false);	

	var content = new Array ();

	content["email"] = email;
	if (id != null)
	{
		content["id"] = id;
	}

	request.send (content);

	if (request.respons ()["result"] == "true")
	{
		return true;
	}			

	return false;
}		
