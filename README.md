# 🏥 MediPlusDB - Sistema de Gestión Médica (MongoDB)
Repositorio oficial para el desarrollo de la **Tarea 4 - Almacenamiento y Consultas
en Big Data**, correspondiente al curso **Big Data - UNAD (2025)**.

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


---

## 📚 4. Consultas Implementadas (Lista Real del Proyecto)

A continuación, las consultas incluidas en el repositorio:

### 🔎 **Búsquedas específicas**
- `buscar_paciente_documento.js`  
- `buscar_diagnósticos_que_contengan_dolor.js`  
- `historial_x_documento.js`  
- `pacientes_nombre_empieza_M.js`

### 📆 **Consultas relacionadas con citas**
- `cantidad_citas_x_medico.js`  
- `citas_entre_fechas.js`  
- `citas_por_estado.js`  
- `citas_programadas_por_documento.js`  

### 🧠 **Consultas con agregaciones**
- `diagnosticos_mas_comunes.js`  
- `medicos_especialidad.js`  
- `medicos_registrados_2024.js`  
- `pacientes_registrados_2024.js`

Todas estas consultas están desarrolladas usando:

- Operadores: `$regex`, `$gte`, `$lte`, `$and`, `$or`, `$in`
- Agregaciones con `$group`, `$match`, `$sort`, `$count`

---

## 🚀 5. Cómo Ejecutar las Consultas

### 1. Abrir MongoDB Compass o Mongo Shell  
### 2. Copiar el contenido del archivo deseado  
### 3. Ejecutar sobre la base de datos:  


git clone https://github.com/usuario/MediPlusDB.git


2. Abrir MongoDB Compass

Importar la carpeta /data si se incluye el JSON exportado.

3. Ejecutar consultas

Usar Comandos desde Compass o Mongo Shell.
### 4. Ejecutar la consulta.

---

## 🖥️ 6. Caso de Uso General

El sistema **MediPlusDB** permite:

- Registrar pacientes y médicos  
- Programar citas  
- Registrar diagnósticos e historiales  
- Consultar información clínica mediante filtros avanzados  
- Generar estadísticas de atención  
- Detectar tendencias de salud  

---

## 🧑‍💻 7. Autores
Proyecto realizado por el grupo colaborativo de la **UNAD - Curso Big Data 2025**.

---

## 📄 8. Licencia
Uso académico para fines de la Tarea 4.
