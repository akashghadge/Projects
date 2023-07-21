import PyPDF2
import pandas as pd

def extract_table_data(page_text):
    lines = page_text.split('\n')
    table_data = []
    for line in lines:
        columns = line.split('\t')
        
        if len(columns) >= 2:
            table_data.append(columns)
    return table_data

file_path = './num.pdf'
pdf_file = open(file_path, 'rb')

pdf_reader = PyPDF2.PdfReader(pdf_file)

extracted_text = ""
data_rows = []

for page_number in range(len(pdf_reader.pages)):
    page = pdf_reader.pages[page_number]
    page_text = page.extract_text()
    extracted_text += page_text
    lines=page_text.split('\n');
    name=lines[2]
    mname=lines[4]
    # seat number
    prev=""
    seat_no=""
    for line in lines:
        if(prev=="PUN Code"):
            seat_no=line
        prev=line
    seat_no="B"+seat_no[1:]
    data_rows.append([seat_no,name,mname])

pdf_file.close()
if data_rows:
    df = pd.DataFrame(data_rows,columns=['Seat No', 'Name', 'Mother Name'])
    df.to_csv('seat_no.csv', index=False)