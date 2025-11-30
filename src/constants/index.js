const navLinks = [
  {
    id: 1,
    name: "Files",
    type: "files",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "files",
    name: "Files", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "firefox",
    name: "firefox", // was "Safari"
    icon: "firefox.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Terminal", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Hono"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/JavaScript-Mastery-Pro",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://jsmastery.com/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/jsmasterypro",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "picture1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.jpg",
    },
    {
      id: 2,
      name: "picture2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/me2.jpg",
    },
    {
      id: 3,
      name: "picture3.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/me3.jpg",
    },
    {
      id: 4,
      name: "picture4.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-22 right-20",
      imageUrl: "/images/me5.jpg",
    },

    {
      id: 5,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Behind the Code",
      image: "/images/me4.jpg",
      description: [
        "I'm a self taught full-stack developer focused on building modern, efficient, and scalable applications.",
        "I learn by doing  solving problems, experimenting with ideas, and improving through real projects rather than theory alone.",
        "My goal is to write clean, maintainable code while using modern tools, best practices, and up-to date technologies across both frontend and backend.",
        "I'm also preparing to transition into cybersecurity, combining development knowledge with a growing interest in security, ethical hacking, and system protection.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  files: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  firefox: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

const bootSteps = [
  "[OK] Initializing BIOS...",
  "[OK] Performing memory check...",
  "[OK] Detected 16384 MB RAM",
  "[OK] Checking CPU: Intel Core i7-9750H",
  "[OK] CPU speed: 2.6 GHz",
  "[OK] L1 cache: 32 KB, L2 cache: 256 KB, L3 cache: 12 MB",
  "[OK] Initializing chipset...",
  "[OK] Detecting PCI devices...",
  "[OK] PCI Bus 0: Host bridge found",
  "[OK] PCI Bus 0:00:01: Ethernet controller found",
  "[OK] PCI Bus 0:00:02: USB controller found",
  "[OK] PCI Bus 0:00:03: SATA controller found",
  "[OK] USB initialization complete",
  "[OK] Detecting storage devices...",
  "[OK] SATA0: 512 GB SSD detected",
  "[OK] SATA1: 1 TB HDD detected",
  "[OK] Keyboard detected",
  "[OK] Mouse detected",
  "[OK] Video card detected: NVIDIA GTX 1660 Ti",
  "[OK] Checking system timers...",
  "[OK] Checking ACPI tables...",
  "[OK] Loading UEFI modules...",
  "[OK] Secure Boot: Enabled",
  "[OK] Boot order: SSD > HDD > USB > Network",
  "[OK] Initializing bootloader...",
  "[OK] GRUB detected: /boot/vmlinuz-linux",
  "[OK] Loading kernel...",
  "[OK] Kernel decompressing...",
  "[OK] Initializing kernel...",
  "[OK] Setting up memory management...",
  "[OK] Detecting CPU features...",
  "[OK] Enabling x86_64 capabilities...",
  "[OK] Initializing interrupts...",
  "[OK] Initializing scheduler...",
  "[OK] Mounting root filesystem...",
  "[OK] Root filesystem: EXT4, 512 GB SSD",
  "[OK] Initializing device drivers...",
  "[OK] PCI: Enabling bridge 00:01",
  "[OK] USB: Scanning ports...",
  "[OK] USB devices enumerated",
  "[OK] SCSI subsystem initialized",
  "[OK] SATA0: Mounted successfully",
  "[OK] SATA1: Mounted successfully",
  "[OK] Random number generator initialized",
  "[OK] Starting init system: systemd",
  "[OK] systemd[1]: Inserted module 'autofs4'",
  "[OK] systemd[1]: Starting Network Manager...",
  "[OK] systemd[1]: Starting Bluetooth service...",
  "[OK] systemd[1]: Starting graphical interface...",
  "[OK] systemd[1]: Started Network Manager",
  "[OK] systemd[1]: Started Bluetooth service",
  "[OK] systemd[1]: Reached target Multi-User System",
  "[OK] systemd-logind[145]: New seat seat0 added",
  "[OK] systemd[1]: Starting user session...",
  "[OK] systemd[1]: User session started",
  "[OK] vga: framebuffer init 1024x768@60Hz",
  "[OK] Starting X server (display manager)...",
  "[OK] Loading desktop environment...",
  "[OK] Applying user settings...",
  "[OK] Starting services: audio, bluetooth, notifications...",
  "[OK] Mounting user data directories...",
  "[OK] Initializing clipboard manager...",
  "[OK] Starting file indexer...",
  "[OK] Restoring wallpaper and theme...",
  "[OK] Launching Dock...",
  "[OK] Launching Navbar...",
  "[OK] Starting window manager...",
  "[OK] Loading user session...",
  "[OK] Welcome to Archpholio!",
];

export { INITIAL_Z_INDEX, WINDOW_CONFIG, bootSteps };
