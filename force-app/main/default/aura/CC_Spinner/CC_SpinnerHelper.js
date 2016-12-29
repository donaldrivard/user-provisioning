({
    show : function(component) {
    	console.log('show spinner');
        $A.util.removeClass(component.find("spinner"), "slds-hide");
        component.set('v.isVisible', true);
    },

    hide : function(component) {
    console.log('hiding spinner');
        $A.util.addClass(component.find("spinner"), "slds-hide");
        component.set('v.isVisible', false);
    }
})