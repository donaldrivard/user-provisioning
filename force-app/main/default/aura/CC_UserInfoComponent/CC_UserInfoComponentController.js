
({
  handleBlur : function(cmp, event, helper){

		  var email = cmp.find("useremail").get("v.value");
		  var firstName = cmp.find("firstName").get("v.value");
		  var lastName = cmp.find("lastName").get("v.value");
		  var eComponent = cmp.find("useremail");
		  var validate = helper.validateEmail(email);

		  if(validate === true){
			   console.log('Validated Calling c:CC_UserInfoEvent' )
			   var e = $A.get("e.c:CC_UserInfoEvent");
			   e.setParams({ email: email, firstName: firstName, lastName: lastName });
			   e.fire();		
			   console.log('Validated Called c:CC_UserInfoEvent' + e )
		  	}else{
			  	eComponent.set('v.value','' );
			  	helper.showEmailToast(cmp);
		  }
	  },
	
	   onEmailClick : function(cmp, event, helper) {
    		helper.hideEmailToast(cmp)
    	}
	  
})