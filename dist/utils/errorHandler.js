"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleError = (error) => {
    if (error.message.includes('API Error')) {
        console.error('❌ Hubo un problema al comunicarse con la API de GitHub.');
    }
    else if (error.message.includes('Network Error')) {
        console.error('❌ No se pudo establecer la conexión a internet.');
    }
    else {
        console.error(`❌ Error desconocido: ${error.message}`);
    }
};
exports.default = handleError;
