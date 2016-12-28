public with sharing class UserProvisioningController {
	public UserProvisioningController() {

	}
	
	
 @AuraEnabled
    public static List<Account> lookupAccounts(String searchTerms) {
    	List<Account> accounts = AccountLookUpController.lookupAccounts(searchTerms);
		return accounts;	
    }
 
 @AuraEnabled
    public static Account lookupAccount(String Id) {
		Account account = AccountLookUpController.lookupAccount(Id);
		return account;	
    }
 
@AuraEnabled
    public static User createInternalUser(String accountId, String email, String firstName, String lastName, String profileName ) {
	 		User user = CC_Helper.createNewInternalUser(accountId,email,firstName,lastName,profileName);
			return user;
	}
 	
	
	
}
