(() => {
  const revealItems = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        instance.unobserve(entry.target);
      });
    }, {
      rootMargin: '0px 0px -9% 0px',
      threshold: 0.1
    });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const videoShell = document.querySelector('[data-video-id]');
  const videoButton = videoShell?.querySelector('.video-poster');

  videoButton?.addEventListener('click', () => {
    const videoId = videoShell.dataset.videoId;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    iframe.title = 'Видео о пути трейдера и системе анализа золота';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    videoShell.replaceChildren(iframe);
  }, { once: true });
})();
