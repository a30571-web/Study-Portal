function openNav() { document.getElementById("mySidebar").style.width = "280px"; document.getElementById("main").style.marginLeft = "280px"; }
function closeNav() { document.getElementById("mySidebar").style.width = "0"; document.getElementById("main").style.marginLeft = "0"; }

document.querySelectorAll(".dropdown-btn, .sub-dropdown-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        var container = this.nextElementSibling;
        container.style.display = (container.style.display === "block") ? "none" : "block";
    });
});

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    document.getElementById("theme-toggle").innerHTML = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
}

// Editor Logic
const codePresets = {
    html: "<html>\n<body>\n  <h1>Olá TGPSI</h1>\n  <p>Teste o seu HTML aqui.</p>\n</body>\n</html>",
    javascript: "console.log('Olá de PSI!');\nlet a = 5; let b = 10;\nconsole.log('Soma:', a + b);",
    python: "print('Olá do Python!')\nfor i in range(3):\n    print(f'Módulo {i}')",
    sql: "SELECT * FROM Alunos WHERE modulo = 'PSI';",
    php: "<?php echo 'Hello from PHP'; ?>"
};

function updateEditor() {
    const lang = document.getElementById('lang-select').value;
    document.getElementById('w3-text-editor').value = codePresets[lang];
}

function runEditor() {
    const lang = document.getElementById('lang-select').value;
    const code = document.getElementById('w3-text-editor').value;
    const iframe = document.getElementById('w3-iframe-result');
    const terminal = document.getElementById('w3-terminal-result');

    if (lang === 'html') {
        terminal.style.display = 'none'; iframe.style.display = 'block';
        const doc = iframe.contentDocument;
        doc.open(); doc.write(code); doc.close();
    } else {
        iframe.style.display = 'none'; terminal.style.display = 'block';
        terminal.innerHTML = "> Executando " + lang.toUpperCase() + "...\n";
        if (lang === 'javascript') {
            try {
                let output = [];
                const oldLog = console.log;
                console.log = (m) => output.push(m);
                eval(code);
                console.log = oldLog;
                terminal.innerHTML += output.join('\n');
            } catch(e) { terminal.innerHTML += "Erro: " + e; }
        } else {
            terminal.innerHTML += "> Output simulado: " + code.substring(0, 20) + "... [Sucesso]";
        }
    }
}
window.onload = updateEditor;no
