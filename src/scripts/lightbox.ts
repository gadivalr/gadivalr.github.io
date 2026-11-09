import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

function getCaption(img: HTMLImageElement): string {
  const figure = img.closest('figure');
  if (figure) {
    const cap = figure.querySelector('figcaption');
    if (cap) return (cap.textContent || '').trim();
  }
  return img.getAttribute('alt') || '';
}

function collectItems() {
  const imgs = Array.from(document.querySelectorAll<HTMLImageElement>('img[data-zoomable], .blog-prose img'));
  return imgs.map((img) => {
    if (!img.hasAttribute('data-zoomable')) {
      img.setAttribute('data-zoomable', '');
      img.setAttribute('tabindex', '0');
      img.setAttribute('role', 'button');
      img.style.cursor = 'zoom-in';
      if (!img.getAttribute('aria-label')) img.setAttribute('aria-label', 'Ampliar figura');
    }
    return {
      src: img.currentSrc || img.src,
      w: img.naturalWidth || 1600,
      h: img.naturalHeight || 900,
      msrc: img.currentSrc || img.src,
      element: img,
      caption: getCaption(img),
    };
  });
}

let lightbox: PhotoSwipeLightbox | null = null;

function openFromImage(img: HTMLImageElement) {
  const items = collectItems();
  const index = items.findIndex((it) => it.element === img);
  if (index < 0) return;

  // resolve dimensions if missing
  const ensureSize = (item: (typeof items)[number]) =>
    new Promise<void>((resolve) => {
      if (item.w > 0 && item.h > 0 && item.element.naturalWidth) {
        item.w = item.element.naturalWidth;
        item.h = item.element.naturalHeight;
        resolve();
        return;
      }
      const probe = new Image();
      probe.onload = () => {
        item.w = probe.naturalWidth || item.w;
        item.h = probe.naturalHeight || item.h;
        resolve();
      };
      probe.onerror = () => resolve();
      probe.src = item.src;
    });

  void ensureSize(items[index]).then(() => {
    if (lightbox) {
      lightbox.destroy();
      lightbox = null;
    }
    const isMobile = window.innerWidth < 768;
    lightbox = new PhotoSwipeLightbox({
      dataSource: items.map((it) => ({ src: it.src, width: it.w, height: it.h, caption: it.caption })),
      index,
      showHideAnimationType: 'fade',
      showAnimationDuration: 150,
      hideAnimationDuration: 150,
      bgOpacity: isMobile ? 0.97 : 0.92,
      pswpModule: () => import('photoswipe'),
      padding: { top: 20, bottom: 72, left: isMobile ? 8 : 12, right: isMobile ? 8 : 12 },
      wheelToZoom: true,
      pinchToClose: false,
      initialZoomLevel: 'fit',
      secondaryZoomLevel: 2,
      maxZoomLevel: 4,
    });

    lightbox.on('uiRegister', function () {
      lightbox?.pswp?.ui?.registerElement({
        name: 'custom-caption',
        order: 9,
        isButton: false,
        appendTo: 'root',
        html: '',
        onInit: (el, pswp) => {
          el.className = 'pswp__caption-bar';
          const set = () => {
            const slide = pswp.currSlide?.data as { caption?: string } | undefined;
            el.textContent = slide?.caption || '';
            (el as HTMLElement).style.display = el.textContent ? 'block' : 'none';
          };
          pswp.on('change', set);
          set();
        },
      });
    });

    lightbox.init();
    lightbox.loadAndOpen(index);
  });
}

function getVideoCaption(el: HTMLElement): string {
  const fromData = el.getAttribute('data-caption');
  if (fromData) return fromData;
  const container = el.closest('.space-y-2') || el.closest('figure') || el.parentElement;
  if (container) {
    const cap = container.querySelector('figcaption, p.font-mono');
    if (cap) return (cap.textContent || '').trim();
  }
  return el.getAttribute('aria-label') || '';
}

let videoDialog: HTMLDialogElement | null = null;
let videoPushedHistory = false;

function ensureVideoDialog(): HTMLDialogElement {
  if (videoDialog) return videoDialog;
  const d = document.createElement('dialog');
  d.className = 'video-lightbox';
  d.setAttribute('aria-label', 'Video');
  d.innerHTML = `
    <div class="video-lightbox-inner">
      <button type="button" class="video-lightbox-close" aria-label="Cerrar" data-vclose>&times;</button>
      <div class="video-lightbox-stage">
        <video class="video-lightbox-player" controls playsinline preload="metadata"></video>
      </div>
      <p class="video-lightbox-caption"></p>
    </div>`;
  document.body.appendChild(d);
  d.addEventListener('click', (e) => {
    if (e.target === d) closeVideoLightbox(true);
  });
  d.querySelector('[data-vclose]')?.addEventListener('click', () => closeVideoLightbox(true));
  d.addEventListener('close', () => {
    const v = d.querySelector('video') as HTMLVideoElement | null;
    if (v) { v.pause(); v.removeAttribute('src'); v.load(); }
    document.documentElement.style.overflow = '';
    if (videoPushedHistory) {
      videoPushedHistory = false;
      // if dialog closed via Esc, pop the state we pushed
      try { if (history.state && history.state.videoLightbox) history.back(); } catch {}
    }
  });
  videoDialog = d;
  return d;
}

function openVideoLightbox(el: HTMLElement) {
  const mp4 = el.getAttribute('data-video-mp4') || (el as HTMLVideoElement).currentSrc || (el as HTMLVideoElement).src;
  if (!mp4) return;
  const webm = el.getAttribute('data-video-webm') || '';
  const poster = el.getAttribute('data-poster') || (el as HTMLVideoElement).poster || '';
  const caption = getVideoCaption(el);
  const d = ensureVideoDialog();
  const v = d.querySelector('video') as HTMLVideoElement;
  const cap = d.querySelector('.video-lightbox-caption') as HTMLElement;
  v.innerHTML = '';
  if (webm) { const s = document.createElement('source'); s.src = webm; s.type = 'video/webm'; v.appendChild(s); }
  const s2 = document.createElement('source'); s2.src = mp4; s2.type = 'video/mp4'; v.appendChild(s2);
  v.poster = poster;
  cap.textContent = caption;
  cap.style.display = caption ? 'block' : 'none';
  document.documentElement.style.overflow = 'hidden';
  try { history.pushState({ videoLightbox: 1 }, ''); videoPushedHistory = true; } catch {}
  if (d.showModal) d.showModal(); else d.setAttribute('open', '');
  void v.play().catch(() => {});
}

function closeVideoLightbox(fromUser: boolean) {
  if (!videoDialog) return;
  if (fromUser && videoPushedHistory) {
    videoPushedHistory = false;
    try { history.back(); } catch {}
    // popstate/close handler will finish; also close if no popstate
    if (videoDialog.open) videoDialog.close();
    return;
  }
  if (videoDialog.open) videoDialog.close();
}

window.addEventListener('popstate', (e) => {
  if (videoDialog?.open) {
    videoPushedHistory = false;
    videoDialog.close();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const target = e.target as HTMLElement | null;
  const img = target?.matches?.('img[data-zoomable], .blog-prose img') ? (target as HTMLImageElement) : null;
  if (img) {
    e.preventDefault();
    openFromImage(img);
    return;
  }
  const vid = target?.closest?.('[data-zoomable-video]') as HTMLElement | null;
  if (vid && target === vid) {
    e.preventDefault();
    openVideoLightbox(vid);
  }
});

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement | null;
  if (!target) return;
  const vid = target.closest('[data-zoomable-video]') as HTMLElement | null;
  if (vid) {
    e.preventDefault();
    openVideoLightbox(vid);
    return;
  }
  const img = target.closest('img[data-zoomable], .blog-prose img') as HTMLImageElement | null;
  if (img) {
    e.preventDefault();
    openFromImage(img);
  }
});
