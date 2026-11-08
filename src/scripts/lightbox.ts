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
    lightbox = new PhotoSwipeLightbox({
      dataSource: items.map((it) => ({ src: it.src, width: it.w, height: it.h, caption: it.caption })),
      index,
      showHideAnimationType: 'fade',
      showAnimationDuration: 150,
      hideAnimationDuration: 150,
      bgOpacity: 0.92,
      pswpModule: () => import('photoswipe'),
      padding: { top: 20, bottom: 72, left: 12, right: 12 },
      wheelToZoom: true,
      pinchToClose: false,
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

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement | null;
  if (!target) return;
  const img = target.closest('img[data-zoomable], .blog-prose img') as HTMLImageElement | null;
  if (img) {
    e.preventDefault();
    openFromImage(img);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const target = e.target as HTMLElement | null;
  const img = target?.matches?.('img[data-zoomable], .blog-prose img') ? (target as HTMLImageElement) : null;
  if (img) {
    e.preventDefault();
    openFromImage(img);
  }
});
