'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "94bea7f4e8c0b53ccaeb5db70492eada",
".git/config": "0c54c0ca87a269168a417a588913c177",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "44f87c94dd2c21e7b49bcbe08e42a3c6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "906e78b0d226f3ac3bfa0462af1fd6f5",
".git/logs/refs/heads/master": "906e78b0d226f3ac3bfa0462af1fd6f5",
".git/logs/refs/remotes/origin/master": "34eb3cfc8f9dec1ebd0602af051081ae",
".git/objects/0e/9c842a2943bc31cbad0c2e815408d9b42294a1": "e0132eca9f63e0e50b67dafb371c1f08",
".git/objects/1b/147d947348d1dbbfd1e6f9d70a7b3b9aefb792": "a9bf55e2d3a31591d7013c43464cc68a",
".git/objects/1c/3415c4a4c6058e56cacd82440663416ac64fed": "0bd851acadab92dc117eade3058fffd9",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/2b/8318559062626e0f4ffe02a52004d0f32d421c": "a314c936bca64b9b38363fd646d8140f",
".git/objects/30/47166277d88e83c9a2c5de668fe9ab40cf647b": "690af4152267233fe9e0697872bbee5c",
".git/objects/32/3e7f4be3353d0b33bcbf362500e75fbc6978eb": "6a7034b3f9ef993259a934cd707af5d0",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/37/e14e378a5d4530588443d85fb93fc41a08be36": "050759d3cdfc50180b25541b7e979588",
".git/objects/47/86b1f5eac53e5cbf517073dda69b3a15ddd056": "2a79c5b129ca46666602b8ba83221020",
".git/objects/4c/ed9fa000f8514ba469b8c85be4c27f6e08e7f1": "1cf28f8ae051cf5600dc256b94cf8075",
".git/objects/65/63dcdf4bda680cdd898542b2b9fb5bf80b124a": "631a7f57bf65d6eca32574b9cdc44056",
".git/objects/68/d66288e45834ffb411f3583a7eb5fdd578fcdb": "b32606b3dd2794304038f088b5f4de37",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d0c2fe58f6eebd22277dc1b43a8af25c47b0a2": "247a5b113fd03c92f22fcf130037224f",
".git/objects/7a/fb080616364dabae40c0821f65529ab255c51f": "d436dd0817cdf9fac4a3c818aaa60822",
".git/objects/7b/7f73a553d6fee0a2613b64793a2609687ea800": "8d08b6493868f336d56d28d0d22dc1bb",
".git/objects/87/0843e9e24b5b29cbe799001c55ec0445dea4ae": "7ddd8b5cbc0af2b8ae10eef7aadacd7a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/10d713213a3aff2e0dfc335fd0840f5a684cad": "a11517164260f4569685d14bb7e19e21",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/93/bf658b1d3586f363c551295af40576594299b3": "42dc03468e1daeda115657e1fb5f4b0e",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9d/66a8b216511ef2ec7fd837a71352c9681a1a6a": "471931886a380b593eaf4db6620418de",
".git/objects/9f/68a490dcb8c5dc75e71ef92451e673786cc5a3": "ec5dc7d191eeb9e475133a0319aa59f7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/7e1c09c987737e80e5ab90cd87333f0b950ed4": "59e6082608fa4f9ca41340c297b4df15",
".git/objects/ad/6e1b3bb06c2b5354b589d2345e0d702933defd": "5c684c6528227d17c7f10de1dae1532c",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/fc84fd0c24e93bfdb64a9de72da343f4e5cd29": "d4f706c9390d48e7cff7d164396c5d37",
".git/objects/ce/cf8ba8e2ed0d3548986ace48f57bd09fa6b466": "5a7dc18c241dcf10293e1e14d59a4659",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/d10ba00157e8188b50b5e0d0fce4edd3be9bbd": "8e8319cb10ab2fe251605740461a42fe",
".git/objects/de/6f655b503a1a685c94f65de51fb75b2de4a073": "d58d6cdcef24b821a0229be7a56fbb08",
".git/objects/e1/53d5731ab577420d21fd23758bad35f9d3a166": "3998a5fbd7655277b5586e4b3f48798f",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/87238aad91874f646d50c056dfa56e6e4d54bb": "4b21e001fd3715f86088cc38e91bd440",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/991481845789e780ecf1ee0fc679d10951f75d": "0f72e7339702d0de122cc2559731ebd9",
".git/objects/fe/c1c708598015d6bbf861764c17b02d30ccff38": "b27fa7255cdd343b1ecd5c351940b976",
".git/objects/ff/0279f315ecf4b1e9218bb0e831968ceab4bce2": "81c216c602e8af789378fc3482de66bb",
".git/objects/ff/f6ede1218886f0a6490ed4e270f5268c9fa127": "fcd57325a42ad28cb7aa48c431f21ed5",
".git/refs/heads/master": "894e084d6eb489d61f7668d6540c78f0",
".git/refs/remotes/origin/master": "894e084d6eb489d61f7668d6540c78f0",
"assets/AssetManifest.json": "73e073f1fd1a2ea76a1c474f2f7e3b70",
"assets/assets/fonts/Nunito-Regular.ttf": "5f444b61c541a4b329d8b16841b4de96",
"assets/assets/icons/avataricon.png": "a5e81f19cf2c587876fd1bb08ae0249f",
"assets/assets/icons/download.pdf": "01d3e346dffd95942d5619c0e7c7888d",
"assets/assets/icons/imaicon.png": "eab49ffe08be94d9fb2d81dde809f384",
"assets/assets/icons/menu.png": "abba6ad6a8140c7e84734108e7e911e1",
"assets/FontManifest.json": "7c8eb5d4369066d36d8050154c1af682",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "69e02659a4fa5eb3830830e4d047ac08",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "007128846f17dc108062845782448938",
"/": "007128846f17dc108062845782448938",
"main.dart.js": "60b3e0191127b4a13eefc6a931ca9996",
"manifest.json": "1ac927b562d7625aa65d1f36f0e0ef73",
"version.json": "7e16d4ebb19a0059b34f89f12465db4f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
