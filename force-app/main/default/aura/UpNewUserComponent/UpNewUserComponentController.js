
({
	 
	  init : function(component, event, helper) {
	  
	  },
	  
	  handleBlur : function(cmp, event, helper){
		  var email = cmp.find("useremail").get("v.value");
		  var name = cmp.find("username");
		  name.set('v.value',email);
		  
		  if (email.endsWith('@salesforce.com') || email.endsWith('@demandware.com')){
			  helper.hideAccountBrowser(cmp);
		  }else{
			  helper.showAccountBrowser(cmp);
		  }
		 
		  
		  
	  },
	 
	 
	 handleAccount : function(component, event, helper) {
        console.log('UpNewUserComponent:handleAccountSelected:');
        var account = event.getParam('account');
        console.log('UpNewUserComponent account: ', account);
        console.log('UpNewUserComponent account ID : ', account.Id);

        component.set('v.account', account);
        component.set('v.accountId', account.Id);
    }

})