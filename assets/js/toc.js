document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#toc');
  const article = document.querySelector('#article-body');
  if (!container || !article) return;

  const headings = Array.from(article.querySelectorAll('h2, h3'))
    .filter(h => h.textContent.trim().length > 0);

  if (headings.length === 0) return;

  // Ensure each heading has an id
  headings.forEach(h => {
    if (!h.id) {
      h.id = h.textContent.trim().toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .substring(0, 64);
    }
  });

  // Build nested list
  const ul = document.createElement('ul');
  let currentUl = ul;
  let lastLevel = 2;

  headings.forEach(h => {
    const level = Number(h.tagName.substring(1)); // 2 or 3
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${h.id}`;
    a.textContent = h.textContent;
    li.appendChild(a);

    if (level > lastLevel) {
      const newUl = document.createElement('ul');
      currentUl.lastElementChild && currentUl.lastElementChild.appendChild(newUl);
      currentUl = newUl;
    } else if (level < lastLevel) {
      currentUl = currentUl.parentElement.closest('ul') || ul;
    }
    currentUl.appendChild(li);
    lastLevel = level;
  });

  container.appendChild(ul);

  // Scrollspy
  const navLinks = container.querySelectorAll('a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const link = container.querySelector(`a[href="#${id}"]`);
      if (link) {
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  }, { rootMargin: "0px 0px -70% 0px", threshold: 0.1 });

  headings.forEach(h => observer.observe(h));
});