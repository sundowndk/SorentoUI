question : function (attributes)
{
	var modal = new sorentoUI.modalWindow (attributes);
	
	var action =	function (result)
			{
				attributes.onDone (result);
				modal.dispose ();
			};
	
	var container = new SNDK.SUI.container ({appendTo: modal.getContentElement (), width: "300px", height: "150px", title: "Question ?"})
	var layoutbox = new SNDK.SUI.layoutbox ({appendTo: container.content (), type: "horizontal", width: "100%", height: "100%"});
	layoutbox.addPanel ({tag: "panel1", size: "*"});
	layoutbox.addPanel ({tag: "panel2", size: "45px"});
	
	var label =  new SNDK.SUI.label ({appendTo: layoutbox.getPanel ("panel1"), text: attributes.text, width: "100%"});
	var button1 = new SNDK.SUI.button ({appendTo: layoutbox.getPanel ("panel2"), width: "100px", label: attributes.buttonLabel.split ("|")[0], onClick: function () {action (1)}});
	var button2 = new SNDK.SUI.button ({appendTo: layoutbox.getPanel ("panel2"), width: "100px", label: attributes.buttonLabel.split ("|")[1], onClick: function () {action (2)}});
	
	SNDK.SUI.init ();
	
	modal.show ();
					
	
//				if (options.buttonText == null)
//				{
//					throw "modalQuestion - buttonText not defined.";
//				}
				
//				var button1text = options.buttonText.split ("|")[0];
//				var button2text = options.buttonText.split ("|")[1];
		
//				if (button1text == "" || button1text == null)
//				{
//					buttontext1 = "_YES_";
//				}
		
//				if (button2text == "" || button2text == null)
//				{
//					buttontext2 = "_NO_";
//				}				

//				// Create MODALWINDOW
//				var modalwindow = new sorentoUI.modalWindow ("Question", options.title);
											
//				// Create MODALWINDOW content.
//				var elements = new Array ();
		
//				// DESCRIPTION
//				modalwindow.addDescription ({text: options.text});												

//				// BUTTON1								
//				var button1onclick = 	function () 
//							{											
//								modalwindow.dispose ();
//
//								if (options.onDone != null)									
//								{
//									setTimeout (function () {options.onDone (1);}, 1);
//								}
//							};
//								
//				modalwindow.addButton ({label: "Add", label: button1text, onClick: button1onclick});							
//
//				// BUTTON2
//				var button2onclick =	function () 
//							{											
//								modalwindow.dispose ();
//
//								if (options.onDone != null)									
//								{
//									setTimeout (function ()	{options.onDone (2);}, 1);
//								}
//							};
//								
//				modalwindow.addButton ({label: "Add", label: button2text, onClick: button2onclick});
//																											
//				modalwindow.show ();	
}	
}	
