public class AccountLookUpController {
 

 @AuraEnabled
    public static List<Account> lookupAccounts(String searchTerms) {
    	System.debug('DON  searchString ' + searchTerms);
		List<Account> accounts = LookupSObjectController.lookupAccounts(searchTerms);
		System.debug('DON  accounts ' + accounts);
		return accounts;	
      	
    }
 
 
}