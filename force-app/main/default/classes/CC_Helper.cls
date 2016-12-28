public with sharing class CC_Helper {
	
	public CC_Helper() {

	}
	
	public static User createNewInternalUser(String accountId, String email, String firstName, String lastName, String profileName ) {
			Profile profile = getProfileByName(profileName); 
			System.debug('DON ' + profile);
			Id profileId = null;
			User u = new user();
			//TimeZoneSidKey, LocaleSidKey, EmailEncodingKey, LanguageLocaleKey
			try{
				if(profile != null){
						profileId = profile.Id;
						u.FirstName = firstName;
						u.LastName = lastName;
						u.ProfileID = profileId;
						u.alias = createAlias(firstName,lastName);
						u.Email = email;
						u.UserName = email;
						u.TimeZoneSidKey = 'America/New_York';
    					u.EmailEncodingKey = 'UTF-8';
     					u.LanguageLocaleKey = 'en_US';
     					u.LocaleSidKey = 'en_US';
						insert u;
				}else{
					return null;
				}	
			
			
			}catch(Exception e){
				System.debug('createNewInternalUser Exception ' + e.getMessage());
				return null;
			}
			
						
			return u;
	}
	
	public static Profile getProfileByName(String name){
		Profile profile;
			try{		
					profile = [SELECT Id FROM Profile WHERE Name =: name];
				}catch (Exception e){
					profile = null;
				}
		return profile;
	}
	
	public static String createAlias(String firstName, String lastName){
			String alias = firstName.substring(0,1);
			if(lastName.length() > 7){
				alias = alias + lastName.subString(0,8);	
			}else{
				alias = alias + lastName;
			}
		return alias;
	}	
}	
