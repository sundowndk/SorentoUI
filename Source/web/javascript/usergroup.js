create : function (usergroup)
{
	var request = new SNDK.ajax.request ("/", "cmd=Ajax;cmd.function=SorentoLib.Usergroup.New", "data", "POST", false);			
	request.send (usergroup);
	
	return request.respons ();		
},

load : function (id)
{
	var request = new SNDK.ajax.request ("/", "cmd=Ajax;cmd.function=SorentoLib.Usergroup.Load", "data", "POST", false);	
	
	var content = new Array ();
	content["id"] = id;
				
	request.send (content);
	
	return request.respons ();
},

save : function (usergroup)
{
	var request = new SNDK.ajax.request ("/", "cmd=Ajax;cmd.function=SorentoLib.Usergroup.Save", "data", "POST", false);				
	request.send (usergroup);		
	
	return true;
},

remove : function (id)
{
	var request = new SNDK.ajax.request ("/", "cmd=Ajax;cmd.function=SorentoLib.Usergroup.Delete", "data", "POST", false);	
	
	var content = new Array ();
	content["id"] = id;
	
	request.send (content);				
	
	return true;
},		

list : function ()
{
	var request = new SNDK.ajax.request ("/", "cmd=Ajax;cmd.function=SorentoLib.Usergroup.List", "data", "POST", false);					
	request.send ();
											
	return request.respons ()["usergroups"];
}
