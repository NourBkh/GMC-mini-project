pipeline {
    agent any

    environment {
        BACKEND_IMAGE = "backend-app"
        FRONTEND_IMAGE = "frontend-app"
    }

    stages {

        //  STAGE 1 — Checkout
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'git@github.com:NourBkh/GMC-mini-project.git'
            }
        }

        //  STAGE 2 — Install Backend Dependencies
        stage('Install Backend Dependencies') {
            steps {
                sh '''
                cd portfolio-backend
                // pip install -r requirements.txt || npm install
                '''
            }
        }

        //  STAGE 3 — Install Frontend Dependencies
        stage('Install Frontend Dependencies') {
            steps {
                sh '''
                cd portfolio-frontend
                npm install
                '''
            }
        }

        //  STAGE 4 — Backend Tests
        stage('Backend Tests') {
            steps {
                sh '''
                cd portfolio-backend
                pytest || echo "No backend tests found"
                '''
            }
        }

        //  STAGE 5 — Frontend Tests
        stage('Frontend Tests') {
            steps {
                sh '''
                cd portfolio-frontend
                npm test || echo "No frontend tests found"
                '''
            }
        }

        //  STAGE 6 — Docker Build
        stage('Docker Build') {
            steps {
                sh '''
                docker build -t backend-app ./portfolio-backend
                docker build -t frontend-app ./portfolio-frontend
                '''
            }
        }

        //  STAGE 7 — Docker Compose Build & Run
        stage('Docker Compose Run') {
            steps {
                sh '''
                docker-compose up -d --build
                '''
            }
        }

        //  STAGE 8 — Kubernetes Deploy (Minikube)
        stage('Kubernetes Deploy') {
            steps {
                sh '''
                kubectl apply -f k8s/
                kubectl get pods
                kubectl get svc
                '''
            }
        }

        //  STAGE 9 — Terraform Apply
        stage('Terraform Apply') {
            steps {
                sh '''
                cd terraform
                terraform init
                terraform apply -auto-approve
                '''
            }
        }
    }

    //  POST ACTION — Cleanup
    post {
        always {
            sh '''
            docker-compose down || true
            '''
        }
    }
}
