public class AccountLookUpController {
 
//This is just a comment to test review Apps
//This is the best way to develop
 @AuraEnabled
    public static List<Account> lookupAccounts(String searchTerms) {
    	System.debug('DON  searchString ' + searchTerms);
		List<Account> accounts = LookupSObjectController.lookupAccounts(searchTerms);
		System.debug('DON  accounts ' + accounts);
		return accounts;	
      	
    }
 
	 @AuraEnabled
    public static Account lookupAccount(String Id) {
    	System.debug('DON  Id ' + Id);
		Account account = LookupSObjectController.lookupAccount(Id);
		System.debug('DON  accounts ' + account);
		return account;	
      	
    }
	 
}