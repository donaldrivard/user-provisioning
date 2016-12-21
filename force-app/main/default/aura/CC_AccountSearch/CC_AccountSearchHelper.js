({
    searchAccounts : function(component) {
        // Validate input
        var searchTerms = component.find('searchBox').get('v.value');
        console.log('Search Terms = ' + searchTerms);
        

        if (searchTerms === '') {
            // Set empty results
            this.setResults(component, [], 0);
        } else {
            // Get customers
            this.getAccounts(component);
        }
    },

    showSpinner : function (component) {
        component.find('spinner').show();
    },

    hideSpinner : function (component) {
        component.find('spinner').hide();
    },

 
    
    getAccounts : function(component) {

        // Search params
    	var searchTerms = component.find('searchBox').get('v.value');
        // Search method
        var action = component.get('c.lookupAccounts');
        action.setParams({
            "searchTerms" : searchTerms
        
        });
        action.setCallback(this, function(response) {
            if (component.isValid() && response.getState() ==='SUCCESS') {
                var results = response.getReturnValue();
                // Set the results returned from Demandware
                this.setResults(component, results,results.length );
            } else {
                console.log('Error: ', response.getError());
            }

            // Hide spinner to reveal data
            this.hideSpinner(component);
        });

        // Show spinner to hide data
        this.showSpinner(component);

        $A.enqueueAction(action);
    },

    setResults : function(component, accounts, resultSize) {

        // Set the result size
        console.log('Found ' + resultSize + ' results');
        console.log('Found ' + accounts);

        // Set the customers
        component.set('v.accounts', accounts);
        
        var accountMap = new Map();
       
        
        for(var i=0;i<resultSize;i++){
        	accountMap[accounts[i].Id] = accounts[i];
        }
        component.set('v.accountMap', accountMap);
    },
    
     updateUI : function(component, email) {
    	 
    	if(email != 'undefined'){	
    	 if((email.endsWith('@salesforce.com')) || (email.endsWith('@demandware.com')) ){
    		 $A.util.addClass(component.find('internal'), 'slds-show');
    		 $A.util.removeClass(component.find('internal'), 'slds-hide');
    		 $A.util.addClass(component.find('external'), 'slds-hide');
    		 $A.util.removeClass(component.find('external'), 'slds-show');
    	 }else{
    		 $A.util.addClass(component.find('external'), 'slds-show');
    		 $A.util.removeClass(component.find('external'), 'slds-hide');
    		 $A.util.addClass(component.find('internal'), 'slds-hide');
    		 $A.util.removeClass(component.find('internal'), 'slds-show');
    	 }
    }	 
     }
     
})