/**
 * Structured Experience Data Array
 * Add, edit, or reorder entries here—the timeline cards and branched SVG track update automatically.
 */
const experiences = [
    {
        organization: "Microsoft",
        jobTitle: "Software Engineer II",
        period: "Oct 2022 – Oct 2026 (4 yrs)",
        location: "Dublin, Ireland",
        category: "enterprise",
        badge: "Identity & Security Systems",
        accentColor: "sky",
        branch: "main",
        summaryHtml: 'Engineered high-scale authentication platforms for <strong class="text-white">Microsoft Entra ID</strong>. Core focus on the <strong class="text-sky-300">Security Token Service (STS)</strong>, processing billions of daily requests for millions of global users.',
        highlightsSectionTitle: "Core Products & Impact",
        highlights: [
            { title: "Native Authentication APIs", description: "Drove end-to-end feature development, establishing core API contracts, state management, Multi-Factor Authentication (MFA), and error handling for customized login UIs." },
            { title: "Customer Identity Access Management (CIAM)", description: "Engineered platform capabilities enabling external enterprises to create customer directories and secure custom resources." },
            { title: "Defense-in-Depth Security", description: "Co-designed and deployed tenant-isolation controls across multiple authentication entry points and domain configurations." },
            { title: "Cryptographic Agility", description: "Enhancements for stronger signing keys and algorithm-aware verification across key provisioning, metadata, and token validation." },
            { title: "Secure Artifact Migration", description: "Incremental migration of auth artifacts to centrally validated signed formats with feature gates, telemetry & rollbacks." },
            { title: "Technical Leadership", description: "Reviewed 500+ peer pull requests, establishing reusable testing patterns and architectural standards." },
            { title: "Livesite Reliability", description: "On-Call Engineer (OCE) driving rapid mitigation of high-severity production issues." }
        ],
        techStack: [
            "C#", ".NET Framework", ".NET Core", "HTML", "CSS", "JavaScript",
            "MSSQL", "Git", "Azure Functions", "Azure Storage",
            "CI/CD with Azure DevOps", "Apache JMeter", "GitHub Copilot", "REST APIs"
        ]
    },
    {
        organization: "Cleverbit Software",
        jobTitle: "Senior Full-Stack Developer",
        period: "Jun 2021 – Aug 2022 (1 yr 3 mos)",
        location: "Remote",
        category: "enterprise",
        badge: "Full-Stack Enterprise",
        accentColor: "indigo",
        branch: "main",
        highlights: [
            "Co-architected a core Content Management System (CMS) for a large-scale American logistics enterprise.",
            'Engineered high-performance cloud integrations via Azure Functions with 3rd-party tracking ecosystems (<strong class="text-white">Samsara, Tenstreet</strong>), optimizing system interoperability and supply-chain metrics.'
        ],
        techStack: [
            "C#", ".NET Core", "React.js", "MSSQL", "Azure Functions", "Git", "CI/CD with Azure DevOps"
        ]
    },
    {
        organization: "Altran",
        jobTitle: "Consultant / Engineer",
        period: "Dec 2020 – Jun 2021 (7 mos)",
        location: "Porto, Portugal",
        category: "enterprise",
        badge: "FinTech Banking Consultant",
        accentColor: "sky",
        branch: "main",
        summaryHtml: 'Deployed to <strong class="text-white">Natixis (French Investment Bank)</strong> to develop and maintain internal products interacting with Salesforce internal systems, driving operational efficiencies.',
        techStack: [
            ".NET Framework", ".NET Core", "HTML", "CSS", "SQL", "JavaScript", "Git", "TFS", "CI/CD", "Salesforce APIs"
        ]
    },
    {
        organization: "Nerdsoft, LLC",
        jobTitle: ".NET Developer",
        period: "Sep 2020 – Dec 2020 (4 mos)",
        location: "Remote",
        category: "enterprise",
        badge: "Web Modernization",
        accentColor: "slate",
        branch: "main",
        summaryHtml: "Contributed to the modernization and renewal of the Vacations Innovation web application, merging system functionalities from a recently acquired company.",
        techStack: [
            "C#", "ASP.NET Framework", "HTML", "CSS", "JavaScript", "Git", "Web Development"
        ]
    },
    {
        organization: "Conexa",
        jobTitle: "Consultant / Engineer",
        period: "Mar 2020 – Sep 2020 (7 mos)",
        location: "Goiânia, Goiás, Brazil",
        category: "enterprise",
        badge: "Blockchain & Microservices",
        accentColor: "purple",
        branch: "main",
        highlights: [
            'Built backend infra for <strong class="text-white">Assinei</strong> (digital signatures for agribusiness), leveraging Azure Blockchain to secure signature workflows.',
            'Mentored team members and co-developed microservices supporting high traffic (<strong class="text-white">10k+ users</strong>) using RESTful design & Agile/Scrum.'
        ],
        techStack: [
            ".NET Core", "ASP.NET MVC", "Xamarin.Forms", "React.js", "Electron", "Docker",
            "Kubernetes", "RabbitMQ", "CI/CD", "Git", "Azure Boards", "Azure Artifacts",
            "Azure Storage", "Azure Key Vault", "Azure Blockchain Workbench", "Azure SQL Server"
        ]
    },
    {
        organization: "Freelancer Software Engineer",
        jobTitle: "Fractional Architect & Lead Engineer",
        period: "Feb 2016 – Mar 2020 (4 yrs 2 mos)",
        location: "Goiânia, Goiás, Brazil",
        category: "freelance",
        badge: "Independent Consulting",
        accentColor: "amber",
        branch: "consulting",
        summaryHtml: "Partnered with startups and scaling businesses as a Fractional Architect and Lead Engineer to build, modernize, and operate production applications serving active end users. Led greenfield architectures from scratch and evolved existing platforms across mobile, web, cloud APIs, e-commerce, and blockchain ecosystems.",
        techStack: [
            "C#", "Desktop Development", "Xamarin", ".NET", ".NET Core", "Swift",
            "Objective-C", "iOS Development", "Java", "Android Development",
            "Facebook SDK", "Google Maps SDK", "HTML", "CSS", "JavaScript",
            "React Native", "React", "PHP", "WordPress", "Git",
            "Azure Blockchain", "WooCommerce"
        ]
    },
    {
        organization: "Crossover for Work",
        jobTitle: "C# Software Engineer",
        period: "Jun 2018 – May 2019 (1 yr)",
        location: "Remote",
        category: "enterprise",
        badge: "Refactoring & Stabilization",
        accentColor: "sky",
        branch: "main",
        summaryHtml: "Executed systemic code refactoring and authored comprehensive unit test suites as part of the core software cleanup and stabilization process for applications acquired by ESW Capital LLC.",
        techStack: [
            "C#", "Xamarin", "Desktop Development", ".NET", ".NET Core", "Git"
        ]
    },
    {
        organization: "BB Tecnologia",
        jobTitle: "Mobile Software Engineer",
        period: "Apr 2018 – Jun 2018 (3 mos)",
        location: "Goiânia, Goiás, Brazil",
        category: "mobile",
        badge: "FinTech Banking Mobile",
        accentColor: "emerald",
        branch: "main",
        summaryHtml: 'Engineered native mobile app features and performance improvements for Bank of Brazil, specifically driving the development of the "vehicle-guaranteed loan" functionality.',
        techStack: [
            "Java", "Android Development", "iOS Development", "JUnit", "Git"
        ]
    },
    {
        organization: "SIAGRI",
        jobTitle: "Mobile Software Engineer",
        period: "Jun 2017 – Aug 2017 (3 mos)",
        location: "Goiânia, Goiás, Brazil",
        category: "mobile",
        badge: "AgTech Mobile",
        accentColor: "emerald",
        branch: "main",
        summaryHtml: "Created and maintained Xamarin.Forms and .NET apps for the company, including apps APIs and ETL integration using C#. Apps: SIAGRI Algodoeira (cotton harvesting) and Agroscore (measuring agribusiness inputs and outputs).",
        techStack: [
            "C#", "Xamarin", ".NET", ".NET Core", "Razor", "HTML", "CSS",
            "JavaScript", "Git", "Data Extraction", "REST APIs", "SOAP"
        ]
    },
    {
        organization: "Supera Tecnologia",
        jobTitle: "Software Engineer / Lead & Intern",
        period: "Dec 2012 – Jan 2016 (3 yrs 2 mos)",
        location: "Goiânia, Goiás, Brazil",
        category: "mobile",
        badge: "Engineering Lead & Intern",
        accentColor: "indigo",
        branch: "main",
        highlights: [
            { title: "Software Engineer / Team Lead (Dec 2013 – Jan 2016)", description: "Architected iOS and Windows Phone applications, directing the complete mobile production lifecycle from initial concept through performance tuning. Key apps: WayTaxi, SiM RMTC." },
            { title: "Mobile Developer Intern (Dec 2012 – Nov 2013)", description: "Co-developed iOS applications (WayTaxi), contributing to interface design, testing workflows, and performance optimization." }
        ],
        techStack: [
            "Objective-C", "Swift", "iOS Development", "C#", "Windows Phone Development",
            "PHP", "Git", "Desktop Development", "Function Points",
            "Facebook SDK", "Google Maps SDK", "REST APIs"
        ]
    }
];

/**
 * Structured Technology Ecosystem Data Array
 * Add, edit, or reorder categories and skills here.
 */
const ecosystemCategories = [
    {
        title: "Backend, Cloud & Databases",
        accentColor: "sky",
        icon: "server",
        skills: [
            "C#", ".NET Core", ".NET Framework", "ASP.NET MVC", "PHP",
            "STS (Security Token Service)", "Microsoft Entra ID",
            "MSSQL", "SQL", "Azure SQL Server",
            "Azure Functions", "Azure Storage", "Azure Key Vault",
            "Azure Blockchain Workbench", "Docker", "Kubernetes",
            "RabbitMQ", "Microservices Architecture", "REST APIs", "SOAP"
        ]
    },
    {
        title: "Frontend, Mobile & Desktop",
        accentColor: "indigo",
        icon: "device",
        skills: [
            "React.js", "React Native", "JavaScript", "HTML5 / CSS3",
            "Razor", "Electron", "Xamarin.Forms", "Xamarin",
            "Swift", "Objective-C", "iOS Native",
            "Java", "Android Native", "Windows Phone", "WordPress"
        ]
    },
    {
        title: "DevOps, Testing & Tooling",
        accentColor: "purple",
        icon: "cog",
        skills: [
            "Git", "CI/CD with Azure DevOps", "Azure Boards",
            "Azure Artifacts", "TFS", "GitHub Copilot",
            "Apache JMeter", "JUnit", "Facebook SDK",
            "Google Maps SDK", "WooCommerce",
            "Data Extraction / ETL", "Function Points"
        ]
    }
];

const accentStyles = {
    sky: {
        cardHover: "hover:border-sky-500/60 glow-effect",
        badge: "bg-sky-500/10 text-sky-400 border-sky-500/20 font-semibold",
        location: "text-sky-400",
        heading: "text-sky-400"
    },
    indigo: {
        cardHover: "hover:border-indigo-500/60 glow-effect",
        badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20 font-semibold",
        location: "text-indigo-400",
        heading: "text-indigo-400"
    },
    purple: {
        cardHover: "hover:border-purple-500/60 glow-effect",
        badge: "bg-purple-500/10 text-purple-400 border-purple-500/20 font-semibold",
        location: "text-purple-400",
        heading: "text-purple-400"
    },
    emerald: {
        cardHover: "hover:border-emerald-500/60 glow-effect",
        badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 font-semibold",
        location: "text-emerald-400",
        heading: "text-emerald-400"
    },
    slate: {
        cardHover: "hover:border-slate-500/60",
        badge: "bg-slate-800 text-slate-300 border-slate-700 font-semibold",
        location: "text-slate-400",
        heading: "text-slate-300"
    },
    amber: {
        cardHover: "border-2 border-amber-500/60 freelance-stripes glow-effect-amber",
        badge: "bg-amber-500/15 text-amber-300 border-amber-500/30 font-semibold",
        location: "text-amber-400",
        heading: "text-amber-400"
    }
};

const icons = {
    calendar: `<svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
    pin: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    globe: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>`,
    server: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>`,
    device: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>`,
    cog: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`
};

function renderExperiences() {
    const container = document.getElementById('timeline-entries');
    if (!container) return;

    container.innerHTML = experiences.map(exp => {
        const style = accentStyles[exp.accentColor] || accentStyles.sky;
        const isConsulting = exp.branch === 'consulting';
        const locIcon = exp.location.toLowerCase() === 'remote' ? icons.globe : icons.pin;

        const headerHtml = `
            <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span class="px-2.5 py-0.5 rounded-md text-xs ${style.badge} border">${exp.badge}</span>
                <span class="text-xs font-medium text-slate-400 flex items-center gap-1">
                    ${icons.calendar}
                    ${exp.period}
                </span>
            </div>
        `;

        const summaryHtml = exp.summaryHtml
            ? `<p class="text-slate-300 ${exp.highlights ? 'text-sm mb-4' : 'text-xs sm:text-sm'} leading-relaxed">${exp.summaryHtml}</p>`
            : '';

        let highlightsHtml = '';
        if (exp.highlights && exp.highlights.length > 0) {
            const listItems = exp.highlights.map(item => {
                if (typeof item === 'string') return `<li>${item}</li>`;
                return `<li><strong class="text-white">${item.title}:</strong> ${item.description}</li>`;
            }).join('');

            highlightsHtml = exp.highlightsSectionTitle
                ? `
                    <div class="space-y-2 text-sm text-slate-300 border-t border-slate-800 pt-4">
                        <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">${exp.highlightsSectionTitle}</h4>
                        <ul class="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-300">${listItems}</ul>
                    </div>
                `
                : `<ul class="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-300">${listItems}</ul>`;
        }

        const techChipsHtml = (exp.techStack || [])
            .map(tech => `<span class="tech-badge-chip">${tech}</span>`)
            .join('');

        const cardClasses = isConsulting
            ? `w-full bg-slate-850 ${style.cardHover} rounded-2xl p-6 shadow-2xl transition-all duration-300`
            : `w-full bg-slate-850 border border-slate-700/80 ${style.cardHover} rounded-2xl p-6 shadow-xl transition-all duration-300`;

        return `
            <div class="timeline-item ${exp.category} role-card relative flex items-start pl-[56px] sm:pl-[76px]"
                 data-category="${exp.category}"
                 data-branch="${exp.branch}"
                 data-org="${exp.organization}">
                <div class="node-anchor absolute left-0 top-7 w-[56px] sm:w-[76px] h-6 pointer-events-none"></div>

                <div class="${cardClasses}">
                    ${headerHtml}

                    <h3 class="text-xl font-bold text-white flex flex-wrap items-center gap-2">
                        ${exp.organization}
                        <span class="text-sm font-normal ${isConsulting ? 'text-amber-300' : 'text-slate-400'}">| ${exp.jobTitle}</span>
                    </h3>
                    <p class="text-xs ${style.location} font-medium ${exp.highlightsSectionTitle ? 'mb-4' : 'mb-3'} flex items-center gap-1">
                        ${locIcon}
                        ${exp.location}
                    </p>

                    ${summaryHtml}
                    ${highlightsHtml}

                    <div class="flex flex-wrap gap-1.5 ${exp.highlightsSectionTitle ? 'mt-5' : 'mt-4'} border-t border-slate-800/80 pt-4">
                        ${techChipsHtml}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderEcosystem() {
    const grid = document.getElementById('ecosystem-grid');
    if (!grid) return;

    grid.innerHTML = ecosystemCategories.map(cat => {
        const style = accentStyles[cat.accentColor] || accentStyles.sky;
        const iconSvg = icons[cat.icon] || icons.server;
        const chipsHtml = (cat.skills || [])
            .map(skill => `<span class="tech-badge-chip">${skill}</span>`)
            .join('');

        return `
            <div class="bg-slate-850 border border-slate-800 rounded-2xl p-5 space-y-3">
                <div class="flex items-center space-x-2 ${style.heading} font-bold text-sm border-b border-slate-800 pb-2">
                    ${iconSvg}
                    <span>${cat.title}</span>
                </div>
                <div class="flex flex-wrap gap-1.5">
                    ${chipsHtml}
                </div>
            </div>
        `;
    }).join('');
}

function createSvgElement(tag, attrs) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const [key, val] of Object.entries(attrs)) {
        el.setAttribute(key, val);
    }
    return el;
}

function drawBranchedTimeline() {
    const wrapper = document.getElementById('timeline-wrapper');
    const svg = document.getElementById('branch-graph-svg');
    const edgesLayer = document.getElementById('graph-edges-layer');
    const nodesLayer = document.getElementById('graph-nodes-layer');
    if (!wrapper || !svg || !edgesLayer || !nodesLayer) return;

    edgesLayer.innerHTML = '';
    nodesLayer.innerHTML = '';

    const wrapperRect = wrapper.getBoundingClientRect();
    const isDesktop = window.innerWidth >= 640;
    const railWidth = isDesktop ? 76 : 56;
    const mainX = isDesktop ? 24 : 18;
    const branchX = isDesktop ? 52 : 38;

    svg.setAttribute('viewBox', `0 0 ${railWidth} ${wrapperRect.height}`);

    const visibleCards = Array.from(document.querySelectorAll('.role-card'))
        .filter(card => card.style.display !== 'none');

    if (visibleCards.length === 0) return;

    const nodes = visibleCards.map((card, idx) => {
        const anchor = card.querySelector('.node-anchor') || card;
        const rect = anchor.getBoundingClientRect();
        const y = (rect.top - wrapperRect.top) + (rect.height / 2);
        return {
            y,
            branch: card.getAttribute('data-branch'),
            org: card.getAttribute('data-org'),
            isFirst: idx === 0
        };
    });

    const mainCommits = nodes.filter(c => c.branch === 'main');
    const consultingCommit = nodes.find(c => c.branch === 'consulting');
    const conexaNode = mainCommits.find(c => c.org === 'Conexa');
    const superaNode = mainCommits.find(c => c.org === 'Supera Tecnologia');

    // 1. Primary vertical career track line
    if (mainCommits.length > 1) {
        edgesLayer.appendChild(createSvgElement('line', {
            x1: mainX,
            y1: mainCommits[0].y,
            x2: mainX,
            y2: mainCommits[mainCommits.length - 1].y,
            stroke: 'url(#track-main-grad)',
            'stroke-width': '3.5',
            'stroke-linecap': 'round'
        }));
    }

    // 2. Parallel consulting track + smooth Bézier fork & merge curves
    let mergeTargetNode = null;
    if (consultingCommit) {
        if (mainCommits.length === 0) {
            edgesLayer.appendChild(createSvgElement('line', {
                x1: branchX,
                y1: Math.max(12, consultingCommit.y - 36),
                x2: branchX,
                y2: consultingCommit.y + 36,
                stroke: '#f59e0b',
                'stroke-width': '3.5',
                'stroke-linecap': 'round'
            }));
        } else {
            mergeTargetNode = conexaNode ||
                [...mainCommits].reverse().find(c => c.y < consultingCommit.y) ||
                mainCommits[0];

            const forkTargetNode = superaNode ||
                mainCommits.find(c => c.y > consultingCommit.y) ||
                mainCommits[mainCommits.length - 1];

            const mergeY = mergeTargetNode.y;
            const parallelCommits = mainCommits.filter(c => c.y >= mergeY && c.y <= consultingCommit.y);

            const topParallelY = parallelCommits.length > 0
                ? Math.max(mergeY + 46, parallelCommits[0].y - 16)
                : Math.min(consultingCommit.y, mergeY + 52);

            const forkOriginY = (forkTargetNode && forkTargetNode.y > consultingCommit.y)
                ? Math.max(consultingCommit.y + 42, forkTargetNode.y - 44)
                : forkTargetNode.y;

            const bottomParallelY = Math.max(consultingCommit.y, forkOriginY - 44);

            // Upper merge curve: consulting track -> primary track at Conexa
            const mergePath = `M ${branchX} ${topParallelY} C ${branchX} ${topParallelY - 24}, ${mainX} ${mergeY + 24}, ${mainX} ${mergeY}`;
            edgesLayer.appendChild(createSvgElement('path', {
                d: mergePath,
                fill: 'none',
                stroke: '#f59e0b',
                'stroke-width': '3',
                'stroke-linecap': 'round'
            }));

            // Parallel vertical consulting track segment
            if (bottomParallelY > topParallelY) {
                edgesLayer.appendChild(createSvgElement('line', {
                    x1: branchX,
                    y1: topParallelY,
                    x2: branchX,
                    y2: bottomParallelY,
                    stroke: '#f59e0b',
                    'stroke-width': '3',
                    'stroke-linecap': 'round'
                }));
            }

            // Lower fork curve: primary track above Supera -> consulting track
            const forkPath = `M ${mainX} ${forkOriginY} C ${mainX} ${forkOriginY - 22}, ${branchX} ${bottomParallelY + 22}, ${branchX} ${bottomParallelY}`;
            edgesLayer.appendChild(createSvgElement('path', {
                d: forkPath,
                fill: 'none',
                stroke: '#f59e0b',
                'stroke-width': '3',
                'stroke-linecap': 'round'
            }));

            // Fork junction indicator node on primary track
            nodesLayer.appendChild(createSvgElement('circle', {
                cx: mainX,
                cy: forkOriginY,
                r: '4',
                fill: '#0b1120',
                stroke: '#f59e0b',
                'stroke-width': '2.5'
            }));
        }
    }

    // 3. Horizontal connector lines & glowing timeline nodes
    nodes.forEach(c => {
        const isConsulting = c.branch === 'consulting';
        const isTopNode = c.isFirst && !isConsulting;
        const isMergeNode = mergeTargetNode && c === mergeTargetNode;
        const cx = isConsulting ? branchX : mainX;
        const strokeColor = isConsulting ? '#f59e0b' : (isMergeNode ? '#a855f7' : '#38bdf8');

        edgesLayer.appendChild(createSvgElement('line', {
            x1: cx,
            y1: c.y,
            x2: railWidth,
            y2: c.y,
            stroke: strokeColor,
            'stroke-width': '1.5',
            'stroke-opacity': '0.45',
            'stroke-dasharray': isConsulting ? '3 3' : 'none'
        }));

        if (isTopNode || isMergeNode || isConsulting) {
            nodesLayer.appendChild(createSvgElement('circle', {
                cx,
                cy: c.y,
                r: isTopNode ? '11' : '9.5',
                fill: 'none',
                stroke: (isConsulting || isMergeNode) ? 'rgba(245, 158, 11, 0.35)' : 'rgba(56, 189, 248, 0.35)',
                'stroke-width': '2'
            }));
        }

        nodesLayer.appendChild(createSvgElement('circle', {
            cx,
            cy: c.y,
            r: isTopNode ? '7' : '6',
            fill: '#0b1120',
            stroke: strokeColor,
            'stroke-width': '3',
            filter: isConsulting ? 'url(#glow-amber)' : (isTopNode ? 'url(#glow-sky)' : 'none')
        }));

        nodesLayer.appendChild(createSvgElement('circle', {
            cx,
            cy: c.y,
            r: '2.2',
            fill: isConsulting ? '#fbbf24' : '#ffffff'
        }));
    });
}

function filterRoles(category) {
    const cards = document.querySelectorAll('.role-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
        btn.classList.remove('bg-sky-500', 'text-white', 'shadow-sm');
        btn.classList.add('bg-slate-800', 'text-slate-300');
    });

    const activeBtn = document.getElementById('btn-' + category);
    if (activeBtn) {
        activeBtn.classList.remove('bg-slate-800', 'text-slate-300');
        activeBtn.classList.add('bg-sky-500', 'text-white', 'shadow-sm');
    }

    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'flex';
            setTimeout(() => { card.style.opacity = '1'; }, 10);
        } else {
            card.style.opacity = '0';
            card.style.display = 'none';
        }
    });

    requestAnimationFrame(drawBranchedTimeline);
}

window.addEventListener('DOMContentLoaded', () => {
    renderExperiences();
    renderEcosystem();
    drawBranchedTimeline();
    const entries = document.getElementById('timeline-entries');
    if (entries && typeof ResizeObserver !== 'undefined') {
        const observer = new ResizeObserver(() => requestAnimationFrame(drawBranchedTimeline));
        observer.observe(entries);
    }
});
window.addEventListener('load', () => requestAnimationFrame(drawBranchedTimeline));
window.addEventListener('resize', () => requestAnimationFrame(drawBranchedTimeline));
