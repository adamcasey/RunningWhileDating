# Following the https://requests-oauthlib.readthedocs.io/en/latest/oauth2_workflow.html#web-application-flow setup to
# request/receive an access token from the Strava API

client_id = r'your_client_id'
client_secret = r'your_client_secret'
redirect_uri = 'https://your.callback/uri'

# User authorization through redirection. First we will create an authorization url 
# from the base URL given by the provider and the credentials previously obtained. 
# In addition most providers will request that you ask for access to a certain scope. 
# In this example we will ask Google for access to the email address of the user and the users profile.
# Note that these are Google specific scopes they use in their example
scope = ['https://www.googleapis.com/auth/userinfo.email',
          'https://www.googleapis.com/auth/userinfo.profile']
oauth = OAuth2Session(client_id, redirect_uri=redirect_uri, scope=scope)
authorization_url, state = oauth.authorization_url(
        'https://accounts.google.com/o/oauth2/auth',
        # access_type and prompt are Google specific extra
        # parameters.
        access_type="offline", prompt="select_account")
        
print 'Please go to %s and authorize access.' % authorization_url
authorization_response = raw_input('Enter the full callback URL')       

# Fetch an access token from the provider using the authorization code obtained during user authorization.
token = oauth.fetch_token(
        'https://accounts.google.com/o/oauth2/token',
        authorization_response=authorization_response,
        # Google specific extra parameter used for client
        # authentication
        client_secret=client_secret)
        
# Access protected resources using the access token you just obtained. For example, get the users profile info. 
r = oauth.get('https://www.googleapis.com/oauth2/v1/userinfo')
# Enjoy =)
