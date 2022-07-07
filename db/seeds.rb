require 'faker'

puts "Seeding..."
1.times do
  Store.create(
    name: "Mom'n Pop Book Shop",
    location: "Middle America"
  )
end
150.times do
  author = Author.create(
    name: Faker::Book.author,
    hometown: Faker::Address.city,
    bio: Faker::Lorem.paragraph(sentence_count: 3)
  )
end
500.times do
  book = Book.create(
    title: Faker::Book.title,
    quantity: rand(0..20),
    description: Faker::Lorem.paragraph(sentence_count: 3),
    image: Faker::LoremFlickr.image(size: "150x300"),
    author_id: rand(1..150),
    store_id: 1
  )
end
500.times do
  genre = Genre.create(
    genre: Faker::Book.genre,
    age_group: ["Children", "Young Adult", "Adult"].sample
  )
end
500.times do
  book_genre = BookGenre.create(
    genre_id: rand(1..500),
    book_id: rand(1..500)
  )
end
# 1.times do
#   Store.create(
#     name: "Mom'n Pop Book Shop",
#     location: "Middle America"
#   )
#   150.times do
#     author = Author.create(
#       name: Faker::Book.author,
#       hometown: Faker::Address.city,
#       bio: Faker::Lorem.paragraph(sentence_count: 3)
#     )
#     3.times do
#       book = Book.create(
#         title: Faker::Book.title,
#         quantity: rand(0..20),
#         description: Faker::Lorem.paragraph(sentence_count: 3),
#         image: Faker::LoremFlickr.image(size: "50x60"),
#         author_id: rand(0..150),
#         store_id: 1
#       )
#       1.times do
#         genre= Genre.create(
#           genre: Faker::Book.genre,
#           age_group: ["Children", "Young Adult", "Adult"].sample
#         )
#         1.times do
#           book_genre = BookGenre.create(
#             genre_id: genre.id,
#             book_id: book.id
#           )
#         end
#       end
#     end
#   end
# end

puts "Seeds created"