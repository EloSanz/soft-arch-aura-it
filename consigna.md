# TRABAJO PRÁCTICO: ARQUITECTURA DE SISTEMAS DE SOFTWARE

## Caso: "Industrias Metalúrgicas Acero"
- **Sector:** Manufactura Industrial - Metalurgia
- **Empresa con 45 años de trayectoria**

- **Curso / Año:** 2026
- **Modalidad:** Individual o en grupos de hasta XX alumnos
- **Fecha de entrega:** [indicar fecha]
- **Ponderación:** [indicar porcentaje]

### Caso hipotético: "Industrias Metalúrgicas Acero"
Empresa con 45 años de trayectoria. Industrias Metalúrgicas Acero es una empresa manufacturera fundada en 1981 (hace 45 años). Comenzó como un pequeño taller de tornería y hoy opera 4 plantas industriales con más de 800 empleados, produciendo piezas y componentes metálicos para las industrias automotriz, petrolera y de maquinaria agrícola. Es una empresa familiar de tradición industrial. 

**El sistema actual soporta:**
- Planificación de producción (MRP/MPS)
- Control de piso de planta y órdenes de fabricación
- Gestión de calidad y trazabilidad de lotes
- Mantenimiento de máquinas y equipos (CMMS)
- Gestión de compras e inventario de materias primas
- Costeo de productos y control presupuestario
- Facturación y cuentas a cobrar/pagar
- Reportes de producción y eficiencia (OEE)

**Situación actual del sistema:**
- ERP legacy implementado hace 28 años (sistema propietario en Progress 4GL + Oracle).
- Módulos de producción y contabilidad que funcionan como silos separados.
- Planificación de producción en Excel fuera del sistema por limitaciones del MRP.
- Imposibilidad de implementar IoT e Industria 4.0 para monitoreo de máquinas.
- Trazabilidad de lotes deficiente que complica certificaciones de calidad.
- Alto costo de mantenimiento del ERP y dependencia del proveedor original.
- Incapacidad de integrar con sistemas de clientes grandes (EDI, portales de proveedores).

La dirección de la empresa, consciente de sus 45 años de historia y de la necesidad de modernizarse sin perder la estabilidad que caracteriza su operación, ha decidido rediseñar completamente la arquitectura del sistema para garantizar sostenibilidad, escalabilidad y competitividad a futuro. 

---

## Consigna
Elaborar un documento completo de Arquitectura de Software para el nuevo sistema de Industrias Metalúrgicas Acero, aplicando los contenidos de las tres unidades de la asignatura al caso de esta empresa con 45 años de trayectoria.

### Estructura obligatoria del documento

#### 1. Introducción
Presentar la empresa Industrias Metalúrgicas Acero, su trayectoria de 45 años, el contexto tradicional del negocio y los principales problemas del sistema legacy actual. Explicar los objetivos del rediseño arquitectónico.

#### 2. Unidad 1 – Conceptos fundamentales aplicados a Industrias Metalúrgicas Acero
- Explicar modularidad, escalabilidad, cohesión y acoplamiento, relacionándolos directamente con los módulos y problemas del sistema actual (ejemplo: planificación de producción (mrp/mps), control de piso de planta y órdenes de fabricación, etc.).
- Diferencia entre arquitectura de software y diseño de software en el contexto de modernizar un sistema legacy de más de 31 años.
- Rol del arquitecto de software en un proyecto de modernización como el de Industrias Metalúrgicas Acero.
- Relación entre arquitectura y atributos de calidad, identificando cuáles son los más críticos para esta empresa (trazabilidad de producción, integración IT/OT, disponibilidad de planta, cumplimiento de normas de calidad, escalabilidad de datos industriales).

#### 3. Unidad 2 – Géneros y estilos arquitectónicos aplicados a Industrias Metalúrgicas Acero
- Explicar 3 estilos arquitectónicos con: objetivos, características principales, escenarios de aplicación, ventajas y desventajas. Agus, peque y gonza
- Aplicación al caso: indicar en qué estilo se encuentra actualmente el sistema legacy de Industrias Metalúrgicas Acero y cuál(es) recomendarían para su modernización, justificando la elección.
- Mencionar brevemente al menos dos arquitecturas emergentes (2025-2026) relevantes para el sector.

#### 4. Unidad 3 – Patrones, antipatrones y trazabilidad aplicados a Industrias Metalúrgicas Acero
- Patrones arquitectónicos útiles para el caso de Industrias Metalúrgicas Acero.
- Antipatrones presentes o potenciales en su sistema legacy de más de 31 años y estrategias para evitarlos.
- Mejores prácticas de arquitectura de software aplicadas al contexto del sector manufactura industrial - metalurgia.
- Trazabilidad de requisitos (funcionales y no funcionales) hacia las decisiones arquitectónicas.

#### 5. Propuesta de arquitectura para Industrias Metalúrgicas Acero
- Análisis detallado de los problemas de la arquitectura actual.
- Propuesta de la arquitectura objetivo-recomendada (estilo/s principal).
- Justificación de la elección considerando los 45 años de historia y el plan de expansión: 2 nuevas plantas y línea de productos especializados.
- Incluir al menos un diagrama de componentes y un diagrama de despliegue.
- Atributos de calidad prioritarios y cómo la arquitectura propuesta los satisface.
- Patrones recomendados (ej. API Gateway, Circuit Breaker, CQRS, Event-Driven, Strangler Fig, etc.) y antipatrones a evitar.
- Matriz de trazabilidad simple que relacione requisitos clave con decisiones arquitectónicas.

#### 6. Parte de investigación
- Declarar explícitamente que el presente TP incluye una parte de investigación.
- Investigar al menos un caso real de migración de un sistema monolítico legacy en empresas del sector manufactura industrial - metalurgia con más de 20 años de antigüedad.
- Analizar las lecciones aprendidas y aplicarlas específicamente al caso de Industrias Metalúrgicas Acero.

#### 7. Conclusiones
Resumir la propuesta arquitectónica para modernizar el sistema de Industrias Metalúrgicas Acero, los beneficios esperados y las principales recomendaciones.

#### 8. Bibliografía
Listar las fuentes consultadas.

---

### Formato de entrega
- El trabajo se presentará en formato de diapositivas (PowerPoint o Google Slides).
- Mínimo 25 diapositivas – máximo 45 diapositivas (sin contar portada y bibliografía).
- Portada con datos del alumno/s y título del TP.
- Índice.
- Desarrollo según la estructura anterior.
- Diagramas claros de componentes y de despliegue.
- Todas las explicaciones deben estar aplicadas al caso de Industrias Metalúrgicas Acero.
- Bibliografía al final.

### Contexto del sector (referencia para el alumno)
La industria manufacturera avanza hacia Industria 4.0, con demandas de trazabilidad, IoT y gemelos digitales. La empresa debe modernizarse para mantener competitividad, certificaciones ISO y requerimientos de grandes clientes.
