# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

puzzle=Puzzle.create(
  name: "Waldo Puzzle",
  imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2017%2F11%2F17%2F275056-Waldo-puzzles.jpg&f=1&nofb=1&ipt=662661cb38816adb1b71d706d656fa417edd15bb508cf08f3151d349d78b68b1"
)
Puzzle.create(
  name: "Incomplete",
  imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2017%2F11%2F17%2F275056-Waldo-puzzles.jpg&f=1&nofb=1&ipt=662661cb38816adb1b71d706d656fa417edd15bb508cf08f3151d349d78b68b1"
)
Puzzle.create(
  name: "Incomplete",
  imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2017%2F11%2F17%2F275056-Waldo-puzzles.jpg&f=1&nofb=1&ipt=662661cb38816adb1b71d706d656fa417edd15bb508cf08f3151d349d78b68b1"
)
puzzle.characters.create(name: "Letter Waldo", left: 23, top: 5)
puzzle.characters.create(name: "Caveman Ring", left: 33, top: 39)
puzzle.characters.create(name: "Merry-go-around Flag", left: 52, top: 10)
