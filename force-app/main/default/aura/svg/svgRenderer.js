({
 render: function(component, helper) {
 //grab attributes from the component markup
	 var classname = component.get("v.class");
	 var xlinkhref = component.get("v.xlinkHref");
	 var ariaHidden = component.get("v.ariaHidden");
 
	 //return an svg element w/ the attributes
	 var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	 svg.setAttribute('class', classname);
	 svg.setAttribute('aria-hidden', ariaHidden);
	 svg.innerHTML = '&amp;amp;amp;amp;lt;use xlink:href="'+xlinkhref+'"&amp;amp;amp;amp;gt;&amp;amp;amp;amp;lt;/use&amp;amp;amp;amp;gt;';
 return svg;
 }
})