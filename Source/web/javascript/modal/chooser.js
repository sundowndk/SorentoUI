chooser : function (attributes)
{
	var modal = new sorento.console.modal.window (attributes);
	
	var action = function ()
	{
		modal.dispose ();	
	}
	
	var canvas = new SNDK.SUI.canvas ({appendTo: modal.getContentElement (), width: "600px", height: "400px"});
			
	var container = new SNDK.SUI.container ({title: attributes.title});
			
	var layoutbox1 = new SNDK.SUI.layoutbox ({type: "horizontal"});
	layoutbox1.addPanel ({tag: "panel1", size: "*"});
	layoutbox1.addPanel ({tag: "panel2", size: "55px"});

	var layoutbox2 = new SNDK.SUI.layoutbox ({type: "vertical"});
	layoutbox2.addPanel ({tag: "panel1", size: "*"});
	layoutbox2.addPanel ({tag: "panel2", size: "210px"});
													
			
	var button1 = new SNDK.SUI.button ({label: attributes.buttonLabel, width: "100px", onClick: function () {action ()}});
	var button2 = new SNDK.SUI.button ({label: attributes.buttonLabel, width: "100px", onClick: function () {action ()}});
															
	canvas.addUIElement (container);
	container.addUIElement (layoutbox1);
			
	layoutbox1.getPanel ("panel2").addUIElement (layoutbox2);			
									
	layoutbox2.getPanel ("panel2").addUIElement (button1);
	layoutbox2.getPanel ("panel2").addUIElement (button2);
	
	var elements = SNDK.SUI.builder.construct ({URL: attributes.url, appendTo: layoutbox1.getPanel ("panel1")});
	
	SNDK.SUI.init ();
	
	if (attributes.beforeShow != null)
	{
		attributes.beforeShow (elements);
	}
	
	
	modal.show ();	

	
	return elements;
}	 


