# Image de base Python
FROM python:3.10-slim

# Dossier de travail
WORKDIR /app

# Copier les fichiers
COPY requirements.txt .

# Installer les dépendances
RUN pip install --no-cache-dir -r requirements.txt

# Copier le code source
COPY . .

# Exposer le port backend
EXPOSE 5000

# Commande de démarrage
CMD ["python", "app.py"]
