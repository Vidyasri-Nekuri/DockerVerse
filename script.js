const nodes = document.querySelectorAll('.architecture-node');
const infoBox = document.getElementById('infoBox');

nodes.forEach(node => {

    node.addEventListener('click', () => {

        const info = node.getAttribute('data-info');

        infoBox.innerHTML = info;

        nodes.forEach(n => n.classList.remove('active-node'));

        node.classList.add('active-node');
    });

});
const commandButtons = document.querySelectorAll('.command-btn');

const selectedCommand = document.getElementById('selectedCommand');
const commandDescription = document.getElementById('commandDescription');
const commandOutput = document.getElementById('commandOutput');

commandButtons.forEach(button => {

    button.addEventListener('click', () => {

        commandButtons.forEach(btn =>
            btn.classList.remove('active-command')
        );

        button.classList.add('active-command');

        selectedCommand.textContent =
            button.getAttribute('data-command');

        commandDescription.textContent =
            button.getAttribute('data-description');

        commandOutput.textContent =
            button.getAttribute('data-output');

    });

});
/* Lifecycle Animation */

const dockerfileBox = document.getElementById('dockerfileBox');
const imageBox = document.getElementById('imageBox');
const containerBox = document.getElementById('containerBox');
const runningBox = document.getElementById('runningBox');

const lifeStatus = document.getElementById('lifeStatus');

function clearLifecycle() {

    dockerfileBox.classList.remove('active-life');
    imageBox.classList.remove('active-life');
    containerBox.classList.remove('active-life');
    runningBox.classList.remove('active-life');
}

function buildImage() {

    clearLifecycle();

    dockerfileBox.classList.add('active-life');

    setTimeout(() => {
        imageBox.classList.add('active-life');
    }, 700);

    lifeStatus.innerHTML =
        'Dockerfile is processed and converted into a Docker Image.';
}

function runContainer() {

    clearLifecycle();

    dockerfileBox.classList.add('active-life');

    setTimeout(() => {
        imageBox.classList.add('active-life');
    }, 500);

    setTimeout(() => {
        containerBox.classList.add('active-life');
    }, 1000);

    setTimeout(() => {
        runningBox.classList.add('active-life');
    }, 1500);

    lifeStatus.innerHTML =
        'Docker Image is now running as a live containerized application.';
}

function stopContainer() {

    clearLifecycle();

    dockerfileBox.classList.add('active-life');
    imageBox.classList.add('active-life');

    lifeStatus.innerHTML =
        'Container has been stopped. Image still exists and can be reused.';
}

/* Dockerfile Generator */

function generateDockerfile() {

    const baseImage =
        document.getElementById('baseImage').value;

    const workDir =
        document.getElementById('workDir').value;

    const port =
        document.getElementById('port').value;

    const startCommand =
        document.getElementById('startCommand').value;

    const commandArray =
        startCommand.split(' ');

    const formattedCMD =
        JSON.stringify(commandArray);

    const dockerfile = `FROM ${baseImage}

WORKDIR ${workDir}

COPY . .

RUN npm install

EXPOSE ${port}

CMD ${formattedCMD}`;

    document.getElementById('dockerfileCode').textContent =
        dockerfile;
}

/* Docker Errors Accordion */

const errorCards =
    document.querySelectorAll('.error-card');

errorCards.forEach(card => {

    const header =
        card.querySelector('.error-header');

    header.addEventListener('click', () => {

        card.classList.toggle('active-error');

    });

});

/* Workflow Hover Animation */

const workflowCards =
    document.querySelectorAll('.workflow-card');

workflowCards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transform =
            'translateY(-10px) scale(1.02)';

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform =
            'translateY(0) scale(1)';

    });

});

/* Quiz Section */

function checkAnswer(button, isCorrect) {

    const options =
        document.querySelectorAll('.quiz-option');

    options.forEach(option => {

        option.disabled = true;

        if (option === button) {

            if (isCorrect) {

                option.classList.add('correct-answer');

                document.getElementById('quizResult').innerHTML =
                    '✅ Correct! docker ps lists running containers.';

            } else {

                option.classList.add('wrong-answer');

                document.getElementById('quizResult').innerHTML =
                    '❌ Incorrect answer. Try learning Docker commands again.';
            }
        }

    });

}

/* Footer Command Hover Effect */

const footerCommands =
    document.querySelectorAll('.footer-card li');

footerCommands.forEach(command => {

    command.addEventListener('mouseenter', () => {

        command.style.color = '#38bdf8';

    });

    command.addEventListener('mouseleave', () => {

        command.style.color = '#94a3b8';

    });

});


/* Copy Command On Click */

footerCommands.forEach(command => {

    command.addEventListener('click', () => {

        navigator.clipboard.writeText(
            command.innerText
        );

        const originalText =
            command.innerText;

        command.innerText = 'Copied ✅';

        setTimeout(() => {

            command.innerText = originalText;

        }, 1200);

    });

});