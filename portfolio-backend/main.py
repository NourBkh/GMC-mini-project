from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import os

app =  FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all origins for now
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/")
def read_root():
    return {"message": "ello from Nour backend!"}

@app.get("/about")
def about():
    return {"message": "This is your DevOps portfolio API"}

@app.get("/download-cv")
def download_cv():
    filepath = os.path.join("files","nour-benkhairia-cv.pdf")
    return FileResponse(
        path=filepath,
        filename="nour-benkhairia-cv.pdf", 
        media_type='application/pdf'
        )
    