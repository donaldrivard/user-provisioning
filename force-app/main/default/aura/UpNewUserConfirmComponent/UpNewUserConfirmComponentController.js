
({
	  init : function(component,event,helper){
	  
	  },
	  
	  
	  handleConfirmUserInfo : function(component, event, helper) {
        console.log('Confirm User handleUserInfo Event handled');
        var email =  event.getParam('email');
        var firstName = event.getParam('firstName');
        var lastName = event.getParam('lastName');
       
        component.set("v.email",email);
        component.set("v.name",email);
        component.set("v.firstName",firstName);
        component.set("v.lastName",lastName);   
        
        
        $A.util.removeClass(component.find('accountInfo'), 'slds-show');
        $A.util.addClass(component.find('accountInfo'), 'slds-hide');
	
     
       
       
    },
	
	
	handleAccountEvent : function(component, event, helper) {
		 var account = event.getParam('account');
		 
         //set the data to the component
         component.set("v.accountId",account.Id);
         component.set("v.accountName",account.Name);
         component.set("v.accountType",account.RecordType.Name);
         component.set("v.accountInfo",account.Name + ' - ' + account.RecordType.Name);
         
         var email = component.get('v.email');
         
         if(account.RecordType.Name == 'Customer'){
        	 component.set("v.name",email + '.dw');
         }else{
         	 component.set("v.name",email + '.dwp');	
         	}
         
        $A.util.removeClass(component.find('accountInfo'), 'slds-hide');
        $A.util.addClass(component.find('accountInfo'), 'slds-slow');
	
       
	}
})