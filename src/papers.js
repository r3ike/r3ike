fetch('./src/papers/papers.json')
  .then(res => res.json())
  .then(papers => {
    const container = document.getElementById('latest-papers');
    const container_all = document.getElementById('all-papers');

    if (container_all) {
        papers
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .forEach(p => {
            container_all.innerHTML += `
              <div class="paper-card">
                <h3>${p.title}</h3>
                <p>${p.abstract}</p>
    
                <div class="paper-meta">
                  <span class="tech">${p.tags.join(' • ')}</span>
                  <a href="./assets/papers/${p.file}" download>PDF</a>
                </div>
              </div>
            `;
          });
        
    }

    if (container) {
        
        papers
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 3)
          .forEach(p => {
            container.innerHTML += `
              <div class="paper-card">
                <h3>${p.title}</h3>
                <p>${p.abstract}</p>
    
                <div class="paper-meta">
                  <span class="tech">${p.tags.join(' • ')}</span>
                  <a href="./assets/papers/${p.file}" download>PDF</a>
                </div>
              </div>
            `;
          });
    }

  });

  
