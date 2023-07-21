import requests
import pandas as pd

def save_pdf(url, data):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }
    
    response = requests.post(url, data=data, headers=headers,verify=False)
    
    if response.status_code == 200:
        # Check if the response content type is 'application/pdf'
        if response.headers['content-type'] == 'application/pdf':
            # Save the PDF to a file
            file_name=data['SeatNo']+".pdf"
            with open(file_name, 'wb') as file:
                file.write(response.content)
            print("PDF saved as 'result.pdf'.")
        else:
            print("Response is not a PDF.")
    else:
        print("Failed to retrieve data from the URL.")





df = pd.read_csv('seat_no.csv')
for index, row in df.iterrows():
    url_to_scrape = 'https://onlineresults.unipune.ac.in/Result/Dashboard/ViewResult1'
    data_to_send = {
        'PatternID': 'm1BNQI1K4Neq+T7ZlFSbDA==',
        'PatternName': 'yahYElezAOBYysbVmdmCzMxjrTTrU/+4H6fNmt8QED4=',
        'SeatNo': row['Seat No'],
        'MotherName': row['Mother Name'],
    }
    save_pdf(url_to_scrape, data_to_send)