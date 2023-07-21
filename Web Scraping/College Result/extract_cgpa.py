import os
import PyPDF2
import re
import pandas as pd

def extract_text_from_pdf(file_path):
    with open(file_path, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        text = ''
        for page in pdf_reader.pages:
            text += page.extract_text()
    return text

# Get the current directory where the Python script is located
current_directory = os.getcwd()

# List all PDF files in the current directory
pdf_files = [file for file in os.listdir(current_directory) if file.endswith('.pdf')]


def extract_cgpa(text):
    # Use regular expression to find the CGPA pattern
    pattern = r"CGPA\s*:\s*(\d+\.\d+)"  # Assuming the CGPA is a floating-point number
    match = re.search(pattern, text, re.IGNORECASE)
    if match:
        cgpa = match.group(1)
        return float(cgpa)
    else:
        return None

def extract_sgpa(text):
    # Use regular expression to find the CGPA pattern
    pattern = r'SGPA\s*:-\s*(\d+\.\d+)'  # Assuming the CGPA is a floating-point number
    match = re.search(pattern, text, re.IGNORECASE)
    if match:
        cgpa = match.group(1)
        return float(cgpa)
    else:
        return None

# Loop through each PDF file and extract data
cgpas=[]
sgpas=[]
for pdf_file in pdf_files:
    pdf_path = os.path.join(current_directory, pdf_file)
    extracted_text = extract_text_from_pdf(pdf_path)
    
    # Process the extracted text from each PDF here
    # print(f"Text extracted from {pdf_file}:")
    cgpa=extract_cgpa(extracted_text)
    sgpa=extract_sgpa(extracted_text)
    cgpas.append(cgpa)
    sgpas.append(sgpa)

# save to the pdf
df = pd.read_csv('seat_no.csv')
df['SGPA']=sgpas
df['CGPA']=cgpas

df.to_csv('final.csv', index=False)