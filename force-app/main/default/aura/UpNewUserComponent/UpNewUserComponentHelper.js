({
	showAccountBrowser : function(component) {
		$A.util.removeClass(component.find('accounts'), 'slds-hide');
        $A.util.addClass(component.find('accounts'), 'slds-show');
	
        $A.util.removeClass(component.find('accountdetail'), 'slds-hide');
        $A.util.addClass(component.find('accountdetail'), 'slds-show');
	
	},
	
	hideAccountBrowser : function(component) {
		$A.util.removeClass(component.find('accounts'), 'slds-show');
        $A.util.addClass(component.find('accounts'), 'slds-hide');
	
        $A.util.removeClass(component.find('accountdetail'), 'slds-show');
        $A.util.addClass(component.find('accountdetail'), 'slds-hide');
	
	},
	
})