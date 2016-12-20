
({
	showEmailToast : function(component) {
		$A.util.removeClass(component.find('emailalert'), 'slds-notify_container');
      
	},
	
	hideEmailToast : function(component) {
		$A.util.addClass(component.find('emailalert'), 'slds-notify_container');
	},

	validateEmail : function (mail) {  
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))  
		{  
			return (true)  
		}  
			  
			return (false)  
		}  

})