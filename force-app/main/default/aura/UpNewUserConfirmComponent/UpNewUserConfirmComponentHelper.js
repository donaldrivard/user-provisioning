
({
	
	fireCreateNewUserConfirmationEvent : function (component,event){
	
	
	},
	
	helperMethod : function() {
		
	},
	
	showSpinner : function (component) {
        component.find('userspinner').show();
    },

    hideSpinner : function (component) {
        component.find('userspinner').hide();
    },
	
	
	createNewInternalUser : function(component) {
		var newUserConfirmationEvent = $A.get("e.c:CC_CreateNewUserConfirmationEvent");
        // params
    	var firstName = component.get('v.firstName');
    	var lastName = component.get('v.lastName');
    	var email = component.get('v.email');
    	var profileName = 'NewUserProfile';
    	// method
        var action = component.get('c.createInternalUser');
        action.setParams({
            "email" : email,
            "firstName": firstName,
            "lastName" : lastName,
            "profileName" : profileName
         
        });
        action.setCallback(this, function(response) {
            	
            if (component.isValid() && response.getState() ==='SUCCESS') {
                var results = response.getReturnValue();
                if(results != null){
                	console.log('User Created!!!' + results);
               		newUserConfirmationEvent.setParam("User", results);
               		newUserConfirmationEvent.fire();
                	}
               
            	} else {
                    var errors = response.getError();
            		console.log('Error: ', errors[0].message);
            		component.set('v.errorMessage',errors[0].message);
            		
            		$A.util.removeClass(component.find('eMessage'), 'slds-hide');
            		$A.util.addClass(component.find('eMessage'), 'slds-show');
            		
            		
             }

            // Hide spinner to reveal data
            this.hideSpinner(component);
        });

        // Show spinner to hide data
        this.showSpinner(component);

        $A.enqueueAction(action);
    },

	
})