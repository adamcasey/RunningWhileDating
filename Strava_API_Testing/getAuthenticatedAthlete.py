import requests
import json

#http GET "https://www.strava.com/api/v3/athlete" "Authorization: Bearer 3c349a3dbdd881ad4b8bca00c4056c91ba085a2a"

#r = requests.get('https://www.strava.com/api/v3/athlete', headers={'Authorization: Bearer 3c349a3dbdd881ad4b8bca00c4056c91ba085a2a'})

myToken = "3c349a3dbdd881ad4b8bca00c4056c91ba085a2a"
myUrl = 'https://www.strava.com/api/v3/athlete'
payload = {'Authorization': 'Bearer {}'.format(myToken)}
head = {'content-type' : 'application/json'}
response = requests.get(myUrl, data = json.dumps(payload), headers=head)

#response = requests.post(myUrl, data=json.dumps(payload), headers = header)


#print (r.status_code)
print (response.status_code)


# from __future__ import print_function
# import time
# import swagger_client
# from swagger_client.rest import ApiException
# from pprint import pprint

# # Configure OAuth2 access token for authorization: strava_oauth
# swagger_client.configuration.access_token = 'YOUR_ACCESS_TOKEN'

# # create an instance of the API class
# api_instance = swagger_client.AthletesApi()

# try: 
#     # Get Authenticated Athlete
#     api_response = api_instance.getLoggedInAthlete()
#     #pprint(api_response)
# except ApiException as e:
#     print("Exception when calling AthletesApi->getLoggedInAthlete: %s\n" % e)