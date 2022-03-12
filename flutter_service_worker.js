'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c5e1670a76fa30eb5c8cb1969cb58536",
".git/config": "0c54c0ca87a269168a417a588913c177",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "135d1d62f8cf07e0747440bd3858c647",
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
".git/index": "8fc50a079a114154951edd47999e12b8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b68e78b25d83148cdb250d8e6d57c036",
".git/logs/refs/heads/master": "b68e78b25d83148cdb250d8e6d57c036",
".git/logs/refs/remotes/origin/master": "8a2c2ad270bd6703b7f306609a6c7e2a",
".git/objects/00/dbfe67a2840cc762a117c066902c36c63f4178": "62be479119e495eff13f81fca2300bfc",
".git/objects/04/2a8ca16151676c84a88bb815c1508ef51098ac": "fd4c138d72f644feca4d4cb419884af3",
".git/objects/08/5dba132023777f8dc9198b88ce0c74551d4516": "08c97155326492ed128e2b6d7e5a6170",
".git/objects/09/44fa99a5f2bd187b62990b5d3844e81e073af7": "33710f9d91e97fad93d424c9b8889ed9",
".git/objects/09/ffe2f9800d56b0f67ffeb1657db0a9b20e29c5": "0ed6fcd829bdeab209a46554b3f72836",
".git/objects/0a/332881d0562da6b4ff665d93b814a7a35b477b": "e3b4e8146b8568ee7405a647c1caed07",
".git/objects/0a/f3632468f879a4c896df3c038b93512a15fce7": "95fb41c51f83877abd62e9644fa36df7",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/8b24aa50e3a8e550ab1736d22d791eaa547359": "3d5e9671c14b95ff38d09800a417b184",
".git/objects/0e/9c842a2943bc31cbad0c2e815408d9b42294a1": "e0132eca9f63e0e50b67dafb371c1f08",
".git/objects/0f/32fa50eb5e2deb623a9ed1cc3424e446385ae1": "54a39492c7dbe587e2c60002df20b05c",
".git/objects/0f/9a8c72f369fed08eee1714c945e209363fa858": "00577d60bfcdc0c564d863ea5d8acf5a",
".git/objects/0f/b3ed465a943d4ed73e83b65ecdcc1e73de9a8f": "250a14c24144817cc365c9a57b19e1d5",
".git/objects/13/604cc84c45daa0f7378359365915b04bf3a275": "71e312aeba1ff3c5ec8dd2775aafb80a",
".git/objects/18/2808227a3904d98bde0e2a7e22fed965aaa148": "1589e20e54763e0a65381998a32464c1",
".git/objects/18/5bb002f7abb54a07cd272f32289e98c2ffc79c": "3a1bb1454e3712eff6703d6482ea7631",
".git/objects/19/fabecf7d215619030b862ee3e781b76a0628ec": "2b20dc5e09df46cd9cff386eb066c6c7",
".git/objects/1a/ec594635c02217058f84bcdc21afdffd35dca0": "8f08f3d92b9aef4e0fae34fbb92df0b6",
".git/objects/1b/147d947348d1dbbfd1e6f9d70a7b3b9aefb792": "a9bf55e2d3a31591d7013c43464cc68a",
".git/objects/1c/3415c4a4c6058e56cacd82440663416ac64fed": "0bd851acadab92dc117eade3058fffd9",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/1e/bde574aabda50b9f05bfb98fb87f0e4517796a": "892e33241bc59ea7a53a9d1bbae0e011",
".git/objects/22/3e15e7df5f86aa0f2fccf45386a625e2b9acd4": "2e430862035e6c0c8258fb3dceaa0cb3",
".git/objects/22/dfee321cd88d6159fa997397aa5a43afccfdd8": "7f30b0bda3d00017ea7a542b7c51f098",
".git/objects/23/aab9c56412720779a52018c1404828c36e34ba": "a7db0c51fdf7bb328bbc87fd0ea41021",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/00be391361a27bd906b7dbbaf824d4bdb13a14": "e6b30f621c2c8e4472d71a54187f3918",
".git/objects/26/a6cea2c6e1e637c4f221017846cd2fcd745e36": "a8174f02a84230aee1e3768890e18249",
".git/objects/26/ba61ae323fe8f96578d75ec5e417f432de6cf7": "9661c5f25e69a2e1f50b855eed47132a",
".git/objects/27/440e1410ab96598e131547d03cd0cc09dfe93c": "1d33eea77cd0743570ea446d06c63b05",
".git/objects/27/44a38cda1d95fa766d06bf770a228cca9dfbcd": "c54f34714ee99a5e5204a3bffcac6c78",
".git/objects/27/497043771db2da1da197d8e102e4ea618a5559": "e97b48944681add6ea7835540117e8a8",
".git/objects/27/7e4d09eecca0a30c06b00fa5f427c8dde4bb5e": "5b826f15040ecc5b2ff7b2827fbf2420",
".git/objects/27/b89dd2004bd44f97fc585ceb69161048e3865a": "e793efb23711a2ce1ab957a6318d1e39",
".git/objects/28/d41948ddce255309aa97e5f1dffe3b30616a66": "9ed532be64357069815137b2501e42a1",
".git/objects/2b/8318559062626e0f4ffe02a52004d0f32d421c": "a314c936bca64b9b38363fd646d8140f",
".git/objects/2c/f89b9b7bec60e9d175a495ea4ba7ed7f3bd039": "685b589b9eeca9d398e066071eba9d28",
".git/objects/2d/25828ad89eadb69f3b11173dcfe5c536f64ea9": "20ce2a8d631103bda96fcd92741bab08",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/30/47166277d88e83c9a2c5de668fe9ab40cf647b": "690af4152267233fe9e0697872bbee5c",
".git/objects/31/868bf50e149b75381d82224e7ee71e1a4c57ac": "7f13f444ffd5ab3848c2d2f5d26e8e4d",
".git/objects/31/8cf25a081b38eed5bbeaa1ff7623a4643e5fe9": "9e98cee8344c8acae33c1941aedc4169",
".git/objects/32/3e7f4be3353d0b33bcbf362500e75fbc6978eb": "6a7034b3f9ef993259a934cd707af5d0",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/b778cf1468a666ff7792d94c8e58fa19c4395d": "6476d1d8b222bcfc01794176c396e18e",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/36/e5658720a36e86f8e95ba583ffee0f9146aa4b": "d987e3e0cdd2ec7e981fe917b7a9e74b",
".git/objects/37/e14e378a5d4530588443d85fb93fc41a08be36": "050759d3cdfc50180b25541b7e979588",
".git/objects/37/f590f16e22c21369920519695d9168dbe98f6f": "28ec5ef2b55a4cbeb40617c25dfd4c76",
".git/objects/38/95918bb5c5ad92a6230ab3016c81633a720891": "4a984fcd390c900c9f98a2ef4765f5ad",
".git/objects/39/368d354a660d0e34f77a8fbb80c02268810b43": "1103ebc05d5e2269694b015f21ae6367",
".git/objects/3b/3ef594e093e7dde9790007b7b69d800bfd48ae": "2f95f13c9db481f1ce29afe9885f30bd",
".git/objects/3c/5518d5f872c8e59655f4494956048d9dad7f98": "a1b155357c06a8f936dbe6904090091f",
".git/objects/40/e185e343eb53a1af322075e8b47e9581a3d0ae": "e224f1f92aaf7456bbdafc7affbf4a41",
".git/objects/41/4c697c4a7a32f2a61bc5976125e2f225559242": "458008abe8aab6f2f8250c56556932d9",
".git/objects/43/57f5c6da4516a53181789112e5a0f42dc80b13": "6a9fd629f3c80e95856a95b898a29b6f",
".git/objects/46/4509766d6e4ede1eceb612192ba61e3cde8998": "59f4771768c3a202025b2d1d1592079f",
".git/objects/46/987d16205b7efdfc2094ace0b141a29f20fc81": "28d5409bf4dcce9156a3896db5084d0e",
".git/objects/47/86b1f5eac53e5cbf517073dda69b3a15ddd056": "2a79c5b129ca46666602b8ba83221020",
".git/objects/4a/97d65b23246dcc58d549716e7c8549fd3d6e79": "5e8f29cb25f3336028f9a15cfabcee4a",
".git/objects/4b/a5ee8f979090cfd18329400ba53e03a0b50600": "becf22f8a60361a523ce6d3e15ba4575",
".git/objects/4c/66c2831f81dfffe8aaf1a53281a1a49da52382": "55a7b1e98cf7176eeea8f4f0b130f6cd",
".git/objects/4c/a6d95aa109344c13a90087bfa06dc2b120fe01": "48aca630a856833ae4a8532e54ea5ba5",
".git/objects/4c/ed9fa000f8514ba469b8c85be4c27f6e08e7f1": "1cf28f8ae051cf5600dc256b94cf8075",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/a62f2cfb71b89b7aabe911d26af4a8c3f940e9": "ccf675fd27f27ae6b9afb91e89ec0e5a",
".git/objects/4e/cc0358ca9b6fb578746d6e5a9e86067baafb0c": "a510272240846585dceb441e35b4dc8d",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/52/ba5869a90ee0089247af2ee71212b2043077a9": "3ae707712570ae0af1e4043520e6949d",
".git/objects/55/bb20e5361a75b5813828e5a782721b37af13c3": "642861da98e347f714c077d19051ad66",
".git/objects/55/e8d56eee86d81c081b0734a0f5791212155fbb": "5351013a68e8aeae1b9272960936055a",
".git/objects/56/66063c35360ec7e51aaf976f37c640cbb6a333": "2ab4f35f5f5d02f50b5dd3f9b61242f0",
".git/objects/56/b8d448b0e3056526fe4405a3a57490a62f09df": "73e3d6780885942cf57fb3191aedc62e",
".git/objects/5a/e33747ae57ac0464615a2056e8bec9f0edaed3": "ee416cfcd655f13cc4d0cbf0c63f0666",
".git/objects/61/2af93b3ad42fab2aa0ea9db28837c4e5ba5afd": "8024479e577046059035333bab7fc6d3",
".git/objects/61/aacfe735f7592131e531a33fd17c80e161c5bc": "e6a7d46626c7fd321c64d450409310af",
".git/objects/65/15a510056cf9321266722bb1f3dbeb171cc8aa": "d7dbca3897f298a78e8742689a3a335a",
".git/objects/65/5587d6e05b47d2ba80c7d2a0094b7cbba62fae": "7899cc935d819bea2c2e68d1ee8b17de",
".git/objects/65/63dcdf4bda680cdd898542b2b9fb5bf80b124a": "631a7f57bf65d6eca32574b9cdc44056",
".git/objects/65/a7f930b6087637df27c040b821b198404afc54": "98f1613592db9101bb22b3e834f22b2f",
".git/objects/66/8126a6d819413b96d1a34cf0a6485c70644af9": "3f420a002d94596743efe9f90808de8b",
".git/objects/67/f24852b8df087fb8251cfae8e30166e312a8fa": "32479cab2ec028e0184d357da189b71c",
".git/objects/68/d66288e45834ffb411f3583a7eb5fdd578fcdb": "b32606b3dd2794304038f088b5f4de37",
".git/objects/69/ba8be98f3e5eb337e5f75449bc6ac20ca07653": "7ffd0744d030601ee2554bc72ba58d33",
".git/objects/6a/13d9b43f76aea384dcea571fe32c93d1e373c2": "70e5058821e65ce1a73b1d76170ba69b",
".git/objects/6c/fc8e7fa0c7b0dec1f211d8d808f6e4498ba034": "90e100de74306a5f68710999e9b5a3ee",
".git/objects/6e/b601dc9e1def2e44c9145197b2479f6654814b": "ab3da01dec4119f5f003025748e04fd6",
".git/objects/70/16deeb6d958cb25d281e024a8df5b11ed8f10c": "d44593d06bcbad6eda7ab55ecf1d158b",
".git/objects/73/827231ee3d2528997c1eb547891d4611b7e0e3": "bc9be68455efe866b448d5ab86c45e11",
".git/objects/74/9fa4f515fc8c62d04f41c4425eb910af0c929f": "dc619a8e2cc4159112130b35eac4d2d3",
".git/objects/76/57fba202369673d5658ee1c85d37d89e28d3f6": "d904401861bdccf87f79dd887b7deed5",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/76bc5bd50eb7135fba43fc28cfe98277a0fa36": "f2e34393f8d5fb9d868a4ddacbeef2d3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d0c2fe58f6eebd22277dc1b43a8af25c47b0a2": "247a5b113fd03c92f22fcf130037224f",
".git/objects/7a/fb080616364dabae40c0821f65529ab255c51f": "d436dd0817cdf9fac4a3c818aaa60822",
".git/objects/7b/2fe4255d0043fb3f0942ba1150200f53cd3687": "3a5dd951e45a6052b11ac00eb14ca1a9",
".git/objects/7b/7f73a553d6fee0a2613b64793a2609687ea800": "8d08b6493868f336d56d28d0d22dc1bb",
".git/objects/7b/829fbe670a5403b415b93579dea8374a8a8892": "d7ae4c7e4e8a882c8aea7c88c9fa2e9d",
".git/objects/7b/aa56a9009d7975b8e6c1a48a1cee9e1c654b88": "36c9890fc1eaa662f6db2b0f62ead635",
".git/objects/7d/460d23bacaeb763b9d476c7b68755080229a81": "f715586ef29532d1b04f9f72822e28c7",
".git/objects/7d/e549425d4c8c4a2cf5a913696b64c683dc6382": "e39352874331cd4e469c09360d8ecbcf",
".git/objects/81/14b6123292dc327e9588d7a56d438332955324": "1bdd725a20571efaaf2775cfd48754ea",
".git/objects/81/b600259c2714a13482db46dfc12f926b3f2d48": "b1f8a68ee1aa7a344934e9718e222821",
".git/objects/83/cf9a5d98b1f06bba78956c823c4e8d5724baed": "902adc76494a61a64e6eee99a16e73e0",
".git/objects/84/0be984d89c6a8f350c734ea6e2eeaea9239bce": "3b4e71e629bc4cefb299980fd0ce7431",
".git/objects/86/2171af8f297c3934326b8a043edf60961b1b7f": "98b6b987e3aa4a75a177fea9d799c77f",
".git/objects/87/0843e9e24b5b29cbe799001c55ec0445dea4ae": "7ddd8b5cbc0af2b8ae10eef7aadacd7a",
".git/objects/87/ebdb1e98827230313560553c52ef3ddfe999ea": "8f86570d717b166b36a2e46bffaa82c5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f2da601bc1e905224d8b86186e06fe0b8eadaa": "8b0e4bf4146a2b89f5cf65d2b50b2a6c",
".git/objects/8a/fa3f625fb039ca5a81e863aecf353f5f50d4ab": "df227c20bfcf4def3db660ecbec798e8",
".git/objects/8b/4838c98241240fc59a186a03931b68d36d1450": "19bb1ca8c2dc5a3321cc554da05f8fda",
".git/objects/8f/10d713213a3aff2e0dfc335fd0840f5a684cad": "a11517164260f4569685d14bb7e19e21",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/91/6d3d5b04da58d06c8279a57d0aec5238cb5348": "a6860e6a6bf250eb7de11b3165cab214",
".git/objects/93/bf658b1d3586f363c551295af40576594299b3": "42dc03468e1daeda115657e1fb5f4b0e",
".git/objects/94/c292fca1ab759d40090759eb7aec565bf083b3": "3114541a7aa4cc53939f1b53478be158",
".git/objects/94/c72d88cef374d05e896740d55640520ad4e177": "3cc30df96cd08da34ba5fb2619f88553",
".git/objects/94/dd521fe48d0b2f53e494cd1f9f0e58bbe6e2ed": "1ce672f858a26ac5aceb6fdad84bc222",
".git/objects/95/e9f988b01233d5ef23f8869891a74bcdf18f2c": "7c31b9b47dd90fc69ee2bff3986fb594",
".git/objects/98/d5f76dbaa123c20f1164a97f9139411ae4b28b": "162856a44eb0d817147341faee464d0f",
".git/objects/99/733f828dfd80143cf16570fb758e319526780a": "4e5f0c88b56383df4b42515f21303a73",
".git/objects/9a/8d4db97bc955c1a7b717912afd251b1b714d9d": "8384c5bbeb681a5fd0dee6293089579d",
".git/objects/9a/90b0f0c63ec44dca63757e8acdc06ed421e9e0": "ae8526128260cb067565ebdf36bb650d",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9d/66a8b216511ef2ec7fd837a71352c9681a1a6a": "471931886a380b593eaf4db6620418de",
".git/objects/9f/68a490dcb8c5dc75e71ef92451e673786cc5a3": "ec5dc7d191eeb9e475133a0319aa59f7",
".git/objects/a0/3ed9cae03ac38f86a110ace4884f6bd8992c82": "782cbb9fb05ac310b4c61ebe6bad65f5",
".git/objects/a0/581193782365d36460264bf1c8825cc3570304": "c066ee5b6bdd85f083e79f2268e6e69f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/e48de4d43a87ca34b97c76e75104b0eb06a231": "67cd0f1ef308784b5aa3184daedd8a9d",
".git/objects/a2/feaa5c93265fe1deb19fba7438864c9b10dbc2": "91e4e139b28bbe0fde78d8cc8c8607c2",
".git/objects/a7/19c5a83fb08b3eb4451f6f41724dd60aa2ea1f": "83cf5cd427df0b657132f4779b68e4d3",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/e6cec2a54670586cff093babde32441f38022b": "1d87585b0a5f597f7413e6aaf1f996a9",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/7e1c09c987737e80e5ab90cd87333f0b950ed4": "59e6082608fa4f9ca41340c297b4df15",
".git/objects/ab/7f1050dccb6d883ea8d3b6e65133a911f2e927": "d8376f3e9a6060739e6f01a4ed038716",
".git/objects/ad/6e1b3bb06c2b5354b589d2345e0d702933defd": "5c684c6528227d17c7f10de1dae1532c",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b1/4948d1de5526f9f95596db3bfca41d7d7d7a35": "59001f3ea1a49a0c006ed59ed2b53321",
".git/objects/b2/d88e4c26e155497cc0d8ec9f24453be7b848f1": "72c6ed0543861434c642c0e1db16ea8d",
".git/objects/b3/53af6f3ca5962895ac1d5db88208937333d53a": "c8f027e616c8ad51ce5a23857f813bf2",
".git/objects/b3/801e79ea3673e3dc8e832fbc9530317d9c58e6": "047e9b8dcb5005d353b4e2b74adaff58",
".git/objects/b4/b1a0440d823bf9c12d28652b10c605eeca293d": "95dcb9133c2e3a5319c31f395a68b817",
".git/objects/b5/fe344d11a22e3d08c58077500a2cd553ed0faa": "58ab960820afaa84cb6d3944c8d878db",
".git/objects/b6/e79657175cdc602d1f9518ecd3a272f14957c5": "2487f8eecf94b99cef066b441085438a",
".git/objects/b7/3392faf1d05c49e4df513c0f327dbb958f6ced": "7564f45677f828c48302da272493f857",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5eff9d7d27229fb743e22f4c1144b3c187e28a": "7a524d8926f68a70caef40fa6cae2d52",
".git/objects/b8/af766024b45b6228edc4fd08bbc0c49db8572e": "193e4f093dec7f756148d6953c01d8d8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/41955e29e03b3957b2a5fb5f20c0fe998b39b3": "c50256b56ddd2abd076ab7aee9945999",
".git/objects/ba/f37970ff4024933438a28e7f205bdb0a87674b": "3418f18aa5cfaa66b9ea0c3e0a152346",
".git/objects/bc/991849b901551b6573666fe42b6f8c52fddf5a": "61bd91dc6b22505c3b17356c5bd7b18a",
".git/objects/bd/8fa25fd2284e0d07e2e5ce38c0d1092b3dc63f": "7124b16853399972062ad3079bedcd2d",
".git/objects/be/186526e00e5e025db33a339a57287059de3aaa": "5cc21907d7ceb4859b0ed25be0942552",
".git/objects/be/22f4f0bd307268caed3bc335c27a6b15b12a26": "b5e7d2c7f42827c5774d1c36b1abe0bb",
".git/objects/be/281222bc99b853590d2910fb4e3f1d54e7271c": "9376112141e0393dcb94df8a32b6107e",
".git/objects/be/711b45c679dbacb2c3c5925830f78845852789": "8074c13d246d79694ef2d71e19c7d67c",
".git/objects/c0/c935406b9f9df958a9e5b5c19ccab59ee54d42": "80cee76e663876dea58fe341baf606bf",
".git/objects/c0/fc84fd0c24e93bfdb64a9de72da343f4e5cd29": "d4f706c9390d48e7cff7d164396c5d37",
".git/objects/c1/eb61bdf4a9fc0f08a6f0c43823bf01c8e1550c": "5b7de9d656d5f1586524b411f799121e",
".git/objects/c3/394a9a133b574fe7b4c1d907da3a8ec6c990be": "1be3a8726be33617536d2f5a9dda96fe",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c9/5c66e2fec1f3c404221ca892d36c7412a89460": "3aaea29b76e7cff208f3544d85f94f7c",
".git/objects/ce/c5b3d0010489a92239b32f756afcf19c87490c": "03107004eff9b61f262916e094a2354b",
".git/objects/ce/cf8ba8e2ed0d3548986ace48f57bd09fa6b466": "5a7dc18c241dcf10293e1e14d59a4659",
".git/objects/d1/78fd5e7fe99108775ac7af2fc5c74b53383004": "28879d7d65aab94f6f5969166c75376f",
".git/objects/d2/bed0d59367f6378981cc751eb4a3c21cc35f9e": "47c4c3d88c05e8e5168b153282dbfed3",
".git/objects/d3/7c1c54951f5637c158c075514c64b924319eec": "00300c7961616ed6d678eb3915838521",
".git/objects/d4/af47bdbad3184f36b3c47d1bb0090a5eff46ef": "0881cdc0e339b7a8f102c8cbf9d4a15f",
".git/objects/d4/cf286459a569d51cf51080c193c1fb5ecc327d": "342b1bf11df21d367a39ec0a64563593",
".git/objects/d4/ede8ff7e3f6a6d0ed3a908d0f0c1eac912b85d": "f6df27de301f83b1b6f8b2b6693b2683",
".git/objects/d5/74f4ad29e16125689bab25993fb3c4408c1331": "b4fe10174f9e458e103e9069e3cb0599",
".git/objects/d6/4fc2f6c23d7ba10c660ed040c99230c344aef0": "58dda01da21da874e83504dd8d9fbdd4",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/9c619ca75012f8797870e2b45a6d148b4c8d15": "376a4add9b66352e908b17d1a81290d4",
".git/objects/d8/d10ba00157e8188b50b5e0d0fce4edd3be9bbd": "8e8319cb10ab2fe251605740461a42fe",
".git/objects/d9/e779320dbc11d8aec6a25881e3c0d97eae2e79": "7b0f45759c7eb02e5f9ce748e2792351",
".git/objects/dc/03e91072321b52397f71bd1622e666e5b56e5a": "dc0e3911d7a9f351f03080026579bbe3",
".git/objects/dd/10847dc7f6aa0f3c3054293d204b29641616c8": "ae0e72d32937dcc6619fd2de18add94e",
".git/objects/dd/f030b1b8b49dc9a3d3ea0dc08a685aeb25f159": "deb189eaa99135a79c95d1c08a303c51",
".git/objects/de/02ed13068feebf7ffed2021693ba7d696c502e": "008f24bd582a3cfc614f5019555cc14a",
".git/objects/de/6f655b503a1a685c94f65de51fb75b2de4a073": "d58d6cdcef24b821a0229be7a56fbb08",
".git/objects/df/a09d17825b29461608ae14c8a0dca1474e1a4e": "5a4c5dff01662fc72fcc86d7f903f216",
".git/objects/e1/53d5731ab577420d21fd23758bad35f9d3a166": "3998a5fbd7655277b5586e4b3f48798f",
".git/objects/e2/e231cc31fa392031c8ccc85fa5c47a639b2d78": "9329c7367c905c899880863fa61b326e",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/7df0cdaec0a41cb5b09a7949bd850afbb52365": "813694a25ccae7d023faadd4b7958332",
".git/objects/e9/87238aad91874f646d50c056dfa56e6e4d54bb": "4b21e001fd3715f86088cc38e91bd440",
".git/objects/e9/8e29af515e1792e93c59492c0f14252aeea89c": "5545681b6053af19e2582bfcf6820227",
".git/objects/e9/90eae6b15bbc8826d72cb7a2330e275233c367": "d7922065b512138d3d1deb0c5ed128b2",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/a4b7ca8082c5d7c7668b9df20f3a859acd6724": "dda76c7c9a190b615aa462caad4690f6",
".git/objects/ec/b3b9e2b38666aea91d185f0b702b2b909f5249": "c47e3b87c2bc17764a7eecb3994dc3b5",
".git/objects/ed/d87faab6eaf8120a603cb688dc5fc02c8db33a": "c5f91c03890ce91508bf8f12aa420154",
".git/objects/f2/5dc8154dac4c07841911e13150c6afcf662faf": "6a026ac50bdd7fc143ca8a09e01bd2af",
".git/objects/f2/991481845789e780ecf1ee0fc679d10951f75d": "0f72e7339702d0de122cc2559731ebd9",
".git/objects/f4/9091741694541ecbabd0f257bc829a1af35629": "6f6c815a643d142dd81f96bafa438bdd",
".git/objects/f6/280aa9a918a7fa753cd381c32807ea11a3a53f": "cf3073c52586072a54744d672e65a2ad",
".git/objects/f8/b17ec4638bd4101ceeab937375363f172f093d": "79daf63ed54bd52a3580217cc10e3ba8",
".git/objects/f9/46b7fc986420813929f010e3f8c87335e226c8": "c84c84105850482f3a1e3e97029b1558",
".git/objects/f9/9c214a976562dee2823104a17d71361217a72b": "07acf863d2b07f618aae09da69f4d202",
".git/objects/fa/0cb2d3b723f7b8f4e7c534dc27f9501d347ade": "021df41316ba430ba475fb3cfd685b29",
".git/objects/fe/c1c708598015d6bbf861764c17b02d30ccff38": "b27fa7255cdd343b1ecd5c351940b976",
".git/objects/ff/0279f315ecf4b1e9218bb0e831968ceab4bce2": "81c216c602e8af789378fc3482de66bb",
".git/objects/ff/cd46e1f70f057a23ed97da60e777d6b54ac3bb": "1df733e2305f2dc8f2f5c486391e9953",
".git/objects/ff/f6ede1218886f0a6490ed4e270f5268c9fa127": "fcd57325a42ad28cb7aa48c431f21ed5",
".git/ORIG_HEAD": "8069ee8d949f75acb3541d5091849ec0",
".git/refs/heads/master": "16d8946344fbd7012f2dd3cf4dfe06d1",
".git/refs/remotes/origin/master": "16d8946344fbd7012f2dd3cf4dfe06d1",
"assets/AssetManifest.json": "73e073f1fd1a2ea76a1c474f2f7e3b70",
"assets/assets/fonts/Nunito-Regular.ttf": "5f444b61c541a4b329d8b16841b4de96",
"assets/assets/icons/avataricon.png": "a5e81f19cf2c587876fd1bb08ae0249f",
"assets/assets/icons/download.pdf": "01d3e346dffd95942d5619c0e7c7888d",
"assets/assets/icons/imaicon.png": "eab49ffe08be94d9fb2d81dde809f384",
"assets/assets/icons/menu.png": "abba6ad6a8140c7e84734108e7e911e1",
"assets/FontManifest.json": "7c8eb5d4369066d36d8050154c1af682",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "ee0a2ea0a0569cc83617892a6db20f3a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bcf433eea831cfd57a7565d947e46314",
"/": "bcf433eea831cfd57a7565d947e46314",
"main.dart.js": "c7ea4c5dbeaff02d0fe444f6096dac20",
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
