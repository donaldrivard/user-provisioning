({
    init : function(component, event, helper) {
        console.log('Init customer search...');
        
    },
    
    
    handleSearchUserInfo : function(component, event, helper) {
        console.log('AccountSearch handleUserInfo Event handled');
        var email =  event.getParam('email');
        component.set("v.email",email);
    },
    
    onSelectChange : function(component, event, helper) {
    	var selected = component.find("selectAccount").get("v.value");
    	console.log('------------------------- ' + selected);
    	var aMap = component.get("v.accountMap");
    	
    	//fire Event
    	 var e = $A.get("e.c:CC_AccountSelectedEvent");
    	 e.setParams({ account: aMap[selected] });
    	 e.fire();		
		 console.log('onSelectChange Event fired ' + selected);
    	
    },

    delayedSearch : function(component, event, helper) {

        var timer = component.get('v.timer');
        var delay = component.get('v.searchDelay');

        // Remove any existing timer
        clearTimeout(timer);

        component.set('v.timer', setTimeout(
            $A.getCallback(function() {
                helper.searchAccounts(component);
            }), delay));
    },

    searchBtnPress : function(component, event, helper) {
        helper.searchCustomers(component);
    },
    
    handleEmailChange : function (component, event, helper) {
    	console.log('Email Change event Caught');
    	var email = event.getParam("value");
    	console.log('New Email ' + email);
    	helper.updateUI(component,email);
    }

    
    
})