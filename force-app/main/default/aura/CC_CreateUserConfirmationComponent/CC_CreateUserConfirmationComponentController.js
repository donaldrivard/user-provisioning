
({
	myAction : function(component, event, helper) {
		
	},
	handleCreateNewUserConfirmationEvent : function (component,event,helper){
    	   console.log('Confirm Com - handleCreateNewUserConfirmationEvent HANDLED ');
    	   var user = event.getParam('User');
    	   console.log('Here is the User ' + user);
    	   console.log('Here is the User Id ' + user.Id);
    	   console.log('Here is the User name ' + user.Name);
    	   console.log('Here is the User name ' + user.Username);
    	   console.log('Here is the User alias ' + user.Alias);
    	   console.log('Here is the User email ' + user.Email);
    	   component.set('v.user',user);
       }
	
})