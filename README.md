# Library Management Chatbot

This repository contains the code for a Library Management Chatbot. The chatbot is built using Colab, Streamlit, and various machine learning and natural language processing libraries. It is designed to answer queries related to a library's book collection.

## Features

- Uses Streamlit for the web interface.
- Integrates with various libraries for natural language processing and machine learning.
- Loads and processes library book data from a CSV file.
- Utilizes embeddings and vector stores for efficient document retrieval.
- Supports both HuggingFace and GPT-4All embeddings.
- Implements a question-answering system using LangChain and Groq.

## Installation

To run this project, you need to have the following packages installed:


!pip install streamlit pyngrok faiss-cpu gpt4all groq huggingface-hub langchain langchain-community langchain-core langchain-groq langchain-openai langchain-text-splitters langserve langsmith sentence-transformers tokenizers transformers uvicorn unstructured
## Running the Application
## Step 1: Clone the Repository
  git clone https://github.com/yourusername/ChatbotforLMS.git
  cd ChatbotforLMS
## Step 2: Prepare the Environment
Ensure all required packages are installed by running:
  pip install -r requirements.txt
## Step 3: Create the Streamlit App
The main application code is located in app.py. You can run this file using Streamlit:
  streamlit run app.py
## Step 4: Access the Application
To access the application locally, you can use the following command with localtunnel to expose your local server to the internet:
  streamlit run app.py & npx localtunnel --port 8501
Copy the tunnel URL provided by localtunnel and open it in your web browser.

File Structure
app.py: The main application file.
requirements.txt: List of dependencies required to run the application.
Usage
Load Documents: The chatbot loads library book data from a CSV file located at /content/sample_data/final_library_books.csv.
Embedding and Vector Store: The data is processed using HuggingFace and GPT-4All embeddings and stored in a FAISS vector store for efficient retrieval.
Question-Answering: Users can input queries related to the library books, and the chatbot will provide answers based on the context of the documents.
Environment Variables
The application uses a Groq API key for the language model. Ensure you set the GROQ_API_KEY environment variable in your Streamlit Cloud settings.



Acknowledgments
Streamlit
LangChain
Groq
HuggingFace
