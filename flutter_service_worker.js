'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7c7b731a7f43953499a41a4eff392abc",
".git/config": "4618daec06b4a7202c20d4b21d0eb040",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "eb3c3ac36b983bae0a5b1b8e6e581df4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "22371bcc47335dfcf980bf8fd7bf9a39",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dcab6b9469ebd5e1130f77e22d847254",
".git/logs/refs/heads/main": "13445dc86b43f2900405c96f9cc96d40",
".git/logs/refs/remotes/origin/HEAD": "7c457d0b50f19f0f026b3eb4334401f7",
".git/logs/refs/remotes/origin/main": "18bbddfacbd5dfcc2e7ef6d3a843ce84",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0f/9903bc0fa4b6ca6cd2b5eeec1b7f8ab09bbb39": "1be18b8fff823a90742cc90cc9325383",
".git/objects/10/a772a54494ef073f9900e26e60655ba781e9c0": "7dd6008786e503e50560d046caacb1ae",
".git/objects/13/2e6144786039b9fc4afe1fea956717f4f718f9": "89171fbe052af1b19e23ce098db3ad70",
".git/objects/15/aa50a74d20094ad02fd29b7c67617416657354": "9a26271df7eaaab2cd8e91657fd7ed36",
".git/objects/1a/62bb37586d455f45b3d417585282a3cd7a19f0": "c98da50e55e429cc202ea21b9c5070ce",
".git/objects/1a/c28218f401a6f8ccc34b02b8aee49b927ae085": "a43e2294518cb17e246d1c18fc8e8b7f",
".git/objects/1e/879405b7a8b6d46fd66e9379128dc53b9ee22f": "8547816ed1d03058b7bab31aaf744ee2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/da92f295453053feebeb792063f598784fbdef": "4cb67fd9310808a7eb4dbe80e71e7796",
".git/objects/23/a5c1edfb68da66010db5741185b3e015da4395": "a772b7cad4b13b7069ec83721f6626f1",
".git/objects/28/b6e75718e9fdd8bf136204fa6a096f34876d64": "34768f3c940644e1b9139754d30194dd",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/30/af74fef94d9aeccae4f0141c39cf4be36b02d8": "f6776d6f82a6562d6afc561b78c8b273",
".git/objects/32/fa8395f1626f96a005d7ade29da26503b4fb07": "5d539bc1204e5acdec62b1ac47986972",
".git/objects/35/65c6ab02b1aec61264dbe7e6c4ae8ffa565b05": "b7c07b9e4651ad24c731e9bde1e05d88",
".git/objects/37/16ee12007bbc262155b934a145a3f30bda8a66": "18ca0eb58f6693d30c63d2da0f2c7cfa",
".git/objects/37/aab1732bb34f00b6c419644754d161dd56461b": "4e1543c745260fe12e8dc49108e3bbf3",
".git/objects/3a/065bfdcea3d7f386c5d7f94afd856a67312fe8": "fc16c2e11a9ed626b56f1d90b67e827e",
".git/objects/3a/1347550e44d752da1e6502cc60fec407c36c56": "5d83bdfb6d8d7f1e47b1621613f2eb27",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/be8c27453e01ec38d71c9cb1271c8f18cf12cf": "e31c95df4a44635226c5bf0fe5eb5b4f",
".git/objects/3d/3a0fe28034249d8d7d08521351f4cdb9757206": "9229d6a912fffeac9ba0e41746ed6796",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/46/ad715bfcdac3b330b747a3583053cb63b7e29b": "f608343d7d9339801cf4eb469ff51872",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/63f1addd7f40be86697eab4c42d63da9c9785a": "10ea69172e720ba78caed79b2c81454a",
".git/objects/52/7987b3b83b55e4c3240583b0b33bb27cace240": "89f6d8dc7f3414541aa55f9854bdcf25",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/3b6f4ea019d3285353a14390fe114fe9037497": "d11f6cc690a2acb45cc75cd2d8a5ae7c",
".git/objects/5a/bba7f9fa38553276b8e36fe2e91061b67b674d": "5c987e1c8616cc28ec913dbc43b32730",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/60/4d6e3caa5211a95e381a6dcb3cffc8455e84c4": "b9efc8197c39fd72fe0a3efb99c66719",
".git/objects/61/9b5547ec461c7bab3b5ed4400ab273c8f959f0": "e60b9f7a1175a6e359186fa61b613322",
".git/objects/67/3bd3517a8c3608a586a36f4321c08d19bb2976": "a04a26f538c6dda7398baa87d1bbd9f6",
".git/objects/68/d310bbaaf416075bf9636c61b4fb2e91f7c42e": "8b20c2294aeacf9625bc96410a4f443c",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/79/ffa6589c684b5ee9829b33e3d9b6fde53e5f07": "c4a8befe91f8fc0a2e2e43ad7091d22e",
".git/objects/7d/070c59f23fe4b850c2e65b76642d9ab4ab8dac": "155907cb7ad0de0179309c9c225f5ec6",
".git/objects/7f/0ba31ed756f02b1f9bbdd443d264d4e32e69bb": "2b006d0ba1da2f8f9a904a4ef33558f6",
".git/objects/7f/8d02fcc253b439b670f42c6b566b551ef66fdc": "7d9e8eca34842fff6d55a1b878bf5bc6",
".git/objects/84/1f9c882cf45f1c1b6c3eee99834886ea11527d": "2ab19cf9c65d4b14e4717a5d31531735",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/1426df79475972b205c699b676d53e4c00b4f6": "5699d327ef5e5ae53b7498d5b1d30439",
".git/objects/8f/8992a072ffffab9d5f6e93f6d77819c3d603ac": "9205f7054c8c1561c3e8ac1585e0078f",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/99/6620faaa59f8cf8ce14608f79c14ce9b632557": "8a63ecda8a558fe3779d38f75c97497a",
".git/objects/9b/20d1999ba4b36fe04264e392de79148695ef31": "319d1615c879c1e34fd49783dcf98039",
".git/objects/a0/8284114510fd0c55a10c6382c7cef896ff052e": "e0357bf8e0aedd55cca044099dc5a1e0",
".git/objects/a0/a79c647384e15399ef7521de72fc9798c9820e": "cf7d9585179c51bce84f6115bc50edab",
".git/objects/a6/09ee3bf25d8214e993f66c88fc43b8ab5d1a6c": "d54cc5bf04bd006fd13c1866ae3a8635",
".git/objects/ab/65bc00d1526c92e2c55d955e6639ddc8ddfc8f": "b7ee34b175cf1a6717e51c1ace68af6c",
".git/objects/ae/e65cadb9bac07bcaea043e9918de7a29c91177": "dd5d00a7515fb5688d9f5f1239970d50",
".git/objects/b2/b243a8c94d56dc7bacdeb9250357dff5e93d83": "25ba537dc9064d90e849aca21500c221",
".git/objects/b7/3866c1bda13b8fc5a320ef4b7e4b776b5b1d9d": "a7e671c80803161aa75bdcb862ff9e68",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/a78146978174c80928b873a6f956f0caada2c2": "545694b3bc01595dfe4ad5275f326839",
".git/objects/b8/adf8874bcfc6e891e6df86a8cefefac4c86514": "11ae42527cfc500db82a1eb25c73e301",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bd/3cc9711533de5f65174d2f4990490e8991ae6f": "3ec7ebcd73910afce9210c2597d5a0a4",
".git/objects/be/d5f5793b18e4c2d17ffe2664930f116917b242": "2426f238368d6bc425733b471553c057",
".git/objects/c1/9bf7a97a67f4ac4dff4362e95c79992e28e179": "b02ec4328edaa4627b5fefc7f5266de9",
".git/objects/c3/18847c005aabcba541d73ce7ecd1d809165f8e": "0334df7df5869011ee8369ea54c0cc55",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c6/ddbdef57a6fd39f7e0c7418109a7245fa917d8": "63bde6d13c97c766b5de29e7fcb9b743",
".git/objects/c8/8b31faeb3b8a2d8f8b555b6f536f02e4a7ed1d": "ae5f55b87366963d1be6d9294132bda8",
".git/objects/c9/21af9d022f3b69a050cce2c379ea7ccc8a0840": "308f07f2c9b800627e97880511b98460",
".git/objects/ca/77e373a4ecf313af5d8fd6c9242d290a66f497": "967a3eec6867a15a6aaaae3031f2e6db",
".git/objects/cb/0df4fffd7359a77380eae6e3d25e06a699116c": "dbba21d7c2e15e642aba049451089acf",
".git/objects/cb/8c9c8a4796f8e4d1751d3613f1ed74beb55b7e": "61ae9fbbeba2fe8128369048a3849aa9",
".git/objects/cf/cc5fb895295b223f1c4a05bd2f9edd19ea66ee": "282c9b3ed147db18bedadab113387f3d",
".git/objects/d5/2b65f858f69985e09f0a3c9993fdd2c7f5cf1e": "c27b304cf8bacafc117042e317b78aae",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e2/bf1a23c610190cd35dd0505c7162e6cbf81354": "2e9d4071af34a5d6c9967261943a6e91",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/b79b1b4c47b2820df89ff6909bcdff31973bcb": "eb6148e43340e4b9da46125a9df02dc4",
".git/objects/eb/76cbce869bf0723bd1db92e458778e7a238843": "3e5e48a1ec228352a8065ea62cd6ad38",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/19b0a74fcbeddb91f687473b3764f169f65676": "14608e995af7f4b4d0cc72faf0ac3e61",
".git/objects/f9/3ed00c56896230534ce0367b154a0a5dba47f9": "94809224ab0c577ad09ad3ebad292f82",
".git/objects/f9/80927dea8951ad8d7b223be2be2301296e5b1e": "c7b10d8309d45ce6094468d249bb402f",
".git/refs/heads/main": "666263e2510a54fc8f3abd579e0562da",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d8d5cb9833dbea72a66f426c2eebfa67",
"assets/AssetManifest.bin": "023ca603ba75a440912068a0abf673f4",
"assets/AssetManifest.bin.json": "14484b79bb56df3b38417181c88a60df",
"assets/AssetManifest.json": "8e7f25dc3c36e3dd2e36fd2a74b1bee0",
"assets/FontManifest.json": "209e66e2f71c646cc7eb744ea1cea0dc",
"assets/fonts/MaterialIcons-Regular.otf": "fab638ca8dbc7b5012ea5a0c76a9769e",
"assets/lib/assets/images/a.jpg": "0e96a946916382a7c05547d6a581400f",
"assets/lib/assets/images/logo.jpg": "1e6ee96c651986e0e1b32fe1d9ae1e91",
"assets/lib/assets/images/logo.png": "e42be17efd1b3ae540a8c802c757cd32",
"assets/NOTICES": "5609235bb365154436d52a3a1052930d",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_charts/google_fonts/Comforter-Regular.ttf": "cff123ea94f9032380183b8bbbf30ec1",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "96ec7dfea63970bf54fe1cb0872767c3",
"/": "96ec7dfea63970bf54fe1cb0872767c3",
"main.dart.js": "7356b1d1f1a2d7dd0c2b3f2c6fb6a915",
"manifest.json": "95565d9f5952fb92a6c807f99fe5dd14",
"README.md": "3b6de145a1cfd67b2a74c07bc18a6361",
"version.json": "fa2dee572183af7d4ae911b5f5aa965d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
