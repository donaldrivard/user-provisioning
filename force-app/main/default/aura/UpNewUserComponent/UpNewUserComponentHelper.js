({


	showSpinner : function (component) {
        component.find('spinner').show();
    },

    hideSpinner : function (component) {
        component.find('spinner').hide();
    },
	
		
	
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
	
	showButtons : function(component) {
		$A.util.removeClass(component.find('buttons'), 'slds-hide');
        $A.util.addClass(component.find('buttons'), 'slds-show');
	},
	
	hideButtons : function(component) {
		$A.util.removeClass(component.find('buttons'), 'slds-show');
        $A.util.addClass(component.find('buttons'), 'slds-hide');
	},
	
	showEmailToast : function(component) {
		$A.util.removeClass(component.find('emailalert'), 'slds-notify_container');
      
	},
	
	hideEmailToast : function(component) {
		$A.util.addClass(component.find('emailalert'), 'slds-notify_container');
	},

	

})
