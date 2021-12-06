# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!(username: "reynafan12345", password:"reyna", image:"https://static.wikia.nocookie.net/valorant/images/b/b0/Reyna_icon.png/revision/latest?cb=20200607180311");
User.create!(username: "asdf", password:"hj4h", image:"https://www.rover.com/blog/wp-content/uploads/2017/02/pug-2648774_1920.jpg");
User.create!(username: "efe", password:"asdf", image:"https://www.allkpop.com/upload/2021/11/content/040124/1636003493-07d78f47-ea5b-4e44-a26d-631b0f8e24ea-1.jpg");
User.create!(username: "1234123", password:"s123", image:"https://static.onecms.io/wp-content/uploads/sites/20/2021/04/21/dog-nose.jpg");

Topic.create!(name: "life")
Topic.create!(name: "art")
Topic.create!(name: "hobbies")

Post.create!(title: "hello", body: "iassasdfasdfaadfadts", likes: 0, image: "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Perfect-Sunset-Nature-Background-Image.jpeg", user_id: 1)
Post.create!(title: "poo", body: "nasasdfasdfdadaso", likes: 10, image: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/07/solar_orbiter_s_first_views_of_the_sun5/22136942-2-eng-GB/Solar_Orbiter_s_first_views_of_the_Sun_pillars.gif", user_id: 2)
Post.create!(title: "mtmtymty", body: "afasdfasdfasdf123123s dsbafgmnfb dfhb fbdf dsgb jsdbg dvcdsjhg dsbv dshvjncbxvhbdshvdr svvdsfdsh dsbfghgdshgk sbdshfgds sdgbdsgk dgshgbhdshg bdgdbsgkdsl gbdsgbhdsf dsghdsghv dghds gkhsdjhgd sg dsghdsjkg sd", likes: 0, image: nil, user_id: 3)
Post.create!(title: "adf", body: "itsasdfasdfsdasdsads", likes: 10, image: "https://www.planetware.com/wpimages/2019/12/washington-dc-in-pictures-most-beautiful-places-to-visit-jefferson-memorial.jpg", user_id: 4)
Post.create!(title: "reyna fan art. ", body: " ", image: 'https://i.pinimg.com/originals/a2/70/57/a270579e1ff09f46dbac1f4560a6e408.jpg', likes: 38, user_id: 1)

PostTopic.create!(topic_id: 1, post_id: 1)
PostTopic.create!(topic_id: 2, post_id: 1)
PostTopic.create!(topic_id: 3, post_id: 4)
PostTopic.create!(topic_id: 1, post_id: 2)
PostTopic.create!(topic_id: 1, post_id: 3)
PostTopic.create!(topic_id: 2, post_id: 5)
PostTopic.create!(topic_id: 3, post_id: 1)
PostTopic.create!(topic_id: 3, post_id: 3)

Comment.create!(body: 'dideufh ahfhas fsafsacbc sfa', user_id: 1, post_id: 1)
Comment.create!(body: 'dideufh sfa', user_id: 1, post_id: 1)
Comment.create!(body: 'zzzzzzzzzzzzzz', user_id: 2, post_id: 1)
Comment.create!(body: 'omg :heart_eyes:', user_id: 3, post_id: 3)
Comment.create!(body: 'ghrtuhtrghfdgf', user_id: 4, post_id: 2)
Comment.create!(body: 'dideufh ahfhas fsafsacbc sfa', user_id: 2, post_id: 3)
Comment.create!(body: 'dideufh ahfhas fsafsacbc sfa', user_id: 3, post_id: 5)
Comment.create!(body: 'dideufh ahfhas fsafsacbc sfa', user_id: 3, post_id: 4)

puts('done')