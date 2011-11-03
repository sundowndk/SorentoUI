usergroupChooser : function ()
{
	var beforeshow = 	function (elements)
						{
							elements.usergroups.setItems (sorento.usergroup.list ());
						};
						
	var aftershow =		function ()
						{
						
						};
	

	var elements = sorento.console.modal.chooser ({title: "Choose usergroup", url: "/console/xml/chooser/usergroup.xml", beforeShow: beforeshow});
				
}	


