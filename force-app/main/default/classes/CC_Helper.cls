public with sharing class CC_Helper {
	
	public CC_Helper() {

	}
	public static User getNewUserFields(String Id){
			User user;
			System.debug('Getting user info');
			try{
					user = [SELECT UserName,Email FROM User WHERE Id =: Id];	
				}catch (System.QueryException e){
					System.debug('ERROR ' + e);
					throw new AuraHandledException('User Id ' + Id + ' not found');
				}
			System.debug('Got user info ' + user);
		 	return user;
		
	}
	public static User createNewInternalUser(String email, String firstName, String lastName, String profileName ) {
			Profile profile = getProfileByName(profileName); 
			Id profileId = null;
			User u;
			//TimeZoneSidKey, LocaleSidKey, EmailEncodingKey, LanguageLocaleKey
			try{
				if(profile != null){
						u = new user();
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
						System.debug('After insert ' + u);
				}else{
					throw new AuraHandledException('Profile ' + profileName + ' not found');
				}	
			
			
			}catch(Exception e){
				throw new AuraHandledException(e.getMessage());
			}
			return u;
	}
	
	public static Profile getProfileByName(String name){
		Profile profile;
			try{
					profile = [SELECT Id FROM Profile WHERE Name =: name];
				}catch (System.QueryException e){
					throw new AuraHandledException('Profile ' + name + ' not found');
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
