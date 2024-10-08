const sections = ['section1', 'section2', 'section3', 'section4'];
const apiUrls = [
    'https://catfact.ninja/fact',
    'https://catfact.ninja/fact',
    'https://catfact.ninja/fact',
    'https://catfact.ninja/fact'
];

async function fetchData() {
    const fetchPromises = apiUrls.map(url => fetch(url).then(response => response.json()));
    
    try {
        const data = await Promise.all(fetchPromises);
        data.forEach((item, index) => {
            document.getElementById(sections[index]).querySelector('p').textContent = item.fact; 
        });
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
        sections.forEach(section => {
            document.getElementById(section).querySelector('p').textContent = 'Erro ao carregar dados.';
        });
    }
}

fetchData();
