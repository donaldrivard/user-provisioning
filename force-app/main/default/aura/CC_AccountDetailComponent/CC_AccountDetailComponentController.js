({
    init : function(component, event, helper) {
        var accountId = component.get('v.accountId');
        var account = component.get('v.account');
        
        console.log('Account data ' + account + ' ' + accountId);
        
        if (accountId && accountId != '') {
            //helper.getCustomerData(component);
        }
    },

    updateAccountId : function(component, event, helper) {
        var accountId = component.get('v.accountId');

        if (accountId && accountId != '') {
            //helper.getCustomerData(component);
        }
    }
    
      
    
    
})