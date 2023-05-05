"use strict";
exports.id = 48;
exports.ids = [48];
exports.modules = {

/***/ 48:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ getProjectsById),
/* harmony export */   "Yw": () => (/* binding */ getAllProjects)
/* harmony export */ });
/* unused harmony export getFilteredEvents */
const PROJECTS = [
    {
        id: "p1",
        title: "Pokedex",
        description: "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
        description_long: "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
        liveUrl: "https://www.google.com",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "p2",
        title: "Standup Shuffler",
        description: "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
        liveUrl: "https://www.google.com",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "p3",
        title: "Random Project",
        description: "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
        liveUrl: "https://www.google.com",
        image: "https://picsum.photos/200/300"
    }
];
function getAllProjects() {
    return PROJECTS;
}
function getFilteredEvents(dateFilter) {
    const { year , month  } = dateFilter;
    let filteredEvents = PROJECTS.filter((event)=>{
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
    return filteredEvents;
}
function getProjectsById(id) {
    return PROJECTS.find((project)=>project.id === id);
}


/***/ })

};
;