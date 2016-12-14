({
    init : function(component, event, helper) {
        console.log('Init customer search...');
    },
    
    onSelectChange : function(component, event, helper) {
    	var selected = component.find("selectAccount").get("v.value");
    	console.log('------------------------- ' + selected.Name);
    	component.set('v.selectedAccount', selected);
    	component.set('v.selectedAccountId', selected.Id);
    	//do something else
    	var e = component.getEvent('accountSelected');
        e.setParams({ account: selected });
        e.fire();
        console.log('Event fired ' + selected.Name);
    	
    
    
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

    previousBtnPress : function(component, event, helper) {
        helper.previousPage(component);
    },

    nextBtnPress : function(component, event, helper) {
        helper.nextPage(component);
    },

    accountSelectPress : function(component, event, helper) {

        // NOTE: This data comes from a implicit relationship between passing this method to the DataButton
        // as the 'press' event, similar to how a ui:button works
        console.log('event ' + event)
        var account = event.getParam('data');
        console.log('Account Selected Pressed ' + account)

        // Set customer data
        component.set('v.selectedAccountId', account.Id);
        console.log('Account ID Selected Pressed ' + account.Id);
        component.set('v.selectedAccount', account);
        component.set('v.selectedAccount name', account.Name);

        // Fire notification
        var e = component.getEvent('accountSelected');
        console.log('E = ' + e);
        
        e.setParams({ account: account });
        
        e.fire();
        console.log('Event fired ' + account);
    }
})