import requests
import json
from pprint import pprint

'''
First .py file to test making API requests against the Strava API without using Swagger
'''

def getAuthenticatedAthlete_general(base_url, access_token):

	try:
		token_temp = access_token
		head = {'content-type' : 'application/json',
				'Authorization': 'Bearer {}'.format(token_temp)}
		response = requests.get(base_url, headers = head)
		#pprint(response)
		#print (response.status_code)

		# Return the json response
		if (response.status_code == 200):
			return(json.loads(response.content.decode('utf-8')))
		else:
			return (None)

	except ApiException as e:
		print("Exception when calling getLoggedInAthlete: %s\n" % e)

if __name__ == "__main__":

	myToken = "e077cabe5c6542f38742c3b2cd165099947084a2"
	myUrl = 'https://www.strava.com/api/v3/athlete'
	# Make an initial API request
	api_request_response = getAuthenticatedAthlete_general(myUrl, myToken)

	# Upon successful API request
	for k, v in api_request_response.items():
		# Print the key value pairs that were returned
		print("{0} : {1}".format(k,v))