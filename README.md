# 📚 Student Module – CRUD Practice (NestJS)

## 📌 Descripción

Este proyecto es un **módulo CRUD completo de gestión de estudiantes**, desarrollado como **práctica técnica**, con el objetivo de demostrar el uso de **NestJS** aplicando **arquitectura hexagonal (Ports & Adapters)** y **principios de Domain Driven Design (DDD)**.

Aunque el módulo implementa un CRUD completo, el foco principal está en:

- Arquitectura y separación de responsabilidades  
- Modelado correcto del dominio  
- Organización de carpetas  
- Flujo claro desde la capa HTTP hasta el dominio  

---

## 🎯 Alcance del módulo

El módulo cubre un **CRUD completo de estudiantes**, pensado para ser entendible, mantenible y defendible en una entrevista técnica.

### Funcionalidades incluidas
- Crear estudiantes
- Obtener un estudiante por id
- Listar estudiantes
- Actualizar estudiantes
- Eliminar (desactivar) estudiantes
- Modelado de la entidad `Student`
- Casos de uso independientes
- Repositorio en memoria (mock) intercambiable

### Fuera de alcance (a propósito)
- Persistencia real (ORM / Base de datos)
- Autenticación y autorización
- Frontend
- Manejo avanzado de permisos
- Integraciones externas

---

## 🧠 Arquitectura

El módulo sigue una **arquitectura hexagonal con principios de DDD**, donde el dominio es el centro del sistema y la infraestructura es un detalle de implementación.

### Capas principales
- **Dominio**: entidades, reglas de negocio y puertos
- **Aplicación**: casos de uso del CRUD
- **Infraestructura**: controllers HTTP y repositorios concretos
- **Shared**: DTOs y utilidades compartidas

### Principios aplicados
- Dependency Inversion
- Separation of Concerns
- Ports & Adapters
- Domain-first design
- Clean Architecture

---
## 📂 Descripción por capa

### `entities/`
Contiene las **entidades del dominio**, libres de dependencias de framework o infraestructura.  
Representan los conceptos principales del negocio y su identidad.

---

### `domains/`
Define la **lógica de negocio** y los **puertos (interfaces)** que el dominio necesita para interactuar con el exterior, como persistencia u otros servicios.

---

### `application/`
Contiene los **casos de uso del CRUD**, donde cada caso de uso representa una acción específica del negocio y orquesta el flujo entre dominio e infraestructura.

---

### `infrastructure/`
Implementa los **adaptadores** del sistema, incluyendo:

- Controllers HTTP (adaptadores de entrada)
- Repositorios concretos en memoria (adaptadores de salida)
- Integración con el framework NestJS

---

### `shared/`
Contiene los **DTOs de request y response** que definen el contrato de la API y utilidades compartidas entre capas.

---

## 🚀 Inicio del proyecto (pnpm)

### Requisitos
- Node.js ≥ 18
- pnpm

### Instalación de pnpm (si no está instalado)
```bash
npm install -g pnpm

