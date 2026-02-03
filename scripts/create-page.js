import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener ruta actual (necesario en ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Capturar nombre de la página desde terminal
const pageName = process.argv[2];

// Validación: Si no hay nombre, error y salir
if (!pageName) {
    console.error('Por favor, indica el nombre de la página:');
    console.error('Ejemplo: npm run page Contacto');
    process.exit(1);
}

// Definir ruta de la nueva página: src/pages/Nombre.jsx
const pageDir = path.join(__dirname, '../src/pages');
const filePath = path.join(pageDir, `${pageName}.jsx`);

// Plantilla para páginas
const content = `import React from 'react';

const ${pageName} = () => {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">${pageName}</h1>
        <p className="text-lg text-gray-600">Contenido de la página ${pageName} generado automáticamente.</p>
      </div>
    </main>
  );
};

export default ${pageName};`;

// Crear carpeta si no existe
if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
}

// Verificar si el archivo ya existe
if (fs.existsSync(filePath)) {
    console.error(`La página ${pageName} ya existe.`);
    process.exit(1);
}

// Escribir el archivo
fs.writeFileSync(filePath, content);
console.log(`Página creada con éxito: src/pages/${pageName}.jsx`);