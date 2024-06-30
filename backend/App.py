# # -*- coding: utf-8 -*-
# """LibraryManagementChatbot.ipynb

# Automatically generated by Colab.

# Original file is located at
#     https://colab.research.google.com/drive/1bApT9APVRY4t57nfbmI7eqd72cVw1BFX
# """

# !pip install streamlit pyngrok faiss-cpu gpt4all groq huggingface-hub langchain langchain-community langchain-core langchain-groq langchain-openai langchain-text-splitters langserve langsmith sentence-transformers tokenizers transformers uvicorn

# # Commented out IPython magic to ensure Python compatibility.
# # %%writefile app.py



# ! pip install streamlit -q

# !wget -q -O - ipv4.icanhazip.com

# !pip install unstructured

# ! streamlit run app.py & npx localtunnel --port 8501

import os
import streamlit as st
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceBgeEmbeddings, GPT4AllEmbeddings
from langchain_community.document_loaders.csv_loader import UnstructuredCSVLoader
from langchain.prompts import PromptTemplate
from langchain.chains import RetrievalQA
from langchain_groq import ChatGroq
import numpy as np
import gdown
import pandas as pd

# file_id=https://drive.google.com/file/d/1bS1i_oboxPfEX-j7fnst3YuOVSw0kDo-/view?usp=sharing
#url=f'https://drive.google.com/file/d/1bS1i_oboxPfEX-j7fnst3YuOVSw0kDo-/view?usp=sharing'
#output='file.csv'
#gdown.download(url, output, quiet=False)

#data = pd.read_csv(url)

# Load your documents
loader = UnstructuredCSVLoader(
    file_path="final_library_books.csv", mode="elements"
 )
docs = loader.load()
text_documents = loader.load()
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=500)
documents = text_splitter.split_documents(text_documents)

huggingface_embeddings = HuggingFaceBgeEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2",
    model_kwargs={'device':'cpu'},
    encode_kwargs={'normalize_embeddings':True}
)

model_name = "all-MiniLM-L6-v2.gguf2.f16.gguf"
gpt4all_kwargs = {'allow_download': 'True'}
embeddings = GPT4AllEmbeddings(
    model_name=model_name,
    gpt4all_kwargs=gpt4all_kwargs
)

vectorstore = FAISS.from_documents(documents, huggingface_embeddings)
db = FAISS.from_documents(documents, GPT4AllEmbeddings(model_name='all-MiniLM-L6-v2.gguf2.f16.gguf'))

prompt_template = """
Use the following piece of context to answer the question asked.
Please try to provide the answer only based on the context

{context}
Question:{question}
"""

prompt = PromptTemplate(template=prompt_template, input_variables=["context", "question"])

groq_api_key = os.getenv("GROQ_API_KEY")
llm = ChatGroq(groq_api_key=groq_api_key, model_name="gemma-7b-it")

retriever = vectorstore.as_retriever(search_type="similarity", search_kwargs={"k":16})

retrievalQA = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=retriever,
    return_source_documents=True,
    chain_type_kwargs={"prompt":prompt}
)

# Streamlit app
st.title("Your Own AI based Librarian!!")

query = st.text_input("Enter your query:")
if query:
    result = retrievalQA.invoke({"query":query})
    st.write(result['result'])
