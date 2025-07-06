# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

3.times do |i|
  puzzle=Puzzle.create(
    name: "#{i} puzzle",
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2017%2F11%2F17%2F275056-Waldo-puzzles.jpg&f=1&nofb=1&ipt=662661cb38816adb1b71d706d656fa417edd15bb508cf08f3151d349d78b68b1"
  )
  puzzle.characters.create(name: "#{i} character", left: 10*(i+1), top: 10*(i+1))
  puzzle.characters.create(name: "#{i} character 2", left: 20*(i+1), top: 20*(i+1))
  puzzle.characters.create(name: "#{i} character 3", left: 30*(i+1), top: 30*(i+1))
end
