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

Genre.create(name: 'action')
Genre.create(name: 'shooter')
Genre.create(name: 'rpg')

Game.destroy_all

# Seed Escape From Tarkov
eft = Game.new(
  title: 'Escape From Tarkov', 
  description: 'Escape from Tarkov is a hardcore and realistic online first-person action RPG/Simulator with MMO features and a story-driven walkthrough.',
  developer: 'Battlestate Games',
  publisher: 'Battlestate Games',
  release_date: Date.new(2017, 7, 27),
  price: 44.99
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

eft.save!

GamesGenre.destroy_all

GamesGenre.create(game_id: 1, genre_id: 1)
GamesGenre.create(game_id: 1, genre_id: 2)
GamesGenre.create(game_id: 1, genre_id: 3)