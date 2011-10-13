question : function (attributes)
{
	var modal = new sorento.console.modal.window (attributes);
	
	var action =	function (result)
					{
						modal.dispose ();
						attributes.onDone (result);
						
					};

	var canvas = new SNDK.SUI.canvas ({appendTo: modal.getContentElement (), width: "600px", height: "200px"});
			
	var container = new SNDK.SUI.container ({title: "Question ?"});
			
	var layoutbox1 = new SNDK.SUI.layoutbox ({type: "horizontal"});
	layoutbox1.addPanel ({tag: "panel1", size: "*"});
	layoutbox1.addPanel ({tag: "panel2", size: "55px"});

	var layoutbox2 = new SNDK.SUI.layoutbox ({type: "vertical"});
	layoutbox2.addPanel ({tag: "panel1", size: "*"});
	layoutbox2.addPanel ({tag: "panel2", size: "210px"});
												
	var label = new SNDK.SUI.label ({text: attributes.text});
			
	var button1 = new SNDK.SUI.button ({label: attributes.buttonLabel.split ("|")[0], width: "100px", onClick: function () {action (1)}});
	var button2 = new SNDK.SUI.button ({label: attributes.buttonLabel.split ("|")[1], width: "100px", onClick: function () {action (2)}});			
															
	canvas.addUIElement (container);
	container.addUIElement (layoutbox1);
			
	layoutbox1.getPanel ("panel1").addUIElement (label);
	layoutbox1.getPanel ("panel2").addUIElement (layoutbox2);			
									
	layoutbox2.getPanel ("panel2").addUIElement (button1);
	layoutbox2.getPanel ("panel2").addUIElement (button2);
			
	SNDK.SUI.init ();
	
	modal.show ();
}	
