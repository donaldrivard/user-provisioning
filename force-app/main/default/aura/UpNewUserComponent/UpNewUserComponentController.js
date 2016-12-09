
({
	 handleAccount : function(component, event, helper) {
        console.log('UpNewUserComponent:handleAccountSelected:');
        var account = event.getParam('account');
        console.log('UpNewUserComponent account: ', account);
        console.log('UpNewUserComponent account ID : ', account.Id);

        component.set('v.account', account);
        component.set('v.accountId', account.Id);
    }

})