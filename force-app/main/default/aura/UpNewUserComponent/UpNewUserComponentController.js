
({
	 
	  init : function(component, event, helper) {
	  	
	  },
	  
	   
	  handleUserInfo : function(component, event, helper) {
        var email =  event.getParam('email');
        component.set("v.email",email);
       },
	
       handleCreateNewUserConfirmationEvent : function (component,event,helper){
    	   console.log('UpNewUserhandleCreateNewUserConfirmationEvent HANDLED ');
    	  component.find("wizardProcess").setStep(3);
       },
       
       
    
      newStep : function(component, event, helper) {
        var newStep = event.getParams().newStep; 
        console.log('newStep 1 ' + newStep);
        
        if(newStep == 3){
        		helper.fireCreateNewUserEvent(component,event);
        	}else{
        		component.find("wizardProcess").setStep(newStep);
        }
    },
    
    create : function(component,event,helper){
    	console.log('creating the User');
    },
    cancel : function(component, event, helper) {
        //reset v.body to trigger rerender 
        //to reload the lightning app page
        //or you can reset the wizard component by calling
        //component method  setStep directly
        component.set("v.body", component.get("v.body"));
        
    },
    finish : function(component, event, helper) {
        component.find("wizardProcess").setStep(0);
    },
    
   	

})