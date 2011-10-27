init : function (attributes)
{
	SNDK.includeJS ({url: UI.snapIn.url + attributes.name.toLowerCase ()});		
	UI.snapIn[attributes.name].init (attributes);
}