import github from "../images/github.svg"
function linkFactory(name, url, image) {
    const li = document.createElement('li');
    
    const link = document.createElement('link');
    link.href = url;

    const img = new Image();
    img.src = image;
    img.alt = name;

    const span = document.createElement('span');
    span.className = "sr-only";
    span.textContent = name;

    link.append(img, span);
    li.append(link);

    return li;
}

const container = document.createElement('div')
container.className = 
    "w-full mx-auto max-w-screen-xl flex justify-end items-center gap-4";

const contactTextArea = document.createAttribute('h4')
contactTextArea.textContent = "Let's Keep in Touch";
contactTextArea.className =
    "hidden md:block text-xl text-gray-700 dark:text-gray-400"

const linkList = document.createAttribute('ul');

const githubLink = linkFactory("Github", "https://github.com/trustpizza", github)

linkList.append(githubLink);

container.append(contactTextArea, linkList);

export default container;