import fs from 'fs'; // Módulo para leer/escribir archivos
import path from 'path'; // Para manejar rutas de archivos
import { fileURLToPath } from 'url'; // Para obtener la ruta actual en módulos ES

// Obtener ruta actual (necesario en ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Capturar nombre del componente desde terminal (e.g., npm run gen MiComponente)
const componentName = process.argv[2];

// Validación: Si no hay nombre, error y salir
if (!componentName) {
    console.error('Por favor, indica el nombre del componente:');
    console.error('Ejemplo: npm run gen MiComponente');
    process.exit(1);
}

// Definir ruta del nuevo componente: src/components/Nombre.jsx
const componentDir = path.join(__dirname, '../src/components');
const filePath = path.join(componentDir, `${componentName}.jsx`);

// Plantilla (boilerplate) del componente React
const content = `import React from 'react';
function ${componentName}() {
  return (
    <div>
      <h1 className="text-2xl font-bold">${componentName}</h1>
      <p>Componente creado automáticamente</p>
    </div>
  );
}
export default ${componentName};`;

// Crear carpeta si no existe
if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
}

// Verificar si el archivo ya existe
if (fs.existsSync(filePath)) {
    console.error(`El componente ${componentName} ya existe.`);
    process.exit(1);
}

// Escribir el archivo
fs.writeFileSync(filePath, content);
console.log(`Componente creado con éxito: src/components/${componentName}.jsx`);