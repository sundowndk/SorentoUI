// -------------------------------------------------------------------------------------------------------------------------
// chooser ([attributes])
// -------------------------------------------------------------------------------------------------------------------------
//
// .getContentElement ()
//
// .getAttribute (string)
// .setAttribute (string, string)
//	
//		title 			get/set
//		buttonLabel		get/set
//		onButton1Click	set
//		onButton2Click	set
//

chooser : function (attributes)
{
	_attributes = attributes;
	_temp = { initialized: false,
			  uiElements: new Array };
				
	setAttributes ();
	construct ();
	init ();

	this.show = functionShow;
	this.hide = functionHide;
	this.dispose = functionDispose;
	
	this.getContentElement = functionGetContentElement;
	
	this.setAttribute = functionSetAttribute;
	this.getAttribute = functionGetAttribute;	

	// ------------------------------------
	// init
	// ------------------------------------		
	function init ()
	{				
	}

	// ------------------------------------
	// construct
	// ------------------------------------	
	function construct ()
	{
		_temp.uiElements.modal = new sorento.console.modal.window (_attributes);		
	
		_temp.uiElements.canvas = new SNDK.SUI.canvas ({appendTo: _temp.uiElements.modal.getContentElement (), width: "600px", height: "400px"});
		_temp.uiElements.container = new SNDK.SUI.container ({title: _attributes.title});
		
		_temp.uiElements.layoutbox1 = new SNDK.SUI.layoutbox ({type: "horizontal"});
		_temp.uiElements.layoutbox1.addPanel ({tag: "panel1", size: "*"});
		_temp.uiElements.layoutbox1.addPanel ({tag: "panel2", size: "55px"});		
	
		_temp.uiElements.layoutbox2 = new SNDK.SUI.layoutbox ({type: "vertical"});
		_temp.uiElements.layoutbox2.addPanel ({tag: "panel1", size: "*"});
		_temp.uiElements.layoutbox2.addPanel ({tag: "panel2", size: "210px"});	
		
		_temp.uiElements.button1 = new SNDK.SUI.button ({label: _attributes.buttonLabel.split ("|")[0], width: "100px", onClick: function () {action ()}});
		_temp.uiElements.button2 = new SNDK.SUI.button ({label: _attributes.buttonLabel.split ("|")[1], width: "100px", onClick: function () {action ()}});	

		_temp.uiElements.canvas.addUIElement (_temp.uiElements.container);
		_temp.uiElements.container.addUIElement (_temp.uiElements.layoutbox1);
	
		_temp.uiElements.layoutbox1.getPanel ("panel2").addUIElement (_temp.uiElements.layoutbox2);
									
		_temp.uiElements.layoutbox2.getPanel ("panel2").addUIElement (_temp.uiElements.button1);
		_temp.uiElements.layoutbox2.getPanel ("panel2").addUIElement (_temp.uiElements.button2);	
	}	
	
	// ------------------------------------
	// setDefaultAttributes
	// ------------------------------------					
	function setAttributes ()
	{
		if (!_attributes) _attributes = new Array ();
		
		if (!_attributes.title) _attributes.title = "";
		
		if (!_attributes.buttonLabel) _attributes.buttonLabel = "|";
	}		
	
	function functionShow ()
	{
		_temp.uiElements.modal.show ();
	}
	
	function functionHide ()
	{
		_temp.uiElements.modal.hide ();
	}
	
	function functionDispose ()
	{
		_temp.uiElements.modal.dispose ();
	}
	
	function functionGetContentElement ()
	{
		return _temp.uiElements.layoutbox1.getPanel ("panel1");
	}
	
	// ------------------------------------
	// getAttribute
	// ------------------------------------						
	function functionGetAttribute (attribute)
	{
		switch (attribute)
		{								
			default:
			{
				throw "No attribute with the name '"+ attribute +"' exist in this object";
			}
		}	
	}
	
	// ------------------------------------
	// setAttribute
	// ------------------------------------						
	function functionSetAttribute (attribute, value)
	{
		switch (attribute)
		{
			default:
			{
				throw "No attribute with the name '"+ attribute +"' exist in this object";
			}
		}	
	}										
}	 


