
({
	 
	  init : function(component, event, helper) {
	  
	  },
	  
	  handleClick : function(cmp, event, helper){
	  
	  },
	  
	  onMessageClick : function(cmp,event,helper){
		  helper.hideEmailToast(cmp);
	  },
	  
	  handleBlur : function(cmp, event, helper){
		  var email = cmp.find("useremail").get("v.value");
		  var eComponent = cmp.find("useremail");
		  var validate = helper.validateEmail(email);
		  var name = cmp.find("username");
		 if(validate === true){
			 if (email.endsWith('@salesforce.com') || email.endsWith('@demandware.com')){
				 name.set('v.value',email);
				 helper.hideAccountBrowser(cmp);
			 }else{
				 name.set('v.value','');
				 helper.showAccountBrowser(cmp);
			 }
			 	helper.showButtons(cmp);
		  }else{
			  	eComponent.set('v.value','' );
			  	helper.showEmailToast(cmp);
			  	
		  }
	  },
	 
	 
	 handleAccount : function(component, event, helper) {
        var account = event.getParam('account');
        component.set('v.account', account);
        component.set('v.accountId', account.Id);
    },
    
    onEmailClick : function(cmp, event, helper) {
    		helper.hideEmailToast(cmp)
    	}

})