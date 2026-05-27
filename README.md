# DockerVerse 🚀

DockerVerse is a Docker-themed static web application deployed on AWS EC2 using Docker and Nginx.

This project demonstrates containerized application deployment, Linux server management, and cloud hosting using AWS infrastructure.

---

## 📌 Project Overview

The application is packaged inside a Docker container and deployed on an AWS EC2 instance using Nginx as the web server.

The project focuses on:

* Docker containerization
* Cloud deployment
* Linux-based infrastructure management
* Web server configuration
* Public application hosting

---

## 🛠️ Technologies Used

* AWS EC2
* Docker
* Nginx
* Linux
* HTML
* CSS
* Git & GitHub
* GitHub Pages

---

## 🏗️ Architecture

```text id="jlwm1"
User Request
      │
      ▼
 AWS EC2 Instance
      │
      ▼
 Docker Container
      │
      ▼
   Nginx Server
      │
      ▼
 Static Web Application
```

---

## 📂 Project Structure

```bash id="jlwm2"
DockerVerse/
│
├── index.html
├── style.css
├── Dockerfile
└── README.md
```

---

## ⚙️ Docker Setup

### Build Docker Image

```bash id="jlwm3"
docker build -t dockerverse .
```

### Run Docker Container

```bash id="jlwm4"
docker run -d -p 8080:80 dockerverse
```

---

## ☁️ AWS Deployment

The application was deployed on an AWS EC2 instance using Docker and Nginx.

### Access Application

```text id="jlwm5"
http://54.86.51.8:2407/
```

---

## 🌐 Live Demo

### AWS Deployment

http://54.86.51.8:2407/

### GitHub Pages

https://vidyasri-nekuri.github.io/DockerVerse/

---

## 📊 Features

* ✅ Dockerized web application
* ✅ AWS EC2 deployment
* ✅ Nginx web server configuration
* ✅ Public cloud hosting
* ✅ Responsive user interface
* ✅ Linux-based deployment environment
* ✅ GitHub-hosted project repository

---

## 🚀 Future Improvements

* Implement CI/CD pipeline using GitHub Actions
* Add HTTPS with SSL/TLS
* Integrate monitoring and logging
* Deploy using Kubernetes
* Automate deployments using Infrastructure as Code (IaC)

---

## 📚 Learning Outcomes

Through this project, I learned:

* Docker containerization
* AWS EC2 deployment workflows
* Linux server management
* Nginx web server configuration
* Container-based application hosting
* Git and GitHub project management

---

## 👨‍💻 Author

### Vidyasri Nekuri

Aspiring DevOps Engineer focused on:

* AWS
* Docker
* Linux
* Automation
* CI/CD

### GitHub

https://github.com/Vidyasri-Nekuri
