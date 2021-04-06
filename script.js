/*
  ____          _                    _   _                 _____     _     
 / ___|   _ ___| |_ ___  _ __ ___   | \ | | _____      __ |_   _|_ _| |__  
| |  | | | / __| __/ _ \| '_ ` _ \  |  \| |/ _ \ \ /\ / /   | |/ _` | '_ \ 
| |__| |_| \__ \ || (_) | | | | | | | |\  |  __/\ V  V /    | | (_| | |_) |
 \____\__,_|___/\__\___/|_| |_| |_| |_| \_|\___| \_/\_/     |_|\__,_|_.__/ 

 */
const bookmarks = [
  {
    title: "YouTube",
    src: "youtube-brands.svg",
    filter: "invert(18%) sepia(80%) saturate(6035%) hue-rotate(355deg) brightness(103%) contrast(79%)",
    href: "https://youtube.com",
  },
  {
    title: "Netflix",
    src: "netflix.svg",
    filter: "invert(29%) sepia(91%) saturate(5547%) hue-rotate(346deg) brightness(84%) contrast(119%)",
    href: "https://netflix.com",
  },
  {
    title: "Reddit",
    src: "reddit-alien-brands.svg",
    filter: "invert(37%) sepia(97%) saturate(2308%) hue-rotate(360deg) brightness(101%) contrast(106%)",
    href: "https://reddit.com",
  },
  {
    title: "Messenger",
    src: "facebook-messenger-brands.svg",
    filter: "invert(34%) sepia(6%) saturate(5493%) hue-rotate(183deg) brightness(96%) contrast(92%)",
    href: "https://messenger.com",
  },
  {
    title: "Amazon",
    src: "amazon-brands.svg",
    filter: "invert(61%) sepia(77%) saturate(2769%) hue-rotate(2deg) brightness(107%) contrast(102%)",
    href: "https://amazon.ca",
  },
  {
    title: "Gmail",
    src: "icons8-gmail.svg",
    filter: "invert(41%) sepia(86%) saturate(1592%) hue-rotate(333deg) brightness(84%) contrast(105%)",
    href: "https://mail.google.com",
  },
  {
    title: "Acorn",
    src: "uoft-tree.png",
    filter: "invert(12%) sepia(29%) saturate(4893%) hue-rotate(200deg) brightness(89%) contrast(107%)",
    href: "https://acorn.utoronto.ca",
  },
  {
    title: "Quercus",
    src: "quercus-log.png",
    filter: "invert(30%) sepia(70%) saturate(2918%) hue-rotate(347deg) brightness(92%) contrast(92%)",
    href: "https://q.utoronto.ca",
  },
  {
    title: "GitHub",
    src: "github-brands.svg",
    filter: "invert(79%) sepia(2%) saturate(3501%) hue-rotate(197deg) brightness(124%) contrast(98%)",
    href: "https://github.com",
  },
  {
    title: "OneDrive",
    src: "onedrive.svg",
    filter: "brightness(0) saturate(100%) invert(27%) sepia(82%) saturate(2999%) hue-rotate(191deg) brightness(95%) contrast(101%)",
    href: "https://utoronto-my.sharepoint.com/personal/navinn_ravindaran_mail_utoronto_ca/_layouts/15/onedrive.aspx",
  },
  {
    title: "Google Drive",
    src: "google-drive-brands.svg",
    filter: "invert(48%) sepia(61%) saturate(6553%) hue-rotate(135deg) brightness(97%) contrast(88%)",
    href: "https://drive.google.com",
  },
  {
    title: "Outlook",
    src: "outlook.svg",
    filter: "brightness(0) saturate(100%) invert(27%) sepia(82%) saturate(2999%) hue-rotate(191deg) brightness(95%) contrast(101%)",
    href: "https://outlook.office.com/",
  },
];

document.getElementById("inner").append(
  ...bookmarks.map(({ title, src, href, filter }) => {
    const link = document.createElement("a");
    const button = document.createElement("div");
    const icon = document.createElement("img");

    icon.src = `https://raw.githubusercontent.com/navn-r/newtab/main/img/${src}`;
    icon.className = "icon";

    button.title = title;
    button.className = "button";
    button.appendChild(icon);

    button.style.cssText += `filter: ${filter};`;
    

    link.href = href;
    link.appendChild(button);

    return link;
  })
);
