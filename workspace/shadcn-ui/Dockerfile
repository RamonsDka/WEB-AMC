# Usa una imagen base de Nginx ligera
FROM nginx:alpine

# Copia los archivos de la aplicación construida (del directorio dist) al directorio web de Nginx
COPY dist /usr/share/nginx/html

# Copia la configuración personalizada de Nginx que incluye los headers de seguridad
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80 (el puerto por defecto de Nginx)
EXPOSE 80

# Comando para iniciar Nginx cuando el contenedor se inicie
CMD ["nginx", "-g", "daemon off;"]
