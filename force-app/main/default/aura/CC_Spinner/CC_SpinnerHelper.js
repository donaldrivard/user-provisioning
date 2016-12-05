({
    show : function(component) {
        $A.util.removeClass(component.find("spinner"), "slds-hide");
        component.set('v.isVisible', true);
    },

    hide : function(component) {
        $A.util.addClass(component.find("spinner"), "slds-hide");
        component.set('v.isVisible', false);
    }
})