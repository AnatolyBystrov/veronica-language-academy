from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from uuid import uuid4

app = FastAPI()

# Разрешаем фронту подключаться
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Модель студента
class Student(BaseModel):
    id: str
    name: str
    age: int
    level: str
    language: str
    progress: int
    lessonsCount: int
    homeworkPending: int
    parentCode: str
    avatar: str
    recentActivity: str
    nextLesson: str
    email: str
    phone: str
    lessonHistory: List = []
    homework: List = []
    documents: List = []
    joinDate: str

students_db = [
    Student(
        id="123",
        name="Test Student",
        age=12,
        level="A1 Beginner",
        language="English",
        progress=50,
        lessonsCount=3,
        homeworkPending=2,
        parentCode="ABCD1234",
        avatar="👩‍🎓",
        recentActivity="2025-05-30",
        nextLesson="2025-06-01",
        email="parent@example.com",
        phone="+972501234567",
        lessonHistory=[],
        homework=[],
        documents=[],
        joinDate="2025-05-01"
    )
]


@app.get("/students", response_model=List[Student])
def get_students():
    return students_db

@app.post("/students", response_model=Student)
def add_student(student: Student):
    students_db.append(student)
    return student

@app.delete("/students/{student_id}")
def delete_student(student_id: str):
    global students_db
    student = next((s for s in students_db if s.id == student_id), None)
    if student:
        students_db = [s for s in students_db if s.id != student_id]
        return {"message": f"Student {student.name} deleted!"}
    return {"error": "Student not found"}
