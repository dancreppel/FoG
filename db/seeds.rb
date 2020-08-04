# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all 

User.create(username: 'guest', password: 'password');

Genre.destroy_all

Genre.create(name: 'Action') #1
Genre.create(name: 'Shooter') #2
Genre.create(name: 'RPG') #3
Genre.create(name: 'Rhythm') #4
Genre.create(name: 'VR') #5
Genre.create(name: 'Music') #6
Genre.create(name: 'Automation') #7
Genre.create(name: 'Base Building') #8
Genre.create(name: 'Open World') #9
Genre.create(name: 'Tower Defense') #10
Genre.create(name: 'Strategy') #11
Genre.create(name: 'MOBA') #12
Genre.create(name: 'Sports') #13
Genre.create(name: 'Racing') #14
Genre.create(name: 'Indie') #15
Genre.create(name: 'Turn-Based') #16
Genre.create(name: '4X') #17
Genre.create(name: 'Hack and Slash') #18

Game.destroy_all

# Seed Escape From Tarkov
eft = Game.new(
  title: 'Escape From Tarkov', 
  description: 'Escape from Tarkov is a hardcore and realistic online first-person action RPG/Simulator with MMO features and a story-driven walkthrough.',
  developer: 'Battlestate Games',
  publisher: 'Battlestate Games',
  release_date: Date.new(2017, 7, 27),
  price: 44.99,
  discount: 0
)

eft_cover = open("https://fog-seed.s3-us-west-1.amazonaws.com/Escape+From+Tarkov/eft-cover.jpeg")
eft.photos.attach( io: eft_cover, filename: 'eft-cover.jpeg' )

eft1 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Escape+From+Tarkov/eft-1.jpg")
eft.photos.attach( io: eft1, filename: 'eft-1.jpg' )

eft2 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Escape+From+Tarkov/eft-2.jpg")
eft.photos.attach( io: eft2, filename: 'eft-2.jpg' )

eft3 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Escape+From+Tarkov/eft-3.jpg")
eft.photos.attach( io: eft3, filename: 'eft-3.jpg' )

eft4 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Escape+From+Tarkov/eft-4.png")
eft.photos.attach( io: eft4, filename: 'eft-4.png' )

eft5 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Escape+From+Tarkov/eft-5.jpg")
eft.photos.attach( io: eft5, filename: 'eft-5.jpg' )

eft6 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Escape+From+Tarkov/eft-6.jpeg")
eft.photos.attach( io: eft6, filename: 'eft-6.jpeg' )

eft7 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Escape+From+Tarkov/eft-7.jpg")
eft.photos.attach( io: eft7, filename: 'eft-7.jpg' )

eft8 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Escape+From+Tarkov/eft-8.jpg")
eft.photos.attach( io: eft8, filename: 'eft-8.jpg' )

eft9 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Escape+From+Tarkov/eft-9.jpg")
eft.photos.attach( io: eft9, filename: 'eft-9.jpg' )

eft10 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Escape+From+Tarkov/eft-10.jpg")
eft.photos.attach( io: eft10, filename: 'eft-10.jpg' )

eft_gameplay = open("https://fog-seed.s3-us-west-1.amazonaws.com/Escape+From+Tarkov/eft_gameplay.gif")
eft.photos.attach( io: eft_gameplay, filename: 'eft_gameplay.gif' )

eft.save!


# Seed Cyberpunk 2077
cp = Game.new(
  title: 'Cyberpunk 2077', 
  description: 'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.',
  developer: 'CD Projekt Red',
  publisher: 'CD Projekt',
  release_date: Date.new(2020, 11, 19),
  price: 59.99,
  discount: 0
)

cp_cover = open('https://fog-seed.s3-us-west-1.amazonaws.com/Cyberpunk+2077/cp-cover.png')
cp.photos.attach(io: cp_cover, filename: 'cp-cover.png')

cp1 = open('https://fog-seed.s3-us-west-1.amazonaws.com/Cyberpunk+2077/cp-1.png')
cp.photos.attach(io: cp1, filename: 'cp-1.png')

cp2 = open('https://fog-seed.s3-us-west-1.amazonaws.com/Cyberpunk+2077/cp-2.jpg')
cp.photos.attach(io: cp2, filename: 'cp-2.jpg')

cp3 = open('https://fog-seed.s3-us-west-1.amazonaws.com/Cyberpunk+2077/cp-3.gif')
cp.photos.attach(io: cp3, filename: 'cp-3.gif')

cp4 = open('https://fog-seed.s3-us-west-1.amazonaws.com/Cyberpunk+2077/cp-4.gif')
cp.photos.attach(io: cp4, filename: 'cp-4.gif')

cp5 = open('https://fog-seed.s3-us-west-1.amazonaws.com/Cyberpunk+2077/cp-5.jpg')
cp.photos.attach(io: cp5, filename: 'cp-5.jpg')

cp6 = open('https://fog-seed.s3-us-west-1.amazonaws.com/Cyberpunk+2077/cp-6.jpg')
cp.photos.attach(io: cp6, filename: 'cp-6.jpg')

cp7 = open('https://fog-seed.s3-us-west-1.amazonaws.com/Cyberpunk+2077/cp-7.jpg')
cp.photos.attach(io: cp7, filename: 'cp-7.jpg')

cp8 = open('https://fog-seed.s3-us-west-1.amazonaws.com/Cyberpunk+2077/cp-8.jpg')
cp.photos.attach(io: cp8, filename: 'cp-8.jpg')

cp9 = open('https://fog-seed.s3-us-west-1.amazonaws.com/Cyberpunk+2077/cp-9.jpeg')
cp.photos.attach(io: cp9, filename: 'cp-9.jpeg')

cp.save!

# Seeding for doom eternal
de = Game.new(
  title: 'Doom Eternal', 
  description: "Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity.",
  developer: 'id Software',
  publisher: 'Bethesda Softworks',
  release_date: Date.new(2020, 3, 20),
  price: 59.99,
  discount: 0.05
)

de_cover = open('https://fog-seed.s3-us-west-1.amazonaws.com/Doom+Eternal/de-cover.jpg')
de.photos.attach(io: de_cover, filename: 'de-cover.jpg')

de1 = open('https://fog-seed.s3-us-west-1.amazonaws.com/Doom+Eternal/de-1.jpg')
de.photos.attach(io: de1, filename: 'de-1.jpg')

de2 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Doom+Eternal/de-2.png")
de.photos.attach(io: de2, filename: 'de-2.png')

de3 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Doom+Eternal/de-3.jpeg")
de.photos.attach(io: de3, filename: 'de-3.jpeg')

de4 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Doom+Eternal/de-4.jpg")
de.photos.attach(io: de4, filename: 'de-4.jpg')

de5 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Doom+Eternal/de-5.jpeg")
de.photos.attach(io: de5, filename: 'de-5.jpeg')

de6 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Doom+Eternal/de-6.jpg")
de.photos.attach(io: de6, filename: 'de-6.jpg')

de7 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Doom+Eternal/de-7.jpg")
de.photos.attach(io: de7, filename: 'de-7.jpg')

de_gameplay = open("https://fog-seed.s3-us-west-1.amazonaws.com/Doom+Eternal/de-gameplay.gif")
de.photos.attach(io: de_gameplay, filename: 'de-gameplay.gif')

de.save!

# Seed Beat Saber
bs = Game.new(
  title: 'Beat Saber', 
  description: "Beat Saber is a VR rhythm game where you slash the beats of adrenaline-pumping music as they fly towards you, surrounded by a futuristic world.",
  developer: 'Beat Games',
  publisher: 'Beat Games',
  release_date: Date.new(2019, 5, 21),
  price: 29.99,
  discount: 0.15
)

bs_cover = open("https://fog-seed.s3-us-west-1.amazonaws.com/Beat+Saber/bs-cover.jpg")
bs.photos.attach(io: bs_cover, filename: 'bs-cover.jpg')

bs1 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Beat+Saber/bs-1.jpg")
bs.photos.attach(io: bs1, filename: 'bs-1.jpg')

bs2 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Beat+Saber/bs-2.png")
bs.photos.attach(io: bs2, filename: 'bs-2.png')

bs3 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Beat+Saber/bs-3.jpg")
bs.photos.attach(io: bs3, filename: 'bs-3.jpg')

bs4 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Beat+Saber/bs-4.jpg")
bs.photos.attach(io: bs4, filename: 'bs-4.jpg')

bs5 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Beat+Saber/bs-5.gif")
bs.photos.attach(io: bs5, filename: 'bs-5.gif')

bs.save!

# Seed for Satisfactory
sf = Game.new(
  title: 'Satisfactory', 
  description: "Satisfactory is a first-person open-world factory building game with a dash of exploration and combat.",
  developer: 'Coffee Stain Studios',
  publisher: 'Coffee Stain Publishing',
  release_date: Date.new(2020, 6, 8),
  price: 29.99,
  discount: 0.25
)

sf_cover = open("https://fog-seed.s3-us-west-1.amazonaws.com/Satisfactory/sf-cover.jpg")
sf.photos.attach(io: sf_cover, filename: 'sf-cover.jpg')

sf1 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Satisfactory/sf-1.jpg")
sf.photos.attach(io: sf1, filename: 'sf-1.jpg')

sf2 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Satisfactory/sf-2.jpg")
sf.photos.attach(io: sf2, filename: 'sf-2.jpg')

sf3 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Satisfactory/sf-3.jpg")
sf.photos.attach(io: sf3, filename: 'sf-3.jpg')

sf4 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Satisfactory/sf-4.png")
sf.photos.attach(io: sf4, filename: 'sf-4.png')

sf5 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Satisfactory/sf-5.jpg")
sf.photos.attach(io: sf5, filename: 'sf-5.jpg')

sf_gameplay = open("https://fog-seed.s3-us-west-1.amazonaws.com/Satisfactory/sf-gameplay.gif")
sf.photos.attach(io: sf_gameplay, filename: 'sf-gameplay.gif')

sf.save!

# Seed for Monster Hunter World
mhw = Game.new(
  title: 'Monster Hunter World', 
  description: "Welcome to a new world! In Monster Hunter: World, the latest installment in the series, you can enjoy the ultimate hunting experience, using everything at your disposal to hunt monsters in a new world teeming with surprises and excitement.",
  developer: "CAPCOM Co., Ltd.",
  publisher: "CAPCOM Co., Ltd.",
  release_date: Date.new(2018, 8, 9),
  price: 29.99,
  discount: 0.33
)

mhw_cover = open("https://fog-seed.s3-us-west-1.amazonaws.com/Monster+Hunter+World/mhw-cover.jpeg")
mhw.photos.attach(io: mhw_cover, filename: 'mhw-cover.jpeg')

mhw1 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Monster+Hunter+World/mhw-1.jpg")
mhw.photos.attach(io: mhw1, filename: 'mhw-1.jpg')

mhw2 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Monster+Hunter+World/mhw-2.jpg")
mhw.photos.attach(io: mhw2, filename: 'mhw-2.jpg')

mhw3 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Monster+Hunter+World/mhw-3.jpg")
mhw.photos.attach(io: mhw3, filename: 'mhw-3.jpg')

mhw4 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Monster+Hunter+World/mhw-4.jpg")
mhw.photos.attach(io: mhw4, filename: 'mhw-4.jpg')

mhw5 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Monster+Hunter+World/mhw-5.jpg")
mhw.photos.attach(io: mhw5, filename: 'mhw-5.jpg')

mhw_gameplay = open("https://fog-seed.s3-us-west-1.amazonaws.com/Monster+Hunter+World/mhw-gameplay.gif")
mhw.photos.attach(io: mhw_gameplay, filename: 'mhw-gameplay.gif')

mhw.save!

# Seed for Bloons TD 6
bltd = Game.new(
  title: 'Bloons TD 6', 
  description: "The Bloons are back and better than ever! Get ready for a massive 3D tower defense game designed to give you hours and hours of the best strategy gaming available.",
  developer: "Ninja Kiwi",
  publisher: "Ninja Kiwi",
  release_date: Date.new(2018, 12, 17),
  price: 9.99,
  discount: 0
)

bltd_cover = open("https://fog-seed.s3-us-west-1.amazonaws.com/Bloons+TD/bltd-cover.jpg")
bltd.photos.attach(io: bltd_cover, filename: 'bltd-cover.jpg')

bltd1 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Bloons+TD/bltd-1.jpg")
bltd.photos.attach(io: bltd1, filename: 'bltd-1.jpg')

bltd2 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Bloons+TD/bltd-2.jpg")
bltd.photos.attach(io: bltd2, filename: 'bltd-2.jpg')

bltd3 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Bloons+TD/bltd-3.jpg")
bltd.photos.attach(io: bltd3, filename: 'bltd-3.jpg')

bltd4 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Bloons+TD/bltd-4.jpg")
bltd.photos.attach(io: bltd4, filename: 'bltd-4.jpg')

bltd5 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Bloons+TD/bltd-5.jpg")
bltd.photos.attach(io: bltd5, filename: 'bltd-5.jpg')

bltd_gameplay = open("https://fog-seed.s3-us-west-1.amazonaws.com/Bloons+TD/bltd-gameplay.gif")
bltd.photos.attach(io: bltd_gameplay, filename: 'bltd-gameplay.gif')

bltd.save!

# Seed for Dota 2
dota = Game.new(
  title: 'Dota 2', 
  description: "Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover.",
  developer: "Valve",
  publisher: "Valve",
  release_date: Date.new(2013, 7, 9),
  price: 0.00,
  discount: 0
)

dota_cover = open("https://fog-seed.s3-us-west-1.amazonaws.com/Dota+2/dota-cover.png")
dota.photos.attach(io: dota_cover, filename: 'dota-cover.png')

dota1 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Dota+2/dota-1.jpg")
dota.photos.attach(io: dota1, filename: 'dota-1.jpg')

dota2 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Dota+2/dota-2.jpg")
dota.photos.attach(io: dota2, filename: 'dota-2.jpg')

dota3 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Dota+2/dota-3.jpg")
dota.photos.attach(io: dota3, filename: 'dota-3.jpg')

dota4 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Dota+2/dota-4.jpg")
dota.photos.attach(io: dota4, filename: 'dota-4.jpg')

dota5 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Dota+2/dota-5.jpg")
dota.photos.attach(io: dota5, filename: 'dota-5.jpg')

dota_gameplay = open("https://fog-seed.s3-us-west-1.amazonaws.com/Dota+2/dota-gameplay.gif")
dota.photos.attach(io: dota_gameplay, filename: 'dota-gameplay.gif')

dota.save!

# Seed for Rocket League
rol = Game.new(
  title: 'Rocket League', 
  description: "Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition.",
  developer: "Psyonix LLC",
  publisher: "Psyonix LLC",
  release_date: Date.new(2015, 7, 7),
  price: 19.99,
  discount: 0
)

rol_cover = open("https://fog-seed.s3-us-west-1.amazonaws.com/Rocket+League/rol-cover.jpg")
rol.photos.attach(io: rol_cover, filename: 'rol-cover.jpg')

rol1 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Rocket+League/rol-1.jpg")
rol.photos.attach(io: rol1, filename: 'rol-1.jpg')

rol2 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Rocket+League/rol-2.jpg")
rol.photos.attach(io: rol2, filename: 'rol-2.jpg')

rol3 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Rocket+League/rol-3.jpg")
rol.photos.attach(io: rol3, filename: 'rol-3.jpg')

rol4 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Rocket+League/rol-4.jpg")
rol.photos.attach(io: rol4, filename: 'rol-4.jpg')

rol5 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Rocket+League/rol-5.jpg")
rol.photos.attach(io: rol5, filename: 'rol-5.jpg')

rol_gameplay = open("https://fog-seed.s3-us-west-1.amazonaws.com/Rocket+League/rol-gameplay.gif")
rol.photos.attach(io: rol_gameplay, filename: 'rol-gameplay.gif')

rol.save!

# Seed for Civ 6
civ = Game.new(
  title: "Sid Meier's Civilization VI", 
  description: "Civilization VI offers new ways to interact with your world, expand your empire across the map, advance your culture, and compete against history’s greatest leaders to build a civilization that will stand the test of time.",
  developer: "Firaxis Games",
  publisher: "2K",
  release_date: Date.new(2016, 10, 20),
  price: 59.99,
  discount: 0.50
)

civ_cover = open("https://fog-seed.s3-us-west-1.amazonaws.com/Civ+6/civ-cover.jpg")
civ.photos.attach(io: civ_cover, filename: 'civ-cover.jpg')

civ1 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Civ+6/civ-1.jpg")
civ.photos.attach(io: civ1, filename: 'civ-1.jpg')

civ2 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Civ+6/civ-2.jpg")
civ.photos.attach(io: civ2, filename: 'civ-2.jpg')

civ3 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Civ+6/civ-3.jpg")
civ.photos.attach(io: civ3, filename: 'civ-3.jpg')

civ4 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Civ+6/civ-4.jpg")
civ.photos.attach(io: civ4, filename: 'civ-4.jpg')

civ5 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Civ+6/civ-5.jpg")
civ.photos.attach(io: civ5, filename: 'civ-5.jpg')

civ_gameplay = open("https://fog-seed.s3-us-west-1.amazonaws.com/Civ+6/civ-gameplay.gif")
civ.photos.attach(io: civ_gameplay, filename: 'civ-gameplay.gif')

civ.save!

# Seed for Path of Exile
poe = Game.new(
  title: "Path of Exile", 
  description: "You are an Exile, struggling to survive on the dark continent of Wraeclast, as you fight to earn power that will allow you to exact your revenge against those who wronged you.",
  developer: "Grinding Gear Games",
  publisher: "Grinding Gear Games",
  release_date: Date.new(2013, 10, 23),
  price: 0.00,
  discount: 0
)

poe_cover = open("https://fog-seed.s3-us-west-1.amazonaws.com/Path+of+Exile/poe-cover.jpg")
poe.photos.attach(io: poe_cover, filename: 'poe-cover.jpg')

poe1 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Path+of+Exile/poe-1.jpg")
poe.photos.attach(io: poe1, filename: 'poe-1.jpg')

poe2 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Path+of+Exile/poe-2.jpg")
poe.photos.attach(io: poe2, filename: 'poe-2.jpg')

poe3 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Path+of+Exile/poe-3.jpg")
poe.photos.attach(io: poe3, filename: 'poe-3.jpg')

poe4 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Path+of+Exile/poe-4.jpg")
poe.photos.attach(io: poe4, filename: 'poe-4.jpg')

poe5 = open("https://fog-seed.s3-us-west-1.amazonaws.com/Path+of+Exile/poe-5.jpg")
poe.photos.attach(io: poe5, filename: 'poe-5.jpg')

poe_gameplay = open("https://fog-seed.s3-us-west-1.amazonaws.com/Path+of+Exile/poe-gameplay.gif")
poe.photos.attach(io: poe_gameplay, filename: 'poe-gameplay.gif')

poe.save!

# Seed games genres
GamesGenre.destroy_all

# for EFT
GamesGenre.create(game_id: 1, genre_id: 1)
GamesGenre.create(game_id: 1, genre_id: 2)
GamesGenre.create(game_id: 1, genre_id: 3)

# for Cyberpunk
GamesGenre.create(game_id: 2, genre_id: 1)
GamesGenre.create(game_id: 2, genre_id: 2)
GamesGenre.create(game_id: 2, genre_id: 3)

# for Doom Eternal
GamesGenre.create(game_id: 3, genre_id: 1)
GamesGenre.create(game_id: 3, genre_id: 2)
GamesGenre.create(game_id: 3, genre_id: 3)

# for Beat Saber
GamesGenre.create(game_id: 4, genre_id: 4)
GamesGenre.create(game_id: 4, genre_id: 5)
GamesGenre.create(game_id: 4, genre_id: 6)

# for Satisfactory
GamesGenre.create(game_id: 5, genre_id: 7)
GamesGenre.create(game_id: 5, genre_id: 8)

# for Monster Hunter World
GamesGenre.create(game_id: 6, genre_id: 1)
GamesGenre.create(game_id: 6, genre_id: 3)
GamesGenre.create(game_id: 6, genre_id: 9)

# for Bloons TD 6
GamesGenre.create(game_id: 7, genre_id: 10)
GamesGenre.create(game_id: 7, genre_id: 11)

# for Dota 2
GamesGenre.create(game_id: 8, genre_id: 11)
GamesGenre.create(game_id: 8, genre_id: 12)

# for Rocket Leauge
GamesGenre.create(game_id: 9, genre_id: 13)
GamesGenre.create(game_id: 9, genre_id: 14)
GamesGenre.create(game_id: 9, genre_id: 15)

# for Civ 6
GamesGenre.create(game_id: 10, genre_id: 11)
GamesGenre.create(game_id: 10, genre_id: 16)
GamesGenre.create(game_id: 10, genre_id: 17)

# for PoE
GamesGenre.create(game_id: 11, genre_id: 1)
GamesGenre.create(game_id: 11, genre_id: 3)
GamesGenre.create(game_id: 11, genre_id: 18)