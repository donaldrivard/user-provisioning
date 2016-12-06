
({
	 handleAccount : function(component, event, helper) {
        console.log('CC_AccountBrowser:handleAccountSelected:');
        var account = event.getParam('account');
        console.log('account: ', account);
        console.log('account ID : ', account.Id);

        component.set('v.account', account);
        component.set('v.accountId', account.Id);
    }

})