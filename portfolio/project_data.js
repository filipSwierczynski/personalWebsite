const PROJECTS = [
    {
        id: 'p1',
      title: 'Pokedex',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      description_long:'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      liveUrl: 'https://www.google.com',
      
      image: 'https://picsum.photos/200/300',
      
    },
    {
        id: 'p2',
      title: 'Standup Shuffler',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      liveUrl: 'https://www.google.com',
      
      image: 'https://picsum.photos/200/300',
      
    },
    {
        id: 'p3',
      title: 'Random Project',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      liveUrl: 'https://www.google.com',
      
      image: 'https://picsum.photos/200/300',
      
    }
]

export function getAllProjects() {
    return PROJECTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = PROJECTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getProjectsById(id) {
    return PROJECTS.find((project) => project.id === id);
  }