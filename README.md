# 🏥 MediPlusDB – Sistema de Gestión Médica (MongoDB)
Repositorio oficial para el desarrollo de la **Tarea 4 – Almacenamiento y Consultas
en Big Data**, correspondiente al curso **Big Data – UNAD (2025)**.

Este proyecto implementa una base de datos NoSQL usando **MongoDB**, diseñada para
gestionar pacientes, médicos, citas e historiales médicos dentro de un sistema
clínico denominado **MediPlusDB**.

---

## 📌 1. Objetivo del Proyecto
Diseñar, implementar y consultar una base de datos NoSQL en MongoDB, aplicando
consultas básicas, consultas avanzadas y agregaciones, de acuerdo con la guía
oficial de la Tarea 4 del curso.

---

## 📁 2. Estructura de la Base de Datos

### **Colecciones principales:**

#### **1. pacientes**
```json
{
  "_id": ObjectId(),
  "documento": "1001023949",
  "tipo_documento": "CC",
  "nombre": "Gabriela Castro",
  "fecha_nacimiento": ISODate("1994-03-15"),
  "telefono": "3114578962",
  "correo": "g.castro@mail.com",
  "direccion": "Av 80 #44-12",
  "fecha_registro": ISODate("2024-01-25")
}
#### **2. medicos**

{
  "_id": ObjectId(),
  "nombre": "Dr. Andrés Ramírez",
  "especialidad": "Medicina General",
  "telefono": "3009876543",
  "correo": "andres.ramirez@clinic.com",
  "licencia_profesional": "MP-123456",
  "activo": true
}

#### **3. citas**
```json
{
  "_id": ObjectId(),
  "paciente_id": ObjectId("..."),
  "medico_id": ObjectId("..."),
  "fecha_hora": ISODate("2024-02-10T10:30:00Z"),
  "motivo_consulta": "Chequeo general",
  "estado": "Programada"
}
```
#### **4. historiales_medicos**
```json
{
  "_id": ObjectId(),
  "cita_id": ObjectId(),
  "paciente_id": ObjectId(),
  "medico_id": ObjectId(),
  "diagnostico": "Infección respiratoria",
  "tratamiento": "Antibiótico 7 días",
  "recomendaciones": "Reposo",
  "fecha_registro": ISODate("2024-03-02")
}

