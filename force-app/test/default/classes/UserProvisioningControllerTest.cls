@isTest
public with sharing class UserProvisioningControllerTest {
	
	public UserProvisioningControllerTest() {

	}
	
	
	 static testMethod void testInternalUserCreation(){
		Account account = new Account(Name='TestAccount');
		insert account;
		
		System.assert(account.Id !=  null);
		
		Test.startTest();
			User user = UserProvisioningController.createInternalUser(account.Id, 'foo@bar.com','foo','bar', 'NewUserProfile' );	
		Test.stopTest();
		
		System.assert(user !=  null);
	}	
		
}
