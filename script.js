// =============================
// TERMINAL TYPING EFFECT
// =============================

const typingElement = document.getElementById("typing");

const commands = [
    "initializing_security_lab...",
    "loading_projects...",
    "checking_system_status...",
    "access_granted."
];

let commandIndex = 0;
let characterIndex = 0;

function typeCommand() {

    if (commandIndex >= commands.length) {
        commandIndex = 0;
    }

    const command = commands[commandIndex];

    if (characterIndex < command.length) {

        typingElement.textContent +=
            command.charAt(characterIndex);

        characterIndex++;

        setTimeout(typeCommand, 45);

    } else {

        setTimeout(() => {

            typingElement.textContent = "";

            characterIndex = 0;

            commandIndex++;

            typeCommand();

        }, 1500);
    }
}

typeCommand();


// =============================
// ENTER LAB
// =============================

const enterButton =
    document.getElementById("enterLab");

const labSection =
    document.getElementById("lab");

enterButton.addEventListener("click", () => {

    labSection.scrollIntoView({
        behavior: "smooth"
    });

});


// =============================
// MODULE WINDOW
// =============================

const moduleWindow =
    document.getElementById("moduleWindow");

const closeModule =
    document.getElementById("closeModule");

const windowTitle =
    document.getElementById("windowTitle");

const modules =
    document.querySelectorAll(".module");

const contents =
    document.querySelectorAll(".module-content");


// Module names
const moduleNames = {

    projects: "PROJECT DATABASE",

    skills: "SKILL DATABASE",

    tools: "SECURITY TOOLKIT",

    ctf: "CTF DATABASE",

    about: "IDENTITY",

    contact: "COMMUNICATION CHANNEL",

    scanner: "LAB-001 // SECURITY HEADER SCANNER",

    portScanner: "LAB-002 // TCP PORT & SERVICE SCANNER",
    
    webScanner: "LAB-003 // WEB VULNERABILITY SCANNER"
};
// =============================
// MODULE CLICK HANDLERS
// =============================

modules.forEach(module => {

    module.addEventListener("click", () => {

        const page =
            module.dataset.page;

        openPortfolioModule(page);

    });

});


// =============================
// CLOSE WINDOW
// =============================

function closeWindow() {

    moduleWindow.classList.remove("active");

    document.body.style.overflow = "";

}

closeModule.addEventListener(
    "click",
    closeWindow
);


// Close when clicking outside

moduleWindow.addEventListener("click", (event) => {

    if (event.target === moduleWindow) {

        closeWindow();

    }

});


// ESC key closes window

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeWindow();

    }

});

// =============================
// SECURITY HEADER SCANNER LAB
// =============================

const openScanner =
    document.getElementById("openScanner");

const scannerContent =
    document.getElementById("scannerContent");

if (openScanner) {

    openScanner.addEventListener("click", (event) => {

        event.stopPropagation();

        // Hide all other module content
        contents.forEach(content => {
            content.classList.remove("active");
        });

        // Show scanner lab
        scannerContent.classList.add("active");

        // Change window title
        windowTitle.textContent =
            "LAB-001 // SECURITY HEADER SCANNER";

        // Open module window
        moduleWindow.classList.add("active");

        document.body.style.overflow = "hidden";

    });

}

// =============================
// TCP PORT SCANNER LAB
// =============================

const openPortScanner =
    document.getElementById("openPortScanner");

const portScannerContent =
    document.getElementById("portScannerContent");

if (openPortScanner) {

    openPortScanner.addEventListener("click", (event) => {

        event.stopPropagation();

        contents.forEach(content => {
            content.classList.remove("active");
        });

        portScannerContent.classList.add("active");

        windowTitle.textContent =
            "LAB-002 // TCP PORT & SERVICE SCANNER";

        moduleWindow.classList.add("active");

        document.body.style.overflow = "hidden";

    });

}


// =============================
// WEB VULNERABILITY SCANNER LAB
// =============================

const openWebScanner =
    document.getElementById("openWebScanner");

const webScannerContent =
    document.getElementById("webScannerContent");

if (openWebScanner) {

    openWebScanner.addEventListener("click", (event) => {

        event.stopPropagation();

        contents.forEach(content => {
            content.classList.remove("active");
        });

        webScannerContent.classList.add("active");

        windowTitle.textContent =
            "LAB-003 // WEB VULNERABILITY SCANNER";

        moduleWindow.classList.add("active");

        document.body.style.overflow = "hidden";

    });

}


// =============================
// INTERACTIVE TERMINAL
// =============================

const terminalInput =
    document.getElementById("terminalInput");

const terminalOutput =
    document.getElementById("terminalOutput");


// Add text to terminal

function terminalPrint(content, className = "") {

    const line =
        document.createElement("div");

    line.className = className;

    line.innerHTML = content;

    terminalOutput.appendChild(line);

    terminalOutput.scrollTop =
        terminalOutput.scrollHeight;
}


// Show command entered

function showCommand(command) {

    terminalPrint(
        `<span class="terminal-muted">root@tusar:~$</span> ${command}`
    );

}


// =============================
// COMMAND HANDLER
// =============================

function executeCommand(command) {

    const cmd = command.trim().toLowerCase();

    if (!cmd) return;

    showCommand(cmd);


    // =========================
    // HELP
    // =========================

    if (cmd === "help") {

        terminalPrint(
            "AVAILABLE COMMANDS",
            "terminal-heading"
        );

        terminalPrint("────────────────────────────");

        terminalPrint(
            '<span class="terminal-command">help</span>     Show available commands'
        );
        terminalPrint(
            '<span class="terminal-command">projects</span> Open project database'
        );

        terminalPrint(
            '<span class="terminal-command">lab 001</span> Open Security Header Scanner'
        );

        terminalPrint(
            '<span class="terminal-command">lab 002</span> Open TCP Port & Service Scanner'
        );

        terminalPrint(
            '<span class="terminal-command">lab 003</span> Open Web Vulnerability Scanner'
        );

        terminalPrint(
            '<span class="terminal-command">skills</span>   Display technical skills'
        );

        terminalPrint(
            '<span class="terminal-command">tools</span>    Display security toolkit'
        );

        terminalPrint(
            '<span class="terminal-command">scan</span>     Run security scan'
        );

        terminalPrint(
            '<span class="terminal-command">about</span>    About this lab'
        );

        terminalPrint(
            '<span class="terminal-command">contact</span>  Contact information'
        );
    }
        // =========================
        // PROJECTS
        // =========================
    else if (cmd === "projects") {

        terminalPrint(
            "ACCESSING PROJECT DATABASE...",
            "terminal-success"
        );

        setTimeout(() => {
            openPortfolioModule("projects");
        }, 500);
    }


    // =========================
    // SKILLS
    // =========================

    else if (cmd === "skills") {

        terminalPrint(
            "LOADING SKILL DATABASE...",
            "terminal-success"
        );

        setTimeout(() => {
            openPortfolioModule("skills");
        }, 500);
    }


    // =========================
    // TOOLS
    // =========================

    else if (cmd === "tools") {

        terminalPrint(
            "LOADING SECURITY TOOLKIT...",
            "terminal-success"
        );

        setTimeout(() => {
            openPortfolioModule("tools");
        }, 500);
    }


    // =========================
// ABOUT
// =========================

else if (cmd === "about") {

    terminalPrint(
        "ACCESSING IDENTITY DATABASE...",
        "terminal-success"
    );

    setTimeout(() => {
        openPortfolioModule("about");
    }, 500);
}


// =========================
// LAB 001
// =========================

else if (
        cmd === "lab 001" ||
        cmd === "lab-001" ||
        cmd === "lab001"
    ) {
        
        terminalPrint(
            "OPENING LAB-001...",
            "terminal-success"
        );
        
        setTimeout(() => {
            openPortfolioModule("scanner");
        }, 500);
    }
    
    
    // =========================
    // LAB 002
    // =========================
    
    else if (
    cmd === "lab 002" ||
    cmd === "lab-002" ||
    cmd === "lab002"
    ) {
    
    terminalPrint(
        "OPENING LAB-002...",
        "terminal-success"
    );
    
    setTimeout(() => {
        openPortfolioModule("portScanner");
    }, 500);
    
    }

// =========================
// LAB 003
// =========================

else if (
    cmd === "lab 003" ||
    cmd === "lab-003" ||
    cmd === "lab003"
) {

    terminalPrint(
        "OPENING LAB-003...",
        "terminal-success"
    );

    setTimeout(() => {
        openPortfolioModule("webScanner");
    }, 500);

}


    
    // =========================
    // HIRE TUSAR
    // =========================
    
    else if (
        cmd === "sudo hire-tusar" ||
        cmd === "hire-tusar"
    ) {

        terminalPrint(
            "AUTHENTICATING...",
            "terminal-warning"
        );

        setTimeout(() => {

            terminalPrint(
                "ACCESS GRANTED ✓",
                "terminal-success"
            );

        }, 600);

        setTimeout(() => {

            terminalPrint(
                "OPENING COMMUNICATION CHANNEL...",
                "terminal-success"
            );

            openPortfolioModule("contact");

        }, 1200);
    }


    // =========================
    // SCAN
    // =========================

    else if (cmd === "scan") {

        runSecurityScan();

    }


    // =========================
    // CLEAR
    // =========================

    else if (cmd === "clear") {

        terminalOutput.innerHTML = "";

    }


    // =========================
    // UNKNOWN COMMAND
    // =========================

    else {

        terminalPrint(
            `Command not found: <span class="terminal-error">${cmd}</span>`
        );

        terminalPrint(
            'Type <span class="terminal-command">help</span> to see available commands.'
        );
    }
}


// =============================
// TERMINAL MODULE NAVIGATION
// =============================

function openPortfolioModule(page) {

    // Hide all module content
    contents.forEach(content => {
        content.classList.remove("active");
    });


    // Find requested module
    const selectedContent =
        document.getElementById(`${page}Content`);


    if (!selectedContent) {

        terminalPrint(
            `Module not found: ${page}`,
            "terminal-error"
        );

        return;
    }


    // Show module
    selectedContent.classList.add("active");


    // Update window title
    windowTitle.textContent =
        moduleNames[page] || "SECURITY MODULE";


    // Open window
    moduleWindow.classList.add("active");

    document.body.style.overflow = "hidden";
}



// =============================
// SIMULATED SECURITY SCAN
// =============================

function runSecurityScan() {

    terminalPrint(
        "INITIALIZING LAB DIAGNOSTIC...",
        "terminal-success"
    );

    setTimeout(() => {

        terminalPrint(
            "Checking portfolio endpoint..."
        );

    }, 400);


    setTimeout(() => {

        terminalPrint(
            "Checking security modules..."
        );

    }, 900);


    setTimeout(() => {

        terminalPrint(
            "Checking project database..."
        );

    }, 1400);


    setTimeout(() => {

        terminalPrint(
            "Checking system status..."
        );

    }, 1900);


    setTimeout(() => {

        terminalPrint("");

        terminalPrint(
            "DIAGNOSTIC COMPLETE",
            "terminal-heading"
        );

        terminalPrint(
            "────────────────────────────"
        );

        terminalPrint(
            "LAB STATUS       <span class='terminal-success'>ONLINE ✓</span>"
        );

        terminalPrint(
            "PROJECTS        <span class='terminal-success'>LOADED ✓</span>"
        );

        terminalPrint(
            "MODULES         <span class='terminal-success'>ACTIVE ✓</span>"
        );

        terminalPrint(
            "DATABASE        <span class='terminal-success'>READY ✓</span>"
        );

        terminalPrint("");

        terminalPrint(
            "No real network scan was performed.",
            "terminal-muted"
        );

    }, 2400);

}


// =============================
// LISTEN FOR ENTER
// =============================

terminalInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {

            const command =
                terminalInput.value;

            executeCommand(command);

            terminalInput.value = "";

        }

    }
);


// =============================
// CLICK TERMINAL TO FOCUS
// =============================

document
    .querySelector(".terminal")
    .addEventListener("click", () => {

        terminalInput.focus();

    });