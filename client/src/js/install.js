// const installBtn = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener('beforeinstallprompt', (event) => {
//     if (window.matchMedia('(display-mode: standalone)').matches) {
//       installBtn.style.display = "none";
//     }
    
//     window.addEventListener('beforeinstallprompt', (event) => {
//       event.preventDefault();
//       installBtn.style.visibility = 'visible';
//       installBtn.addEventListener('click', () => {
//         event.prompt();
//         installBtn.setAttribute('disabled', true);
//         installBtn.textContent = 'Installed!';
//         });
//       });
// });

// TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener('click', async () => {
//     const promptEvent = window.deferredPrompt;
  
//     if (!promptEvent) {
//       return;
//     }
  
//     promptEvent.prompt();
  
//     window.deferredPrompt = null;
  
//     butInstall.classList.toggle('hidden', true);
//   });
  
  

// TODO: Add an handler for the `appinstalled` event
//   window.addEventListener('appinstalled', (event) => {
//     console.log('👍', 'appinstalled', event);
//   });

  const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();

  window.deferredPrompt = null;

  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});

