import pandas as pd

input_file = 'final.csv'
output_file = 'final.xlsx'

df = pd.read_csv(input_file)

df.to_excel(output_file, index=False)