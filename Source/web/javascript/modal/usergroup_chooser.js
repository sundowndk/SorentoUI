usergroupChooser : function (attributes)
{
	var chooser = new sorento.console.modal.chooser ({title: "Choose usergroup", buttonLabel: "Ok|Cancel"});
	
	var elements = SNDK.SUI.builder.construct ({URL: "/console/xml/chooser/usergroup.xml", appendTo: chooser.getContentElement ()});		
	elements.usergroups.setItems (sorento.usergroup.list ());
						
	SNDK.SUI.init ();
	
	chooser.show ();

//	var beforeshow = 	function (elements)
//						{
//							elements.usergroups.setItems (sorento.usergroup.list ());
//						};
						
//	var aftershow =		function ()
//						{
						
//						};
	




	//var elements = sorento.console.modal.chooser ({title: "Choose usergroup", url: "/console/xml/chooser/usergroup.xml", beforeShow: beforeshow});
				
}	


