'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7e16d4ebb19a0059b34f89f12465db4f",
"favicon.ico": "29e761a7476828edbcb2d5f3e4d75b39",
"index.html": "1ef3ed014aac3ec3e6cdfddcaaea7710",
"/": "1ef3ed014aac3ec3e6cdfddcaaea7710",
"main.dart.js": "3bc2ac5ef59cc60a7bfce42d086de2ed",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "4c7b4315ef28ef0b316a1eaec1b117b6",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "a6fd18ddc579590009e31b64f3603d19",
"-%20Copy.last_build_id": "410380678f72637c2ef57aded9ae70f7",
"manifest.json": "1ac927b562d7625aa65d1f36f0e0ef73",
".git/ORIG_HEAD": "e753ec6d04df645f026d861213810cdb",
".git/config": "1f5ec8fb18cd717893d6701c2f435213",
".git/objects/68/3cf951659a892a98338b0e6dbc4e5fe3c99a5f": "109e9aebedbda2b0a5ee42ef8fe598b6",
".git/objects/03/69b47d58a0ec78f44e51c498520de26d8563e2": "e0a69c144e09ef6012e365b7b2424ea2",
".git/objects/58/377c62faeb190efe828376f0438dd176809f6e": "2d5b94d86172698f5a168d16c265f2e5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/3bb12d04ce4429bacda2637ae523e525b2907e": "e510c0fc521e2306819d67fa5c830114",
".git/objects/pack/pack-388c7ddf0c39e8d097a96dd99cf2516c6fb59c99.idx": "1733cd1cc07c8d2d86248700c8113036",
".git/objects/pack/pack-388c7ddf0c39e8d097a96dd99cf2516c6fb59c99.pack": "37d4033396c4a7538d6ee92467c78e77",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/cd125cff333ad41b182d8db2671ea332fb6e71": "684fdba085e5ba7ac02bb1c9f26190a3",
".git/objects/a7/cecde2b23539f510af5e5ebddace26216752a4": "b57a0fe33bb623e909ea233c488f1a2e",
".git/objects/dd/fc19e1652d8eddc4edb882d33fd42a38404c53": "55a5b6f37e757ed88d70ea81abd29780",
".git/objects/e8/bf3415868720d83bae55e0f618d1d43be75d32": "dec45446adeac8edd5de62aa5ea573ba",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "68a50b676f583c01435ed1dca7c96fb9",
".git/logs/refs/heads/master": "56a5d07ec87b3b24bd7fce290a0f319d",
".git/logs/refs/heads/main": "4759a073f2683de1714279b82f701090",
".git/logs/refs/remotes/orgin/master": "d304396b35ca109ddfee63fffa47d258",
".git/logs/refs/remotes/orgin/main": "4b9f5b35fcfda7ebab9c007b53dd4f9c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "e753ec6d04df645f026d861213810cdb",
".git/refs/heads/main": "229f3633a2afb086ee66c3a56fe8540d",
".git/refs/remotes/orgin/master": "e753ec6d04df645f026d861213810cdb",
".git/refs/remotes/orgin/main": "e3d70bc9c43cff62779297b7dafe19ca",
".git/index": "f69feca0495836b6d9445c705468144f",
".git/COMMIT_EDITMSG": "972d3a6360b4242a0bdf68cd0b2839d3",
".git/FETCH_HEAD": "9faa0fe54180e00bf498cdbc02431ad4",
"assets/AssetManifest.json": "1b2662a43fd79b533098ca7cdf9eafce",
"assets/NOTICES": "53e836cf5ae3843b18b92e717ef792d7",
"assets/FontManifest.json": "10dfdbfa73b84c88390ed6e2d1e6d823",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/customer_icon.jpg": "2a6c222b873de16da100a5fc60a820b1",
"assets/assets/images/delivery.jpg": "ac251de765cd3efb130c3719148a8f43",
"assets/assets/images/register.jpg": "b02f4284ff7e9ab2be03fa838ad8f3b4",
"assets/assets/images/emptyreport.gif": "90cc1a061d251eefb9746f832ec3016a",
"assets/assets/images/customer.jpg": "fc1181b083f9553031f7c042453229a4",
"assets/assets/images/delivery.gif": "ae8b2ae29edb3aa6d8c0154900625343",
"assets/assets/icons/imaicon.png": "eab49ffe08be94d9fb2d81dde809f384",
"assets/assets/icons/warning.png": "d46b727288bfd2b9e82fdd3ee7744ec8",
"assets/assets/icons/check.png": "33ee2b22b20e61d6c756cb844abea386",
"assets/assets/icons/tech_avatar1.png": "c64b45ea911ed53d8cc30b803aa50aa7",
"assets/assets/icons/tech_avatar3.png": "e0becef111c4ffcb210b28fb27619261",
"assets/assets/icons/no_vehicle.png": "0a01e9ef2ed97cf43034d0f1b9ecf32e",
"assets/assets/icons/tech_avatar2.png": "1b47018c9f93a17449cb8bd4e95024a2",
"assets/assets/icons/pending_icon.png": "1e5b06621882ade8dc33e1d5342847c2",
"assets/assets/icons/self_vehicle.jpg": "a1ea3592f36e283ba0b2fe6df131b2e9",
"assets/assets/icons/bike.jpg": "68ddd9231c309984f398f639a614d5b7",
"assets/assets/icons/avataricon.png": "a5e81f19cf2c587876fd1bb08ae0249f",
"assets/assets/icons/add_icon.png": "6e123fa5b6ca6c8cb0b92ceec26438d0",
"assets/assets/icons/notsub.jpg": "2e01dfbac9f3efd25294fbb8628d5b1f",
"assets/assets/icons/scooter-1.png": "7e6f0e6749a572dd32c7dfad67e783c5",
"assets/assets/icons/test.png": "abad193c0498a893d7790a60727fbf0f",
"assets/assets/icons/menu.png": "abba6ad6a8140c7e84734108e7e911e1",
"assets/assets/icons/noprograms.jpg": "15087059874153c8d95876e0fc4a4d37",
"assets/assets/icons/completed_icon.png": "cc0d1fd6a191fd34d508b6e40aaaacf3",
"assets/assets/icons/scooter_icon.png": "d67e0b003f01ef772f351a72c95a7b1e",
"assets/assets/icons/customer1.jpg": "8a17848b5d95bbafd16c4b7f6b8d6af7",
"assets/assets/icons/expenses.png": "3c09b62f3b1a0810d9a0fa03080cfade",
"assets/assets/icons/processing_icon.png": "98fe0977dd8df56e7030d96d53a528df",
"assets/assets/icons/customer2.jpg": "8cf3fa622603ce43e193194320bace01",
"assets/assets/icons/customer3.png": "9c4526337e7499c22594b8a5d890c617",
"assets/assets/icons/assigned_icon.png": "e799758eb20ab3f6e5488324d1a5aafa",
"assets/assets/icons/truck.png": "db92973b05211bb97e7767d5a6f841e8",
"assets/assets/icons/scooter.jpg": "25adebb23c0ee074f7c38fc9e70c860a",
"assets/assets/icons/scooter.png": "8d41c82c145cb692063d56a9adddb2d0",
"assets/assets/icons/technician.png": "999adfbeaa4c7e0c0d784e2b917352dd",
"assets/assets/icons/customer4.jpg": "14195266f30a7eeb1d021b322ef8d47a",
"assets/assets/icons/no_result.png": "ca826221154aaee1838d5925588bad7b",
"assets/assets/fonts/Montserrat-Medium.ttf": "aca6287f22eef510c1e622c97bb1e1e1",
"assets/assets/fonts/Nunito-Regular.ttf": "5f444b61c541a4b329d8b16841b4de96",
"assets/assets/fonts/Montserrat-Regular.ttf": "34de1239b12123b85ff1a68b58835a1f",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
