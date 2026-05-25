# Image Nginx légère
FROM nginx:alpine

# Copier les fichiers frontend
COPY . /usr/share/nginx/html

# Exposer port frontend
EXPOSE 3000

# Lancer nginx
CMD ["nginx", "-g", "daemon off;"]
