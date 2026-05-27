# DockerVerse 🚀

DockerVerse is a Docker-themed static web application deployed on AWS EC2 using Docker and Nginx.

## Technologies Used

- AWS EC2
- Docker
- Nginx
- HTML
- CSS
- GitHub Pages

---

## Features

- Responsive UI
- Containerized deployment
- Public cloud hosting
- Nginx web server
- Dockerized application

---

## Architecture

User → AWS EC2 → Docker Container → Nginx → Web Application

---

## Docker Setup

### Build Docker Image

```bash
docker build -t dockerverse .
```

### Run Docker Container

```bash
docker run -d -p 8080:80 dockerverse
```

---

## Live Demo

AWS Deployment:
http://54.86.51.8:2407/

GitHub Pages:
https://vidyasri-nekuri.github.io/DockerVerse/

---

## Screenshots

### Docker Container Running

(Add image here)

### AWS EC2 Deployment

(Add image here)

### Live Application

(Add image here)

---

## Future Improvements

- Add CI/CD pipeline
- Add HTTPS
- Deploy using Kubernetes
- Add monitoring
