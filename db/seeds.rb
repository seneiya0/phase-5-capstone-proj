# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create!(username: "reynafan12345", password:"reyna", image:"https://static.wikia.nocookie.net/valorant/images/b/b0/Reyna_icon.png/revision/latest?cb=20200607180311");
User.create!(username: "alan1", password:"123", image:"https://cdn.discordapp.com/attachments/906541234003263561/916934651380121620/alan.png");
User.create!(username: "alan2", password:"123", image:"https://cdn.discordapp.com/attachments/906541234003263561/916934651380121620/alan.png");
User.create!(username: "conceal", password:"mason", image:"https://i.pinimg.com/originals/d1/c4/fb/d1c4fbac769b25def9237bf5e0015911.png");
User.create!(username: "cozi", password:"mia", image:"https://data.whicdn.com/images/346453375/original.jpg");

Topic.create!(name: "art")
Topic.create!(name: "gaming")
Topic.create!(name: "code")
Topic.create!(name: "fashion")
Topic.create!(name: "life")
Topic.create!(name: "love")
Topic.create!(name: "animals")
Topic.create!(name: "friendship")
Topic.create!(name: "music")
Topic.create!(name: "food")
Topic.create!(name: "hobbies")

Post.create!(title: "unpopular opinion", body: "valorant is so fun, everytime I play it I'm filled with joy. Only smiles when I play valorant!!!!", likes: -7, image: nil, user_id: 4)
Post.create!(title: "I've been thinking about this", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", likes: 22, image: nil, user_id: 2)
Post.create!(title: "jobs in tech?", body: "i've been looking for remote jobs in tech with no experience needed does anyone know of any???", likes: 2, image: nil, user_id: 3)
Post.create!(title: "acnh celebration!", body: "celebrating with my favorite villagers, do you have any favorites?", likes: 10, image: "https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/Nintendo%20Switch/Games/Animal%20Crossing:%20New%20Horizons/Video/2020-04-09%20Animal%20Crossing%20Accolades/posters/2020-4-9_Animal_Crossing_Accolades", user_id: 5)
Post.create!(title: "the best poem of all time", body: "<3", image: 'https://miro.medium.com/max/461/1*3jG2dgsvPApJM2SLKWIxeQ.jpeg', likes: 57, user_id: 5)
Post.create!(title: "reyna fan art.", body: " ", image: 'https://i.pinimg.com/originals/a2/70/57/a270579e1ff09f46dbac1f4560a6e408.jpg', likes: 38, user_id: 1)

PostTopic.create!(topic_id: 2, post_id: 1)
PostTopic.create!(topic_id: 11, post_id: 1)
PostTopic.create!(topic_id: 6, post_id: 1)
PostTopic.create!(topic_id: 3, post_id: 3)
PostTopic.create!(topic_id: 5, post_id: 3)
PostTopic.create!(topic_id: 5, post_id: 2)
PostTopic.create!(topic_id: 6, post_id: 2)
PostTopic.create!(topic_id: 8, post_id: 2)
PostTopic.create!(topic_id: 8, post_id: 5)
PostTopic.create!(topic_id: 6, post_id: 5)
PostTopic.create!(topic_id: 2, post_id: 6)


puts('done')